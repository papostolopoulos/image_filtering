console.log(`canvas`);

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
var uploadedFile = document.getElementById("browseImage");
var openButton = document.getElementById("openImageForm");

initImageLoader();

window.addEventListener("DOMContentLoader", initImageLoader);

function initImageLoader() {
  uploadedFile.addEventListener('change', uploadedFileFunction);

  function uploadedFileFunction(ev) {
    var file = ev.target.files[0];
    openButton.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFile(file);
    });
  }
}

function handleFile(file) {
  var tempImageStore = new Image();
  var imageType = /image.*/;

  if (file.type.match(imageType)) {
    var reader = new FileReader();

//Set up onload function
    reader.onloadend = function (ev) {
      //Get the image width and height

      // Draw image in canvas
      // context.drawImage(ev.target.result,0,0);
      tempImageStore.src = ev.target.result;
      canvas.height = tempImageStore.height;
      canvas.width = tempImageStore.width;
      context.drawImage(tempImageStore,0,0);
    }
  }
  reader.readAsDataURL(file);

}

//Save image
var saveImage = document.getElementById('saveImage'); //This is the href
console.log(saveImage);
// saveImage.addEventListener("click", function() {
//   console.log(document.getElementById('saveImage'));
//   this.href = canvas.toDataURL();
// }, true);


var saveImageSubmit = document.getElementById('saveImageSubmit'); //submit button
console.log(saveImageSubmit);
// saveImageSubmit.addEventListener('click', function () {
//   console.log("in the listener");
//   var saveImageName = document.getElementById("saveImageName");
//   var nameAttribute =
//   console.log(saveImage.getAttribute("download"));
//   saveImage.setAttribute("download", saveImageName.value);
//   console.log(saveImage.getAttribute("download"));
//   console.log(canvas.toDataURL());
//
//
//   saveImage.href = canvas.toDataURL();
// });


saveImageSubmit.addEventListener('click', function () {
  console.log("in the listener");
  var saveImageName = document.getElementById("saveImageName");
  var nameAttribute =
  console.log(saveImage.getAttribute("download"));
  saveImage.setAttribute("download", saveImageName.value);
  console.log(saveImage.getAttribute("download"));
  console.log();
  var imageTitle = saveImage.getAttribute("download")
  saveImage.href = canvas.toDataURL();
  console.log(typeof canvas.toDataURL());
  // var canvasInfo = JSON.parse(canvas.toDataURL());
  // console.log(canvasInfo.data);

  // function downloadCanvas(link, filename) {
  //   console.log("in function");
  //   link.href = canvas.toDataURL();
  //   link.download = filename;
  // }
  //
  // downloadCanvas(saveImage, imageTitle+".png");
  saveImage.download = imageTitle+".png"
}, true);

// var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext('2d');
//
// window.addEventListener("DOMContentLoader", initImageLoader);
//
// function initImageLoader() {
//   console.log("inside");
//   var location = window.location.href.replace(/\/+$/, "");
//   console.log(location);
//   loadFile(location + "../images/blenders.jpg");
// }
//
// function loadFile(file) {
//   var tempImageStore = new Image();
//
//   // Set up the onload function
//   tempImageStore.onload = function (ev) {
//     // Get the image width and height
//     canvas.width = ev.target.width;
//     canvas.height = ev.target.height;
//
//     //Draw image in canvas
//     context.draw.Image(ev.target,0,0);
//   };
//   tempImageStore.src = file;
//   return true;
// }



// function doFirst() {
//   var x = document.getElementById('myCanvas');
//   console.log(x);
//   var canvas = x.getContext('2d');
//
//   var pic = new Image();
//   pic.src = "../public/images/blender.jpg"
//   pic.addEventListener('load', drawImage, false);
// }
//
// function drawImage() {
//   canvas.drawImage(pic,0,0);
// }
//
// window.addEventListener('load', doFirst, false);



// (function() {
//   'use strict';
//
//   var submitButton = document.getElementById('submit');
//   var uploadButton = document.getElementById('imgUpload');
//
//   submitButton.addEventListener("click", function(e) {
//     e.preventDefault();
//   })
//
//   uploadButton.addEventListener("click", function(e) {
//     e.preventDefault();
//   })
//
// })();

// var canvas = document.getElementById("myCanvas");
// if (canvas.getContext) {
//   var ctx = canvas.getContext("2d");

  //FIRST EXAMPLE
  // ctx.fillStyle = "rgb(200,0,0)";
  // ctx.fillRect(10,10,50,50);
  //
  // ctx.fillStyle = "rgba(0,0,200,0.5)";
  // ctx.fillRect(30,30,50,50);

  //RECTANGULAR SHAPE EXAMPLE
  // ctx.fillRect(25,25,100,100);
  // ctx.clearRect(45,45,60,60);
  // ctx.strokeRect(50,50,50,50);

  //DRAWING PATHS (beginPath, closePath, stroke, fill)
  // ctx.beginPath();
  // ctx.moveTo(75, 50);
  // ctx.lineTo(100,75);
  // ctx.lineTo(100,25);
  // ctx.fill();

  //MOVING THE PEN (moveTo())
  // ctx.beginPath();
  // ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  // ctx.moveTo(110,75);
  // ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
  // ctx.moveTo(65,65);
  // ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  // ctx.moveTo(95,65);
  // ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  // ctx.stroke();

  //LINES (lineTo())

  //Filled triangle
  // ctx.beginPath();
  // ctx.moveTo(25,25);
  // ctx.lineTo(105,25);
  // ctx.lineTo(25,105);
  // ctx.fill();g

  //Stroked triangle
  // ctx.beginPath();
  // ctx.moveTo(125, 125);
  // ctx.lineTo(125,45);
  // ctx.lineTo(45,125);
  // ctx.closePath();
  // ctx.stroke();

  //ARCS (arc(x, y, radius, startAngle, endAngle, anticlockwise));
  // for(var i=0;i<4;i++){
  //   for(var j=0;j<3;j++){
  //     ctx.beginPath();
  //     var x = 25+j*50; // x coordinate
  //     var y = 25+i*50; // y coordinate
  //     var radius = 20; // Arc radius
  //     var startAngle = 0; // Starting point on circle
  //     var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
  //     var anticlockwise = i % 2 === 0 ? false : true; // clockwise or anticlockwise
  //
  //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  //
  //     if (i>1){
  //       ctx.fill();
  //     } else {
  //       ctx.stroke();
  //     }
  //   }
  // }

// }
// else {
//   alert("Sorry but the browser you are using does not support the <canvas> element. You can use a browser like Chrome to render canvas");
// }
