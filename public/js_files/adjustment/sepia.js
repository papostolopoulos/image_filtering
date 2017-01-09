var sepiaForm = document.getElementById("sepiaForm");
var sepiaInput = document.getElementById("sepiaInput");
var sepiaValue = document.getElementById("sepiaValue");

sepiaInput.addEventListener("click", function () {
  sepiaValue.setAttribute("value", sepiaInput.value);

  sepiaInput.addEventListener("mousemove", function () {
    sepiaValue.setAttribute("value", sepiaInput.value);
  });
});

sepiaValue.addEventListener("keyup", function(){
  sepiaInput.setAttribute("value", sepiaValue.value);
  console.log(sepiaValue.value);
});

sepiaForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("in the sepia function");
  console.log(sepiaInput.value);
  console.log(sepiaValue.value);

  adjSepia(Number(sepiaValue.value));
  window.location = "#modal-close";

});

//==============================================================================
// adjustable sepia filter
function adjSepia(adjustment = 100) { //listener = false
  adjustment /= 100;

  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('sepiaCanvas');
  let context = imageObj.getContext('2d');

  let imgW = imageObj.width;
  let imgH = imageObj.height;
  // canvas.width = imgW;
  // canvas.height = imgH;

  context.drawImage(imageObj, 0, 0);

  let imgPixels = context.getImageData(0, 0, imgW, imgH);

  let red = 0;
  let green = 0;
  let blue = 0;

  for (let y = 0; y < imgPixels.height; y++) {
    for (let x = 0; x < imgPixels.width; x++) {
      let i = (y * 4) * imgPixels.width + x * 4;

      red = imgPixels.data[i];
      green = imgPixels.data[i + 1];
      blue = imgPixels.data[i + 2];

      imgPixels.data[i] = Math.min(255, (red * (1 - (0.607 * adjustment))) + (green * (0.769 * adjustment)) + (blue * (0.189 * adjustment)));
      imgPixels.data[i + 1] = Math.min(255, (red * (0.349 * adjustment)) + (green * (1 - (0.314 * adjustment))) + (blue * (0.168 * adjustment)));
      imgPixels.data[i + 2] = Math.min(255, (red * (0.272 * adjustment)) + (green * (0.534 * adjustment)) + (blue * (1- (0.869 * adjustment))));
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  // let rangeInput = document.getElementById('sepia');
  //
  // if (listener === false) {
  //   document.getElementById('sepiaCanvas').addEventListener('click', function() {
  //     window.open(canvas.toDataURL('image/jpeg'), '_blank');
  //   });
  //
  //   rangeInput.addEventListener('change', function() {
  //     document.getElementById('sepia').textContent = rangeInput.value;
  //     adjustment = Number(rangeInput.value);
  //
  //     sepia(adjustment, listener);
  //   });
  //
  //   listener = true;
  // }
  //
  // document.getElementById('dl-sepia').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // return context.canvas.toDataURL('data/jpeg', 1.0);
}
