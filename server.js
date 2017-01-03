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

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/plain");
  console.log("---------");
  console.log(req.url);
  var urlTwo = {};
  var parametersString = req.url.slice(req.url.indexOf("?") + 1);
  var parametersSplit = parametersString.split("&");
  for (var i = 0; i < parametersSplit.length; i++) {
    var paramElements = parametersSplit[i].split("=");
    urlTwo[paramElements[0]] = paramElements[1].replace(/[%20]+/g, " ");
  }
  res.end(JSON.stringify(urlTwo));
}


app.get("/new_image", function (req, res) {
  res.render('new_image');
});


app.use(function (req, res, next) {
  console.log("looking for URL: " + req.url);
});


//this probably needs to go
const pages = {
  "new_image": path.join(__dirname, '/new_image'),
  "about": path.join(__dirname, 'about1.html'),
  "faq": path.join(__dirname, 'faq1.html'),
};



const index = path.join(__dirname, 'index.html');


function handleRequest(req, res) {
  //function for 500 errors
  function fiveHundredError(err) {
    if (err) {
      console.error(err.stack);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/html');
      return res.end('Internal Server Error');
    }
  }
  //function for 404 errors
  function fourHundredFourError() {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end("404 Not found");
  }
  //function for the response pages
  function getResponse (page) {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end(page);
  }

  if (req.method ==='GET' && req.url === "/") {
    fs.readFile(index, 'utf8', function (err, index) {
      fiveHundredError(err);

      getResponse(index);
    });
  }
  else if (req.method === "GET") {
    var extension = req.url;
    console.log(extension);
    console.log(pages[extension]);
    fs.readFile(pages[extension.slice(1)], 'utf8', function (err, file) {
      fiveHundredError(err);

      getResponse(file);
    });
  }
  else {
    fourHundredFourError();
  }
}

// var server = http.createServer(handleRequest);

// server.listen(port, function() {
// 	console.log("I'm listening on port", port, "and for project 'Image-filtering'")
// });

app.listen(port, function () {
  console.log("Listening on port", port, "for project 'Image filtering'");
});
