//Create a web server with express
var express = require('express');
var app = express();
var path = require('path');
var comments = require('./comments.json');

app.get('/comments', function(req, res) {
  res.json(comments);
});