var brightnessForm = document.getElementById("brightnessForm");
var brightnessInput = document.getElementById("brightnessInput");
var brightnessValue = document.getElementById("brightnessValue");

brightnessInput.addEventListener("click", function () {
  console.log("in the input");
  brightnessValue.setAttribute("value", brightnessInput.value);

  brightnessInput.addEventListener("mousemove", function () {
    brightnessValue.setAttribute("value", brightnessInput.value);
  });
});

brightnessForm.addEventListener("submit", function (event) {
  console.log(brightnessInput.value);
  event.preventDefault();
  console.log("in the brightnator function");
  console.log(brightnessInput.value);
  console.log(brightnessValue.value);

  adjBrightness(Number(brightnessInput.value));
  window.location = "#modal-close";

});

//==============================================================================
// change brightness of image
function adjBrightness(adjustment = 30) { //listener = false
  console.log("in function");
  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('brightCanvas');
  let context = imageObj.getContext('2d');

  let imgW = imageObj.width;
  let imgH = imageObj.height;
  // canvas.width = imgW;
  // canvas.height = imgH;

  context.drawImage(imageObj, 0, 0);

  let imgPixels = context.getImageData(0, 0, imgW, imgH);

  for (let y = 0; y < imgPixels.height; y++) {
    for (let x = 0; x < imgPixels.width; x++) {
      let i = (y * 4) * imgPixels.width + x * 4;

      imgPixels.data[i] += adjustment;
      imgPixels.data[i + 1] += adjustment;
      imgPixels.data[i + 2] += adjustment;
      if (x === 40 && y === 40) console.log(adjustment, imgPixels.data[i], imgPixels.data[i+1], imgPixels.data[i+2]);
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  // if (listener === false) {
  //   document.getElementById('brightCanvas').addEventListener('click', function() {
  //     window.open(canvas.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   listener = true;
  // }
  //
  // document.getElementById('dl-brightness').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // let brightForm = document.getElementById('brightness-form');
  //
  // brightForm.addEventListener('submit', function (event) {
  //   event.preventDefault();
  //   let brightness = document.getElementById('brightness').value;
  //   brightness = Number(brightness);
  //
  //   adjBrightness(brightness, listener);
  // });

  // let rangeInput = document.getElementById('brightness');
  //
  // rangeInput.addEventListener('change', function() {
  //   document.getElementById('brightness').textContent = rangeInput.value;
  //   adjustment = rangeInput.value;
  //   console.log('adjustment: ', adjustment, rangeInput.value);
  //
  //   adjBrightness(adjustment, listener);
  // });

  // return context.canvas.toDataURL('data/jpeg', 1.0);
}
