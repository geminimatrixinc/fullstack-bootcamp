const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// Draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
// Draw a circle
ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();

let x = 0;
function draw() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw the rectangle
    ctx.fillStyle = 'green';
    ctx.fillRect(x, 300, 50, 50);

    //Move the rectangle
    x += 1;
    if (x > canvas.width) {
        x = -50;
    }
    //Request the next frame 
    requestAnimationFrame(draw);
}
//start the animation 
draw();