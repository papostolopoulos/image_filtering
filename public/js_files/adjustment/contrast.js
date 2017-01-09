var contrastForm = document.getElementById("contrastForm");
var contrastRedInput = document.getElementById("contrastRedInput");
var contrastRedValue = document.getElementById("contrastRedValue");
var contrastGreenInput = document.getElementById("contrastGreenInput");
var contrastGreenValue = document.getElementById("contrastGreenValue");
var contrastBlueInput = document.getElementById("contrastBlueInput");
var contrastBlueValue = document.getElementById("contrastBlueValue");

contrastRedInput.addEventListener("click", function () {
  contrastRedValue.setAttribute("value", contrastRedInput.value);

  contrastRedInput.addEventListener("mousemove", function () {
    contrastRedValue.setAttribute("value", contrastRedInput.value);
  });
});

contrastGreenInput.addEventListener("click", function () {
  contrastGreenValue.setAttribute("value", contrastGreenInput.value);

  contrastGreenInput.addEventListener("mousemove", function () {
    contrastGreenValue.setAttribute("value", contrastGreenInput.value);
  });
});

contrastBlueInput.addEventListener("click", function () {
  contrastBlueValue.setAttribute("value", contrastBlueInput.value);

  contrastBlueInput.addEventListener("mousemove", function () {
    contrastBlueValue.setAttribute("value", contrastBlueInput.value);
  });
});

contrastForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("in the contrast function");

  console.log(contrastRedInput.value);
  console.log(contrastRedValue.value);

  adjContrast(Number(contrastRedValue.value), Number(contrastGreenValue.value), Number(contrastBlueValue.value));
  window.location = "#modal-close";
});

//==============================================================================
// contrast adjustable by color channel
function adjContrast(red = 40, green = 40, blue = 40) { //listener = false
  let redAdj = Math.pow((red + 100) / 100, 2);
  let greenAdj = Math.pow((green + 100) / 100, 2);
  let blueAdj = Math.pow((blue + 100) / 100, 2);

  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('contrastCanvas');
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

      red = imgPixels.data[i];
      green = imgPixels.data[i + 1];
      blue = imgPixels.data[i + 2];

      red /= 255;
      red -= 0.5;
      red *= redAdj;
      red += 0.5;
      red *= 255;

      green /= 255;
      green -= 0.5;
      green *= greenAdj;
      green += 0.5;
      green *= 255;

      blue /= 255;
      blue -= 0.5;
      blue *= blueAdj;
      blue += 0.5;
      blue *= 255;

      imgPixels.data[i] = red;
      imgPixels.data[i + 1] = green;
      imgPixels.data[i + 2] = blue;
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  // let redInput = document.getElementById('red-cont');
  // let greenInput = document.getElementById('green-cont');
  // let blueInput = document.getElementById('blue-cont');
  //
  // if (listener === false) {
  //   document.getElementById('contrastCanvas').addEventListener('click', function() {
  //     window.open(canvas.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   redInput.addEventListener('change', function() {
  //     document.getElementById('red-cont').textContent = redInput.value;
  //     red = Number(redInput.value);
  //     console.log('redInput', red);
  //
  //     contrast(red, green, blue, listener);
  //   });
  //
  //   greenInput.addEventListener('change', function() {
  //     document.getElementById('green-cont').textContent = greenInput.value;
  //     green = Number(greenInput.value);
  //     console.log('greenInput', green);
  //
  //     contrast(red, green, blue, listener);
  //   });
  //
  //   blueInput.addEventListener('change', function() {
  //     document.getElementById('blue-cont').textContent = blueInput.value;
  //     blue = Number(blueInput.value);
  //     console.log('blueInput', blue);
  //
  //     contrast(red, green, blue, listener);
  //   });
  //
  //   listener = true;
  // }
  //
  // document.getElementById('dl-contrast').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // return context.canvas.toDataURL('data/jpeg', 1.0);
}
