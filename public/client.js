// client-side js
// run by the browser each time view template is loaded

console.log("running client...");

// $("#form-submit").click(savePrompt);

// function savePrompt() {
//   let prompt = {
//     problem: $("[name=problem]").val(),
//     idea: $("[name=idea]").val()
//   };
  
//   localStorage.setItem('prompt', JSON.stringify(prompt));
//   console.log(localStorage.getItem('prompt'));
  
//   fetch("https://sixhatsengine.glitch.me/abc", {
//     method: "POST"
//   }).then((data) => { 
//     console.log(data);
//   });
// }

function showHats() {
  $('#hats-grid').css('display', 'grid');
}

$(document).ready(function(){
  //$('#prompt').submit((evt) => evt.preventDefault());
  
  $('#load-white').click( function() {
    
    $('#white>div').empty();
    $('<p>Loading...</p>').appendTo('#white>div');
    
    $.ajax({
      type: 'GET',
      url: 'https://sixhatsengine.glitch.me/hats/White',
      success: function(response) { 
        console.log(response);
        
        let res = "";
        const paras = response.split('\n');
        paras.forEach(function(para) {
          res += '<p>' + para + '</p>'
        });
        
        $('#white>div').empty();
        $(res).appendTo('#white>div');
      },
      error: function(xhr, status, err) {
        console.log(xhr.responseText);
      },
      complete: function(response) {
        console.log(response);
      }
    });
  });
  
  $('#load-red').click(function() {
    $('#red>div').empty();
    $('<p>Loading...</p>').appendTo('#red>div');
    $.ajax({
      type: 'GET',
      url: 'https://sixhatsengine.glitch.me/hats/Red',
      success: function(response) { 
        console.log(response);
        
        let res = "";
        const paras = response.split('\n');
        paras.forEach(function(para) {
          res += '<p>' + para + '</p>'
        });
        
        $('#red>div').empty();
        $(res).appendTo('#red>div');
      },
      error: function(xhr, status, err) {
        console.log(xhr.responseText);
      },
      complete: function(response) {
        console.log(response);
      }
    });
  });
  
  $('#load-black').click(function() {
    // $.get("https://six-hats-engine.glitch.me/hats/White");
    $('<p>Loading...</p>').appendTo('#black>div');
    $.ajax({
      type: 'GET',
      url: 'https://sixhatsengine.glitch.me/hats/Black',
      success: function(response) { 
        console.log(response);
        
        let res = "";
        const paras = response.split('\n');
        paras.forEach(function(para) {
          res += '<p>' + para + '</p>'
        });
        
        $('#black>div').empty();
        $(res).appendTo('#black>div');
      },
      error: function(xhr, status, err) {
        console.log(xhr.responseText);
      },
      complete: function(response) {
        console.log(response);
      }
    });
  });
  
  $('#load-yellow').click(function() {
    // $.get("https://six-hats-engine.glitch.me/hats/White");
    $('<p>Loading...</p>').appendTo('#yellow>div');
    $.ajax({
      type: 'GET',
      url: 'https://sixhatsengine.glitch.me/hats/Yellow',
      success: function(response) { 
        console.log(response);
        
        let res = "";
        const paras = response.split('\n');
        paras.forEach(function(para) {
          res += '<p>' + para + '</p>'
        });
        
        $('#yellow>div').empty();
        $(res).appendTo('#yellow>div');
      },
      error: function(xhr, status, err) {
        console.log(xhr.responseText);
      },
      complete: function(response) {
        console.log(response);
      }
    });
  });
  
  $('#load-green').click(function() {
    // $.get("https://six-hats-engine.glitch.me/hats/White");
    $('<p>Loading...</p>').appendTo('#green>div');
    $.ajax({
      type: 'GET',
      url: 'https://sixhatsengine.glitch.me/hats/Green',
      success: function(response) { 
        console.log(response);
        
        let res = "";
        const paras = response.split('\n');
        paras.forEach(function(para) {
          res += '<p>' + para + '</p>'
        });
        
        $('#green>div').empty();
        $(res).appendTo('#green>div');
      },
      error: function(xhr, status, err) {
        console.log(xhr.responseText);
      },
      complete: function(response) {
        console.log(response);
      }
    });
  });
  
  $('#load-blue').click(function() {
    // $.get("https://six-hats-engine.glitch.me/hats/White");
    $('<p>Loading...</p>').appendTo('#blue>div');
    $.ajax({
      type: 'GET',
      url: 'https://sixhatsengine.glitch.me/hats/Blue',
      success: function(response) { 
        console.log(response);
        
        let res = "";
        const paras = response.split('\n');
        paras.forEach(function(para) {
          res += '<p>' + para + '</p>'
        });
        
        $('#blue>div').empty();
        $(res).appendTo('#blue>div');
      },
      error: function(xhr, status, err) {
        console.log(xhr.responseText);
      },
      complete: function(response) {
        console.log(response);
      }
    });
  });
  
  
})
