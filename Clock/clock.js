var canvas = document.getElementById("canvas"); // create a canvas object 
        var ctx = canvas.getContext("2d"); // create a 2d drawing object(var ctx) for the canvas object
        var radius = canvas.height / 2 ; // calculate radius of clock using height of canvas
        ctx.translate(radius,radius); // remap the (0,0) position of drawing to the center of the canvas
        radius = radius*0.90;
        setInterval(drawClock,1000);
        // drawClock();

        function drawFace(ctx,radius){
            var grad;
            ctx.beginPath();
            ctx.arc(0,0,radius,0,2*Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            
            grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0, radius*1.05);

            grad.addColorStop(0,'#333'); // create 3 color stops corresponding to inner, middle and outer range
            grad.addColorStop(0.5, 'white'); 
            grad.addColorStop(1, '#333');
            ctx.strokeStyle = grad; // define gradient(grad) as stroke style of the drawing object
            ctx.lineWidth = radius*0.1; // define linewidth o f drawing object
            ctx.stroke(); // draw the circle

            ctx.beginPath(); // draw the clock center
            ctx.arc(0,0,radius*0.1,0,2* Math.PI);
            ctx.fillStyle = '#333';
            ctx.fill();

        }

        // to draw the numbers in the circle
        function drawNumbers(){
            var ang;
            var num;
            ctx.font = radius*0.15 + "px arial"; // set font size of the drawing object as 15% of the radius
            ctx.textBaseline = 'middle'; // set text alignment to middle and the center of the print
            ctx.textAlign = "center";
            for(num =1;num<13;num++){
                ang = num * Math.PI/6;
                ctx.rotate(ang);
                ctx.translate(0, -radius*0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(),0,0);
                ctx.rotate(ang);
                ctx.translate(0, radius*0.85);
                ctx.rotate(-ang);
            }
        }

        function drawClock(){ // function to drawe the clock
            drawFace(ctx,radius);
            drawNumbers(ctx,radius);
            drawTime(ctx, radius);
        }

        function drawTime(ctx,radius){
            var now = new Date(); //used to get hour, minute and second
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            hour = hour%12; // calculate the angle of the hour hand and draw its length(50% of radius), 
            hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
            drawHand(ctx, hour, radius*0.5, radius*0.07);
            // minute
            minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
            drawHand(ctx, minute, radius*0.8, radius*0.07);
            //seconds
            second = (second*Math.PI/30);
            drawHand(ctx, second, radius*0.9, radius*0.02);
        }

        function drawHand(ctx, pos,length, width){
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0,0);
            ctx.rotate(pos);
            ctx.lineTo(0,-length);
            ctx.stroke();
            ctx.rotate(-pos);
        }