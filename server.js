'use strict'

const http = require('http');
//Run this in node and observe path.normalize, path.dirname, path.basename, path.extname
const path = require('path');
//module Filesystem for reading files, modifying, deleting them
const fs = require('fs');
//port
const port = process.env.PORT || 8000;
//express middleware
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
//module for working with file paths. It also normalizes the paths.
//module for displaying the responses in server
const logger = require('morgan');
app.use(logger('dev'));
//module for merging different html in order to parse properly
const handlebars = require('express-handlebars').create({
                                                          defaultLayout: 'main'
                                                        });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
//module for downloading images to server
const formidable = require('formidable');
//module to parse data in page like JSON files
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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


//------------------------------------------------------

app.get("/", function(req, res){
  res.render('home');
});


//New image creation
app.post('/newImage', function (req, res) {
  console.log('Form input is:' + req.query.form);
  console.log("Canvas width requested: " + req.body.newImageWidth);
  console.log("Canvas height requested: " + req.body.newImageHeight);
  var canvasDimensions = {}
  canvasDimensions.width = req.body.newImageWidth;
  canvasDimensions.height = req.body.newImageHeight;
  if (canvasDimensions.width === 'undefined' || canvasDimensions.height === 'undefined') {
    canvasDimensions.width = 800;
    canvasDimensions.height = 600;
  }
  console.log(canvasDimensions);
  res.render('home',
    {
      canvasDimensions: canvasDimensions
    });
});

// if (canvasDimensions.width === 'undefined' || canvasDimensions.height === 'undefined') {
//   canvasDimensions.width = 800;
//   canvasDimensions.height = 600;
// }

//Save image
// app.post('/saveImage', function (req, res) {
//   console.log('Save image input is:' + req.query.form);
//   console.log("Name of the image is: " + req.body.saveImageName);
//   console.log("type of image to save is: " + req.body.saveImageType);
//   var saveImageObj = {}
//   saveImageObj.name = req.body.saveImageName;
//   saveImageObj.type = req.body.saveImageType;
//
//   console.log(saveImageObj);
//   res.render('home',
//     {
//       saveImageObj: saveImageObj
//     });
// });

// //Open image
// app.post('/openImage', function (req, res) {
//   console.log('Form input is:' + req.query.form);
//   console.log("open image location: " + req.body.browseImage);
//   // var canvasDimensions = {}
//   // canvasDimensions.width = req.body.newImageWidth;
//   // canvasDimensions.height = req.body.newImageHeight;
//   // if (canvasDimensions.width === 'undefined' || canvasDimensions.height === 'undefined') {
//   //   canvasDimensions.width = 800;
//   //   canvasDimensions.height = 600;
//   // }
//   // console.log(canvasDimensions);
//   res.render('home');
// });



app.use(function (req, res, next) {
  console.log("looking for URL: " + req.url);
});


//-----------------Errors-----------------------
//404 error
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//500 server errors

//development error
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//production error
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  })
})

//Port listen
app.listen(port, function () {
  console.log("Listening on port", port, "for project 'Image filtering'");
});
