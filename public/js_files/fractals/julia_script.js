    "use strict";
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext("2d");
    var height = canvas.height;
    var width = canvas.width;
    //set the draw color to black
    canvas.fillStyle = '#FFFFFF';
    console.log(canvas)
    //this line draws the rectangle at a specific position with a specific height and width
    ctx.fillRect(0, 0, height, width);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function point(pos, canvas){
        canvas.fillRect(pos[0], pos[1], 1, 1);

    }

    function conversion(x, y, width, R){
        // mess with width variable below; larger number stretches out 'tails'
        var m = R / width,
            x1 = m * (2 * x - width),
            y2 = m * (width - 2 * y); // increases stretch from left to right if you subtract higher numbers
        return [x1, y2];
    }

    function f(z, c){
        // var zVar1 = document.getElementById("zVar1").value;
        // console.log(`this is zVar1 ${zVar1}`);
        // var zVar2 = document.getElementById("zVar2").value;
        // console.log(`this is zVar2 ${zVar2}`);
        // return [z[zVar1] * z[zVar2] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]];
    return [z[0] * z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]];
    }

    function abs(z){
        //change first z index to a variable
        return Math.sqrt(z[0] * z[0] + z[1] * z[1]);
    }

    function init(maxIterate){
        var length = 1200, width = 1200, c = [0, 1], min = 1, z, flag,
            rVal =  document.getElementById("rVal").value,
            R = (1 + Math.sqrt(1 + 4 * abs(c))) / rVal,
            canvas = document.getElementById('a').getContext("2d");
        canvas.fillStyle = getRandomColor();

        for (var x = 0; x < width; x++){
            for (var y = 0; y < length; y++){
                flag = true;
                z = conversion(x, y, width, R);
                for (var i = 0; i < maxIterate; i++){
                    z = f(z, c);
                    if (abs(z) > R){
                        flag = false;
                        break;
                    }
                }
            if (flag) point([x, y], canvas);
            }
        }
    }

    function initialize(numInvocations){
        var ten = 10;
        for (var i = 0; i < numInvocations; i++) {
            init(ten);
            ten += 3;
        };
    }

    $("#activateJuliaSet").on("click", function() {
        // e.preventDefault();
        console.log(`clicked it`);
        var submitValue = document.getElementById("input1").value,
            rVal =  document.getElementById("rVal").value;
        initialize(submitValue, rVal);
    });

    // document.getElementById('dl-original').addEventListener('click', function() {
    //   this.href = canvas.toDataURL('image/jpeg');
    // }, false);

    // $("#saveImage").on("click", function(e) {
    //     console.log('inside save image');
    //     var canvas = document.getElementById('a'),
    //         imgdata = canvas.toDataURL('image/png');
    // });
