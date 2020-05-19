$(document).ready(function () {
    
    var canvas=document.querySelector('canvas');
   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log(canvas);
 
        var context = canvas.getContext('2d');

        var clicks=0;

        var ballColor = 'white';
        var ballPosX = canvas.width / 2;
        var ballPosY = canvas.height / 2;
        var ballRadius = 50

        var ballSpeedX = 3;
        var ballSpeedY = 2;

        var animate = function () {
            
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = "red";
            context.fillRect(50, 50, 75, 75)
            context.fillStyle = "orange";
            context.fillRect(150, 50, 75, 75);
            context.fillStyle = "yellow";
            context.fillRect(250, 50, 75, 75);
            context.fillStyle = "lime";
            context.fillRect(350, 50, 75, 75);
            context.fillStyle = "deepskyblue";
            context.fillRect(450, 50, 75, 75);
            context.fillStyle = "darkviolet";
            context.fillRect(550, 50, 75, 75);


            context.fillStyle = "white";
            context.fillRect(850, 50, 75, 75);
            context.font = 'Bold 70pt Helvetica';
            context.fillStyle = "black";
            context.fillText("-", 871, 114);

            context.fillStyle = "white";
            context.fillRect(950, 50, 75, 75);
            context.font = 'Bold 70pt Helvetica';
            context.fillStyle = "black";
            context.fillText("+", 960, 112);
            
            context.fillStyle = "black";
            context.fillRect(1275, 50, 350, 75);
            context.font = 'Bold 50pt Helvetica';
            context.fillStyle = "white";
            context.fillText("Score: " + clicks, 1300, 112);

            context.fillStyle = ballColor;
            context.beginPath();
            context.arc(ballPosX, ballPosY, ballRadius, 0, 2 * Math.PI);
            context.fill();

            if ((ballPosX + ballRadius >= canvas.width) || (ballPosX - ballRadius <= 0)) {
                ballSpeedX = ballSpeedX * -1;
            }

            if ((ballPosY + ballRadius >= canvas.height) || (ballPosY - ballRadius <= 0)) {
                ballSpeedY = ballSpeedY * -1;
            }

            ballPosX = ballPosX + ballSpeedX;
            ballPosY = ballPosY + ballSpeedY;

            window.requestAnimationFrame(animate);
        }

        animate();

        canvas.addEventListener("click", function (event) {
            var distX = Math.abs(ballPosX - event.offsetX);
            var distY = Math.abs(ballPosY - event.offsetY);

            if (distX < ballRadius && distY < ballRadius) {
                clicks = clicks+1;
                console.log("FIRE!!!");
            }

            var reddistX = Math.abs(87 - event.offsetX);
            var reddistY = Math.abs(87 - event.offsetY);

            if (reddistX < 37.5 && reddistY < 37.5) {
                ballColor = 'red';
            }

            var orangedistX = Math.abs(187 - event.offsetX);
            var orangedistY = Math.abs(87 - event.offsetY);

            if (orangedistX < 37.5 && orangedistY < 37.5) {
                ballColor = 'orange';
            }

            var yellowdistX = Math.abs(287 - event.offsetX);
            var yellowdistY = Math.abs(87 - event.offsetY);

            if (yellowdistX < 37.5 && yellowdistY < 37.5) {
                ballColor = 'yellow';
            }

            var greendistX = Math.abs(387 - event.offsetX);
            var greendistY = Math.abs(87 - event.offsetY);

            if (greendistX < 37.5 && greendistY < 37.5) {
                ballColor = 'lime';
            }

            var bluedistX = Math.abs(487 - event.offsetX);
            var bluedistY = Math.abs(87 - event.offsetY);

            if (bluedistX < 37.5 && bluedistY < 37.5) {
                ballColor = 'deepskyblue';
            }

            var purpledistX = Math.abs(587 - event.offsetX);
            var purpledistY = Math.abs(87 - event.offsetY);

            if (purpledistX < 37.5 && purpledistY < 37.5) {
                ballColor = 'darkviolet';
            }

            var minusdistX = Math.abs(887 - event.offsetX);
            var minusdistY = Math.abs(87 - event.offsetY);

            if (minusdistX < 37.5 && minusdistY < 37.5) {
                ballRadius = ballRadius - 10;
            }

            var plusdistX = Math.abs(987 - event.offsetX);
            var plusdistY = Math.abs(87 - event.offsetY);

            if (plusdistX < 37.5 && plusdistY < 37.5) {
                ballRadius = ballRadius + 10;
            }
        })

/*
 how do i put an image?????? in

        var context = canvas.getContext('2d');
        const img = new Image();
        img.onload = draw;
        img.src = 'https://i.imgur.com/fqgm8uh.png';

        function draw() {
          const context = document.querySelector('canvas').getContext('2d');
          
          const pattern = context.createPattern(img, 'repeat');
          
          context.fillStyle = pattern;
          context.fillRect(10, 20, 30, 40);
        }

*/
});