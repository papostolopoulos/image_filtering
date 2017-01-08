'use strict';

var pixelator = document.getElementById("pixelateForm");
var pixelateBlockSizeInput = document.getElementById("pixelateBlockSizeInput");
var pixelateBlockSizeValue = document.getElementById("pixelateBlockSizeValue");

pixelateBlockSizeInput.addEventListener("click", function () {
  pixelateBlockSizeValue.setAttribute("value", pixelateBlockSizeInput.value);

  pixelateBlockSizeInput.addEventListener("mousemove", function () {
    pixelateBlockSizeValue.setAttribute("value", pixelateBlockSizeInput.value);
  });
});

pixelator.addEventListener("submit", function (event) {
  console.log(pixelateBlockSizeInput.value);
  event.preventDefault();
  console.log("in the pixelator function");
  console.log(pixelateBlockSizeInput.value);
  console.log(pixelateBlockSizeValue.value);

  pixelize(pixelateBlockSizeInput.value);
  window.location = "#modal-close";

});

//==============================================================================
// main function for pixelized image
function pixelize(blockSize = 20) { //listener = false
  console.log('blockSize function start:', blockSize);
  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('pxlCanvas');
  let context = imageObj.getContext('2d');

  let imgW = imageObj.width;
  let imgH = imageObj.height;
  // canvas.width = imgW;
  // canvas.height = imgH;

  context.drawImage(imageObj, 0, 0);

  let imgPixels = context.getImageData(0, 0, imgW, imgH);
  renderPixelImg(context, imgW, imgH, blockSize);

  let rangeInput = document.getElementById('block-size');

  // if (listener === false) {
  //   document.getElementById('pxlCanvas').addEventListener('click', function() {
  //     window.open(canvas.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   rangeInput.addEventListener('change', function() {
  //     document.getElementById('block-size').textContent = rangeInput.value;
  //     blockSize = rangeInput.value;
  //
  //     pixelize(blockSize, listener);
  //   });
  //
  //   listener = true;
  // }
  //
  // document.getElementById('dl-pixelated').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // return context.canvas.toDataURL('data/jpeg', 1.0);
}

//==============================================================================
// iterates through all blocks of the calculated number of pixels and draws them
function renderPixelImg(ctx, width, height, blockSize) {
  let avgBlockColor = '';
  let numBlocks = 0;
  let numRows = 0;
  let numCols = 0;

  if (width > height) {
    numBlocks = Math.floor(width / blockSize);
    numCols = numBlocks;
    numRows = Math.floor(height / blockSize);
  } else {
    numBlocks = Math.floor(height / blockSize);
    numRows = numBlocks;
    numCols = Math.floor(width / blockSize);
  }

  for (let row = 0; row < numRows; row++) {

    for (let col = 0; col < numCols; col++) {
      let blockPixels = ctx.getImageData(col * blockSize, row * blockSize, blockSize, blockSize);
      let blockData = blockPixels.data;

      avgBlockColor = getAvgBlockColor(blockData);

      let red = avgBlockColor[0];
      let green = avgBlockColor[1];
      let blue = avgBlockColor[2];

      ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
      ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
    }
  }
}

//==============================================================================
// calculates average color for a block of image pixels
function getAvgBlockColor(blockData) {
  let red = 0;
  let green = 0;
  let blue = 0;
  let i = 0;
  let count = 0;

  let length = blockData.length;

  while (i < length) {
    red   += blockData[i];
    green += blockData[i + 1];
    blue  += blockData[i + 2];
    i += 4; // skip alpha channel, get next red value
    count++;
  }

  red   = Math.floor(red / count);
  green = Math.floor(green / count);
  blue  = Math.floor(blue / count);

  return [red, green, blue];
}
