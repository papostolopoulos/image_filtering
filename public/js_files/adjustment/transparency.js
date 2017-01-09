var transparencyForm = document.getElementById("transparencyForm");
var transparencyInput = document.getElementById("transparencyInput");
var transparencyValue = document.getElementById("transparencyValue");

transparencyInput.addEventListener("click", function () {
  transparencyValue.setAttribute("value", transparencyInput.value);

  transparencyInput.addEventListener("mousemove", function () {
    transparencyValue.setAttribute("value", transparencyInput.value);
  });
});

transparencyForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("in the transparency function");
  console.log(transparencyInput.value);
  console.log(transparencyValue.value);

  adjAlpha(Number(transparencyValue.value));
  window.location = "#modal-close";

});

//==============================================================================
// change transparency of image
function adjAlpha(alpha = 125) { //listener = false
  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('alphaCanvas');
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

      // if (x < 40 && y < 40) console.log(imgPixels.data[i], imgPixels.data[i + 1], imgPixels.data[i + 2], imgPixels.data[i + 3]);

      imgPixels.data[i + 3] = alpha;
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  // let rangeInput = document.getElementById('alpha');

  // if (listener === false) {
  //   document.getElementById('alphaCanvas').addEventListener('click', function() {
  //     window.open(canvas.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   rangeInput.addEventListener('change', function() {
  //     document.getElementById('alpha').textContent = rangeInput.value;
  //     alpha = Number(rangeInput.value);
  //
  //     adjAlpha(alpha, listener);
  //   });
  //
  //   listener = true;
  // }

  // document.getElementById('dl-alpha').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // return context.canvas.toDataURL('data/jpeg', 1.0);
}
