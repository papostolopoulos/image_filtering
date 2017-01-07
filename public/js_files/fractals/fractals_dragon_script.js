
console.log( "ready!" );


var dragonCurveSubmit = document.getElementById("dragonCurveSubmit");
dragonCurveSubmit.addEventListener("click", function (event) {
  var left1, left2, left3, left4, right1, right2, right3, right4;
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  console.log("in the listener of dragon");
 event.preventDefault();

 left1 = parseFloat(document.getElementById('dragonLeftParam1').value);
 left2 = parseFloat(document.getElementById('dragonLeftParam2').value);
 left3 = parseFloat(document.getElementById('dragonLeftParam3').value);
 left4 = parseFloat(document.getElementById('dragonLeftParam4').value);
 right1 = parseFloat(document.getElementById('dragonRightParam1').value);
 right2 = parseFloat(document.getElementById('dragonRightParam2').value);
 right3 = parseFloat(document.getElementById('dragonRightParam3').value);
 right4 = parseFloat(document.getElementById('dragonRightParam4').value);

 var left = [[left1, -left2], [left3, left4 ]];
 var right = [[right1, right2], [-right3, right4]];

DRAGON.fractal('fractal', [100, 300], [500, 300], 15, false, 700, left, right);

});

document.getElementById('dragonCurveSubmit').addEventListener('click', svgToCanvas);

function svgToCanvas () {
  var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

  // var canvas = document.getElementById("myCanvas");
  // var ctx = canvas.getContext("2d");
  // ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var DOMURL = self.URL || self.webkitURL || self;

  var img = new Image();
  var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
  var url = DOMURL.createObjectURL(svg);

  // img.onload = function() {
  //     ctx.drawImage(img, 0, 0);
  //     var png = canvas.toDataURL("image/png");
  //     document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
  //
  //     window.open(png, 'toDataURL() image', width=800, height=800);
  //
  //
  // };

  img.src = url;
}
