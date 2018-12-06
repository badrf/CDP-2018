var express = require("express");
var bodyParser = require('body-parser')
var app = express()
var path = require("path");
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var none = "None";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',function(req,res){
  res.render( path.resolve('../ejs/index.ejs') );
});

app.get('/new_issue',function(req,res){
  res.render( path.resolve('../ejs/new_issue.ejs') );
});

app.get('/new_project',function(req,res){
  res.render( path.resolve('../ejs/new_project.ejs') );
});

app.get('/edit_issue',function(req,res){
  res.render( path.resolve('../ejs/edit_issue.ejs') );});

app.get('/login',function(req,res){
  res.render( path.resolve('../ejs/login.ejs') );});

app.get('/new_task',function(req,res){
  res.render( path.resolve('../ejs/new_task.ejs') );});

app.get('/edit_task',function(req,res){
  res.render( path.resolve('../ejs/edit_task.ejs') );});

app.get('/new_sprint',function(req,res){
  res.render( path.resolve('../ejs/new_sprint.ejs') );});

app.get('/edit_sprint',function(req,res){
  res.render( path.resolve('../ejs/edit_sprint.ejs') );});

app.post('/login', function(req, res){
  var user = req.body.username;
  var pass = req.body.password;
});

app.post('/signup', function(req, res){
  var user = req.body.username;
  var pass = req.body.password;
});

app.post('/addissue', function(req, res){
  document = new JSDOM("../src/new_issue.html").window.document;
  var pid = req.body.pid
  var id = req.body.id;
  var description = req.body.description;
  var priority = req.body.priority;
  var difficulty = req.body.difficulty;
  var sprint = req.body.sprint;
  console.log(pid + id + description + priority + difficulty + sprint);
  document.writeln("test");
  res.render( path.resolve('../ejs/new_issue.ejs'), {pid : pid, id : id, description : description, priority : priority, difficulty : difficulty, sprint : sprint}); 
});

app.post('/addproj', function(req, res){
  var pid = req.body.pid;
  var title = req.body.title;
  var username = req.body.username;
  res.render( path.resolve('../ejs/new_project.ejs'), { pid : pid, title : title, username : username } );
});

app.post('/addtask', function(req, res){
  var pid = req.body.pid
  var id = req.body.id;
  var description = req.body.description;
  var component = req.body.component;
  var ressource = req.body.ressource;
  var us = req.body.us;
  var dependency = req.body.dependency;
  var state = req.body.state;
  var dev = req.body.dev;
  var jh = req.body.jh;
  console.log(id + description + component + ressource + us + dependency + state + dev + jh);
  res.render( path.resolve('../ejs/new_task.ejs'), {pid : pid, id : id, description : description, component : component, ressource : ressource, us : us, dependency : dependency, state : state, dev : dev, jh : jh})
}); 

app.post('/addsprint', function(req, res){
  var pid = req.body.pid;
  var start = req.body.start;
  var end = req.body.end;
  var state = req.body.state;
  var number = req.body.number;
  res.render( path.resolve('../ejs/new_sprint.ejs'), {pid : pid, start : start, end : end, state : state, number : number})
}); 



app.listen(8080);

console.log("Running at Port 8080");
