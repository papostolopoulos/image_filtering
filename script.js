$(document).ready(function() {
    console.log( "ready!" );

    var left1, left2, left3, left4, right1, right2, right3, right4;

   $('#btn').on('click', function(e) {
      e.preventDefault();

      left1 = parseFloat(document.getElementById('lp1').value);
      left2 = parseFloat(document.getElementById('lp2').value);
      left3 = parseFloat(document.getElementById('lp3').value);
      left4 = parseFloat(document.getElementById('lp4').value);
      right1 = parseFloat(document.getElementById('rp1').value);
      right2 = parseFloat(document.getElementById('rp2').value);
      right3 = parseFloat(document.getElementById('rp3').value);
      right4 = parseFloat(document.getElementById('rp4').value);

      var left  = [[left1, -left2],
                  [left3, left4 ]];
      // console.log('this is left', left);
      var right = [[right1, right2],
               [-right3, right4]];
      // console.log('this is right', right);
      DRAGON.fractal('fractal', [100, 300], [500, 300], 15, false, 700, left, right);

   });

});
