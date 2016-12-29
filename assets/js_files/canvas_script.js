(function() {
  'use strict';

  var submitButton = document.getElementById('submit');
  var uploadButton = document.getElementById('imgUpload');

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
  })

  uploadButton.addEventListener("click", function(e) {
    e.preventDefault();
  })

})();

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
