// var dragonCurveSubmit = document.getElementById("dragonCurveSubmit");
// var canvasEl = document.getElementById('myCanvas');

dragonCurveSubmit.addEventListener("click", function(event) {
  event.preventDefault();

  // var canvas = document.getElementById('myCanvas').getContext("2d");
  // var canvasEl = document.getElementById("myCanvas");
  //
  // canvas.fillStyle = '#FFFFFF';
  // canvas.fillRect(0, 0, height, width);
  // var height = canvasEl.height;
  // var width = canvasEl.width;

  var left1 = parseFloat(document.getElementById('dragonLeftParam1').value);
  var left2 = parseFloat(document.getElementById('dragonLeftParam2').value);
  var left3 = parseFloat(document.getElementById('dragonLeftParam3').value);
  var left4 = parseFloat(document.getElementById('dragonLeftParam4').value);
  var right1 = parseFloat(document.getElementById('dragonRightParam1').value);
  var right2 = parseFloat(document.getElementById('dragonRightParam2').value);
  var right3 = parseFloat(document.getElementById('dragonRightParam3').value);
  var right4 = parseFloat(document.getElementById('dragonRightParam4').value);

  var left = [
    [left1, -left2],
    [left3, left4]
  ];
  var right = [
    [right1, right2],
    [-right3, right4]
  ];

  DRAGON.fractal('fractal', [100, 300], [500, 300], 15, false, 700, left, right);
  console.log(svgid);
});
