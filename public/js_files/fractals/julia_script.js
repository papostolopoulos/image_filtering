"use strict";

(function() {
  var canvas = document.getElementById('myCanvas').getContext("2d");
  var canvasEl = document.getElementById('myCanvas');
  var height = canvasEl.height;
  var width = canvasEl.width;

  //set the draw color to black
  // canvas.fillRect(0, 0, height, width);
  // canvas.fillStyle = '#000000';
  //this line draws the rectangle at a specific position with a specific height and width

  function clearCanvas() {
    var canvas = document.getElementById('myCanvas').getContext("2d");
    var canvasEl = document.getElementById('myCanvas');
    canvas.fillRect(0, 0, height, width);
    canvas.fillStyle = '#000000';
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function point(pos, canvas) {
    canvas.fillRect(pos[0], pos[1], 1, 1);
  }

  function conversion(x, y, width, R) {
    // mess with width variable below; larger number stretches out 'tails'
    var rDivider = document.getElementById("rDivider").value;
    var m = R / rDivider;
    var x1 = m * (2 * x - width);
    var y2 = m * (width - 2 * y); // increases stretch from left to right if you subtract higher numbers

    return [x1, y2];
  }

  function f(z, c) {
    return [z[0] * z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]];
  }

  function abs(z) {
    //change first z index to a variable
    return Math.sqrt(z[0] * z[0] + z[1] * z[1]);
  }

  function init(maxIterate) {
    var canvas = document.getElementById('myCanvas').getContext("2d");
    var rVal = document.getElementById("juliaRValue").value;
    var c = [0, 1];
    var R = (1 + Math.sqrt(1 + 4 * abs(c))) / rVal;
    var length = 600;
    var width = 600;
    var flag;
    var z;

    canvas.fillStyle = getRandomColor();

    for (var x = 0; x < width; x++) {
      for (var y = 0; y < length; y++) {
        flag = true;
        z = conversion(x, y, width, R);
        for (var i = 0; i < maxIterate; i++) {
          z = f(z, c);
          if (abs(z) > R) {
            flag = false;
            break;
          }
        }
        if (flag) point([x, y], canvas);
      }
    }
  }

  function initialize(numInvocations) {
    canvas.fillRect(0, 0, height, width);
    canvas.fillStyle = '#000000';
    var twenty = 20;
    for (var i = 0; i < numInvocations; i++) {
      init(twenty);
      twenty += 3;
    };
  }

  //===================handle form submission and run function==================

  document.getElementById("juliaSetAnchor").addEventListener("submit", function(e) {
    e.preventDefault();
    window.location = "#modal-close";
  });

  document.getElementById("juliaSetForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var submitValue = document.getElementById("juliaIterations").value;
    var rVal = document.getElementById("juliaRValue").value;
    console.log(submitValue, rVal);
    initialize(submitValue, rVal);
    window.location = "#modal";
  });

  document.getElementById("clearCanvas").addEventListener("click", function(e) {
    e.preventDefault();
    window.location = "#modal-close";
    clearCanvas();
  });

}());
