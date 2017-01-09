const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');
const img = new Image();
var uploadedFile = document.getElementById("browseImage");
var openButton = document.getElementById("openImageForm");
var openURLButton = document.getElementById("openImageURLForm");


//----------------OPEN IMAGE----------------
initImageLoader();
window.addEventListener("DOMContentLoader", initImageLoader);

function initImageLoader() {
  uploadedFile.addEventListener('change', uploadedFileFunction);

  function uploadedFileFunction(ev) {
    var file = ev.target.files[0];
    openButton.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFile(file);
      window.location = "#modal-close";
    });
  }
}

function handleFile(file) {
  var tempImageStore = new Image ();
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

//----------------OPEN IMAGE FROM URL----------------
openURLButton.addEventListener("submit", function (event) {
  event.preventDefault()
  var openImageURL = document.getElementById("browseImageURL");
  console.log(openImageURL.value);
  console.log("in the form");
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    context.drawImage(img,0,0);
    window.location = "#modal-close";
  }
  img.src = openImageURL.value;
  console.log(img);
});


////----------------SAVE IMAGE----------------
var saveImage = document.getElementById('saveImage'); //This is the href
var saveImageSubmit = document.getElementById('saveImageSubmit'); //submit button


saveImageSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  var downloadAnchor = document.createElement("a");

  console.log("in the listener");
  var saveImageName = document.getElementById("saveImageName"); //input for the value
  var saveImageType = document.getElementById("saveImageType"); //input for the image type to save
  downloadAnchor.setAttribute("download", saveImageName.value);
  var imageTitle = downloadAnchor.getAttribute("download");

  downloadAnchor.href = canvas.toDataURL();

  downloadAnchor.download = imageTitle + "." + saveImageType.value
  downloadAnchor.click();
  window.location = "#modal-close";
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
