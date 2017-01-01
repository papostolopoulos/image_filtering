'use strict'

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8000;
const path = require('path');
// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
//
// app.disable('x-powered-by');
// app.use(morgan('short'));
// app.use(bodyParser.json());
//
// app.set('view engine', 'ejs');


const pages = {
  "untitled": path.join(__dirname, './assets/pages/01-file/untitled.html'),
  "about": path.join(__dirname, 'about1.html'),
  "faq": path.join(__dirname, 'faq1.html'),
};
const index = path.join(__dirname, 'index.html');

console.log(pages["untitled"]);

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

var server = http.createServer(handleRequest);

server.listen(port, function() {
	console.log("I'm listening on port", port, "and for project 'Image-filtering'")
});
