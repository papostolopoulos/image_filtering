function svgToCanvas () {
  var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  // ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var DOMURL = self.URL || self.webkitURL || self;

  var img = new Image();
  var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
  var url = DOMURL.createObjectURL(svg);

  img.onload = function() {
      ctx.drawImage(img, 0, 0);
      var png = canvas.toDataURL("image/png");
      document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';

      window.open(png, 'toDataURL() image', width=800, height=800);


  };

  img.src = url;
}
