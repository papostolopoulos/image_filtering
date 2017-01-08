'use strict';

var edgeDetector = document.getElementById("edgeDetectionForm");
var edgeThresholdInput = document.getElementById("edgeThresholdInput");
var edgeThresholdValue = document.getElementById("edgeThresholdValue");

edgeThresholdInput.addEventListener("click", function () {
  edgeThresholdValue.setAttribute("value", edgeThresholdInput.value);
  edgeThresholdInput.addEventListener("mousemove", function () {
    edgeThresholdValue.setAttribute("value", edgeThresholdInput.value);
  });
});


edgeDetector.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("in the edgeDetector function");
  console.log(edgeThresholdInput.value);
  console.log(edgeThresholdValue.value);

  edgeDetect(edgeThresholdInput.value);
  window.location = "#modal-close";

});



//==============================================================================
// edge detection main function - creates two canvases, one that is 'layered'
// and one that is just a plot of the edges
function edgeDetect(threshold = 10, listener = false) {
  threshold = threshold < 5 ? 5 : threshold;

  // let imageObj = document.getElementById('blurCanvas');

  // let layerCvs = document.getElementById('layerCanvas');
  // let layerCtx = layerCvs.getContext('2d');

  let edgeCvs = document.getElementById('myCanvas');
  let edgeCtx = edgeCvs.getContext('2d');

  let imgW = edgeCvs.width;
  let imgH = edgeCvs.height;

  // layerCvs.width = imgW;
  // layerCvs.height = imgH;
  //
  // edgeCvs.width = imgW;
  // edgeCvs.height = imgH;

  // layerCtx.drawImage(imageObj, 0, 0);

  let imgPixels = edgeCtx.getImageData(0, 0, imgW, imgH);

  let edgeDetector = new EdgeDetector(imgPixels, edgeCtx, imgW, imgH, threshold);
  edgeDetector.searchImage();

  // edgeDetector.layerCtx.drawImage(layerCvs, 0, 0);
  edgeDetector.edgeCtx.drawImage(edgeCvs, 0, 0);

  let rangeInput = document.getElementById('threshold');

  // if (listener === false) {
  //   document.getElementById('layerCanvas').addEventListener('click', function() {
  //     window.open(layerCvs.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   rangeInput.addEventListener('change', function() {
  //     document.getElementById('threshold').textContent = rangeInput.value;
  //     threshold = rangeInput.value;
  //     console.log(threshold);
  //
  //     edgeDetect(threshold, listener);
  //   });
  //
  //   listener = true;
  // }

  // document.getElementById('dl-layered').addEventListener('click', function() {
  //   this.href = layerCvs.toDataURL('image/jpeg');
  // }, false);

  // png encoding to make image viewable in new window
  // document.getElementById('edgeCanvas').addEventListener('click', function() {
  //   window.open(edgeCvs.toDataURL('image/png'), '_blank');
  // });

  // document.getElementById('dl-edges').addEventListener('click', function() {
  //   this.href = edgeCvs.toDataURL('image/png');
  // }, false);

  // return edgeDetector.edgeCtx.canvas.toDataURL('data/png', 1.0);
}







/* jshint esversion: 6 */
/* jshint devel:true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */

// =============================================================================
// class definition
let EdgeDetector = function(imgPixels, edgeCtx, imgW, imgH, threshold) {
  this.imgPixels = imgPixels;
  // this.layerCtx = layerCtx; //second parameter to this class. I deleted it
  this.edgeCtx = edgeCtx;
  this.imgW = imgW;
  this.imgH = imgH;
  this.threshold = threshold;
};

// =============================================================================
// iterates through each pixel to get its intensity, the intensity of the surrounding
// pixels, and compare them
EdgeDetector.prototype.searchImage = function() {
  let index = 0;
  let pixel = 0;

  let left;
  let above;
  let right;
  let below;

  for (let y = 0; y < this.imgH; y++) {
    for (let x = 0; x < this.imgW; x++) {

      // Get this pixel's data - from the blue channel only.
      // Since this is a B/W photo, all color channels are the same.
      // For color photos, we would make this work for all channels.
      index = (x + y * this.imgW) * 4;
      pixel = this.imgPixels.data[index + 2];

      // Get the values of the surrounding pixels
      // Color data is stored [r,g,b,a][r,g,b,a] in sequence.
      left = this.imgPixels.data[index - 4];
      right = this.imgPixels.data[index + 2];
      above = this.imgPixels.data[index - (this.imgW * 4)];
      below = this.imgPixels.data[index + (this.imgW * 4)];

      // console.log('index pixel left right above below: ', x, y, ' - ', index, pixel, left, right, above, below);

      // Compare brightness of all surrounding pixels
      if (pixel > left + this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel < left - this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel > right + this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel < right - this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel > above + this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel < above - this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel > below + this.threshold) {
        this.plotEdge(x, y);
      }
      else if (pixel < below - this.threshold) {
        this.plotEdge(x, y);
      }
    }
  }
};

// =============================================================================
// draws a tiny circle of one pixel diameter where edge is detected and fills it
EdgeDetector.prototype.plotEdge = function(x, y) {
  // console.log('plotEdge: ', x,y);

  // draws edge points on copy of searched image
  // this.layerCtx.beginPath();
  // this.layerCtx.arc(x, y, 0.5, 0, 2 * Math.PI, false);
  // this.layerCtx.fillStyle = 'blue';
  // this.layerCtx.fill();
  // this.layerCtx.beginPath();

  // draws edge points on blank canvas
  this.edgeCtx.beginPath();
  this.edgeCtx.arc(x, y, 0.5, 0, 2 * Math.PI, false);
  this.edgeCtx.fillStyle = 'black';
  this.edgeCtx.fill();
  this.edgeCtx.beginPath();
};
