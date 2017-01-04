'use strict'

const http = require('http');
const path = require('path');

//file system module
const fs = require('fs');
//port
const port = process.env.PORT || 8000;
//express middleware
const express = require('express');
const app = express();
//module for merging different html in order to parse properly
const handlebars = require('express-handlebars').create({
                                                          defaultLayout: 'main'
                                                        });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//module for downloading images to server
const formidable = require('formidable');
//module to parse data in page
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
                                extended: true
                                }
));
//module for cookies
const credentials = require('./credentials.js');
const cookieParser = require('cookie-parser');
app.use(cookieParser(credentials.cookieSecret));
//Block the header from containing information about the server
app.disable('x-powered-by');

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/assets'));

app.get("/", function(req, res){
  res.render('home');
});

app.post('/process', function (req, res) {
  console.log('Form input is:' + req.query.form);
  console.log("Canvas width requested: " + req.body.newImageWidth);
  console.log("Canvas height requested: " + req.body.newImageHeight);
  res.redirect(303, '/');
});


app.use(function (req, res, next) {
  console.log("looking for URL: " + req.url);
});


app.listen(port, function () {
  console.log("Listening on port", port, "for project 'Image filtering'");
});
