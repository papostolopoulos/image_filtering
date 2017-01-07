var blurImage = document.getElementById("blurImage");
blurImage.addEventListener("click", function () {
  console.log("inside the 'blur image' event listener");
  blurImageFun();
});

//==============================================================================
// create blurred image for edge detection
function blurImageFun() {
  console.log("in function");
  let imageObj = document.getElementById('myCanvas');

  // let canvas = document.getElementById('blurCanvas');
  let context = imageObj.getContext('2d');

  let imgW = imageObj.width;
  let imgH = imageObj.height;
  // canvas.width = imgW;
  // canvas.height = imgH;

  let blurStrength = '';

  if (imgW > 600 || imgH > 600) {
    blurStrength = 'blur(2px)';
  } else {
    blurStrength = 'blur(1px)';
  }

  context.filter = blurStrength;

  context.drawImage(imageObj, 0, 0);
  console.log(context);

  // document.getElementById('blurCanvas').addEventListener('click', function() {
  //   window.open(canvas.toDataURL('image/jpeg'), '_blank');
  // });
  //
  // document.getElementById('dl-blurred').addEventListener('click', function() {
  //   this.href = canvas.toDataURL('image/jpeg');
  // }, false);
  //
  // return context.canvas.toDataURL('data/jpeg', 1.0);
  window.location = "#modal-close";
}
