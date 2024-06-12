// server.js

// init project
const OpenAI = require("openai");

const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
var fs = require('fs-js');

const openai = new OpenAI();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

let problem = "";
let idea = "";

app.post("/abc", function(req, res) {
  console.log("test");
  problem = req.body.problem;
  idea = req.body.idea;
  console.log(problem);
  console.log(idea);
  res.redirect("/"); // redirecting back to index.html solves the issue of eternal refresh 
  // but creates new problem of not being able to render the hats grid separately
})



// read in hat data
const fileContent = fs.readFileSync("hatPrompts.txt", "utf-8");
const lines = fileContent.split("\n");

const df = {};
for (const line of lines) {
  const [hat, r, c] = line.split("\t");
  df[hat] = { Role: r, Content: c, Response: "" };
}

// Access text input in front end with localStorage.getItem('problem')
// and localStorage.getItem('idea') for problem statement and idea respectively
// error calling openai
async function getHatResponse(hat, prob, idea) {
  console.log("test")
  let role = df[hat]['Role'];
  let content = df[hat]['Content'];
  
  let isBlue = (hat == "Blue");
  let bluePrompt = "";
  if (isBlue) {
    Object.entries(df).forEach(function([hat, dict]) {
        Object.entries(dict).forEach(function([key, value]) {
          if(value == "Role" || value == "Response") {
            bluePrompt += "${hat} ${key}: ${value}\n";
          }
        });
    });
  }
  
  const problem =
    "You are a team member in a design team, helping to develop ideas focused on the problem statement: " +
    prob;

  let message = "> Checking with the " + hat + " hat...\n";

  try {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: role + problem },
          { role: "user", content: isBlue ? bluePrompt : idea },
          { role: "user", content: content },
        ],
      });
    console.log(response.choices[0]["message"]["content"])
    df[hat]['Response'] = response.choices[0]["message"]["content"];
    
    

    message += "> " + response.choices[0]["message"]["content"];
    return message;
  } catch (error) {
    console.error(
      "Error calling OpenAI API:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}



app.get('/hats/:color', async function(req, res) {
  console.log("problem at call time: " + problem)
  let message = await getHatResponse(req.params.color, problem, idea);
  console.log(message);
  console.log('received GET request for...' + req.params.color);
  res.send(message); // how to deal with promise objects?
});



// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


function getCurrentFormattedDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$1/$2/$3, $4');
}