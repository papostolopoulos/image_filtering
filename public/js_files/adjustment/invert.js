//==============================================================================
// create inverted image
function invertColor() {
  let imageObj = document.getElementById('origCanvas');

  let canvas = document.getElementById('invCanvas');  //secondary canvas
  let context = imageObj.getContext('2d'); //used to be canvas

  let imgW = imageObj.width;
  let imgH = imageObj.height;
  canvas.width = imgW; //secondary canvas
  canvas.height = imgH; //secondary canvas

  context.drawImage(imageObj, 0, 0);

  let imgPixels = context.getImageData(0, 0, imgW, imgH);

  for (let y = 0; y < imgPixels.height; y++) {
    for (let x = 0; x < imgPixels.width; x++) {
      let i = (y * 4) * imgPixels.width + x * 4;

      let red = 255 - imgPixels.data[i];
      let green = 255 - imgPixels.data[i + 1];
      let blue = 255 - imgPixels.data[i + 2];

      imgPixels.data[i] = red;
      imgPixels.data[i + 1] = green;
      imgPixels.data[i + 2] = blue;
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  // document.getElementById('invCanvas').addEventListener('click', function() {
  //   window.open(canvas.toDataURL('image/jpeg'), '_blank');
  // });
  //
  // document.getElementById('dl-inverted').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);

  return context.canvas.toDataURL('data/jpeg', 1.0);
}
