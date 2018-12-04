var express = require("express");
var bodyParser = require('body-parser')
var app = express()
var path = require("path");
var jsdom = require("jsdom");
var { JSDOM } = jsdom;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',function(req,res){
  res.sendFile( path.resolve('../html/index.html') );
});

app.get('/new_issue',function(req,res){
res.sendFile( path.resolve('../html/new_issue.html') );
});

app.get('/new_project',function(req,res){
  res.sendFile( path.resolve('../html/new_project.html') );
});

app.get('/edit_issue',function(req,res){
  res.sendFile( path.resolve('../html/edit_issue.html') );
});

app.get('/login',function(req,res){
  res.sendFile( path.resolve('../html/login.html') );
});

app.get('/new_task',function(req,res){
  res.sendFile( path.resolve('../html/new_task.html') );
});

app.get('/edit_task',function(req,res){
  res.sendFile( path.resolve('../html/edit_task.html') );
});

app.get('/new_sprint',function(req,res){
  res.sendFile( path.resolve('../html/new_sprint.html') );
});

app.get('/edit_sprint',function(req,res){
  res.sendFile( path.resolve('../html/edit_sprint.html') );
});

app.post('/login', function(request, response){
  var user = request.body.username;
  var pass = request.body.password;
});

app.post('/signup', function(request, response){
  var user = request.body.username;
  var pass = request.body.password;
});

app.post('/addissue', function(request, response){
  document = new JSDOM("../src/new_issue.html").window.document;
  var pid = request.body.pid
  var id = request.body.id;
  var description = request.body.description;
  var priority = request.body.priority;
  var difficulty = request.body.difficulty;
  var sprint = request.body.sprint;
  console.log(pid + id + description + priority + difficulty + sprint);
  document.writeln("test");
  response.sendFile( path.resolve('../html/index.html'));
  });

app.post('/addproj', function(request, response){
  var pid = request.body.pid;
  var title = request.body.title;
  var username = request.body.username;
  console.log(pid + title + username);  
  response.sendFile( path.resolve('../html/index.html'));
});

app.post('/addtask', function(request, response){
  var id = request.body.id;
  var description = request.body.description;
  var component = request.body.component;
  var ressource = request.body.ressource;
  var us = request.body.us;
  var dependency = request.body.dependency;
  var state = request.body.state;
  var dev = request.body.dev;
  var jh = request.body.jh;
  console.log(id + description + component + ressource + us + dependency + state + dev + jh);
  response.sendFile( path.resolve('../html/index.html')); 
}); 

app.post('/addsprint', function(request, response){
  var pid = request.body.pid;
  var start = request.body.start;
  var end = request.body.end;
  var state = request.body.state;
  var number = request.body.number;
  console.log(start + end + state + number);
  response.sendFile( path.resolve('../html/index.html')); 
}); 



app.listen(8080);

console.log("Running at Port 8080");
