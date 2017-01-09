var colorBalanceForm = document.getElementById("colorBalanceForm");
var colorBalanceRedInput = document.getElementById("colorBalanceRedInput");
var colorBalanceRedValue = document.getElementById("colorBalanceRedValue");
var colorBalanceGreenInput = document.getElementById("colorBalanceGreenInput");
var colorBalanceGreenValue = document.getElementById("colorBalanceGreenValue");
var colorBalanceBlueInput = document.getElementById("colorBalanceBlueInput");
var colorBalanceBlueValue = document.getElementById("colorBalanceBlueValue");

colorBalanceRedInput.addEventListener("click", function () {
  colorBalanceRedValue.setAttribute("value", colorBalanceRedInput.value);

  colorBalanceRedInput.addEventListener("mousemove", function () {
    colorBalanceRedValue.setAttribute("value", colorBalanceRedInput.value);
  });
});

colorBalanceGreenInput.addEventListener("click", function () {
  colorBalanceGreenValue.setAttribute("value", colorBalanceGreenInput.value);

  colorBalanceGreenInput.addEventListener("mousemove", function () {
    colorBalanceGreenValue.setAttribute("value", colorBalanceGreenInput.value);
  });
});

colorBalanceBlueInput.addEventListener("click", function () {
  colorBalanceBlueValue.setAttribute("value", colorBalanceBlueInput.value);

  colorBalanceBlueInput.addEventListener("mousemove", function () {
    colorBalanceBlueValue.setAttribute("value", colorBalanceBlueInput.value);
  });
});

colorBalanceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("in the color balance function");

  console.log(colorBalanceRedInput.value);
  console.log(colorBalanceRedValue.value);

  adjColor(Number(colorBalanceRedValue.value), Number(colorBalanceGreenValue.value), Number(colorBalanceBlueValue.value));
  window.location = "#modal-close";
});

//==============================================================================
// change color channel intensity
function adjColor(red = 0, green = 0, blue = 0) {// listener = false
  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('clrCanvas');
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

      imgPixels.data[i] += red;
      imgPixels.data[i + 1] += green;
      imgPixels.data[i + 2] += blue;
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  // let redInput = document.getElementById('red-adj');
  // let greenInput = document.getElementById('green-adj');
  // let blueInput = document.getElementById('blue-adj');

  // if (listener === false) {
  //   document.getElementById('clrCanvas').addEventListener('click', function() {
  //     window.open(canvas.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   redInput.addEventListener('change', function() {
  //     document.getElementById('red-adj').textContent = redInput.value;
  //     red = Number(redInput.value);
  //
  //     adjColor(red, green, blue, listener);
  //   });
  //
  //   greenInput.addEventListener('change', function() {
  //     document.getElementById('green-adj').textContent = greenInput.value;
  //     green = Number(greenInput.value);
  //
  //     adjColor(red, green, blue, listener);
  //   });
  //
  //   blueInput.addEventListener('change', function() {
  //     document.getElementById('blue-adj').textContent = blueInput.value;
  //     blue = Number(blueInput.value);
  //
  //     adjColor(red, green, blue, listener);
  //   });
  //
  //   listener = true;
  // }
  //
  // document.getElementById('dl-color').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // return context.canvas.toDataURL('data/jpeg', 1.0);
}
