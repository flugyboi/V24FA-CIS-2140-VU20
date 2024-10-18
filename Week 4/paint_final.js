/*
 * This script will turn the canvas into an actual painting canvas.
 * We will go through making it paint together.
 * Afterwards you will add a button that will clear the canvas.
 *     hint: the context has a function clearRect we have used before.
 */

var display = document.getElementById("display");
var context = display.getContext('2d');
var color = '#000000';
var penSize = 3;

function changeColor(event)
{
    color = event.target.value;
}

function draw(event)
{
    if (event.buttons % 2 === 1)
    {
        context.fillStyle = color;
        var startX = event.offsetX - event.movementX;
        var startY = event.offsetY - event.movementY;
        for (var percent = 0; percent < 1; percent += 0.01)
        {
            fillCircle(context, startX + event.movementX*percent, startY + event.movementY*percent, penSize);
        }
    }

}

function fillCircle(canvas, xCenter, yCenter, radius)
{
    canvas.beginPath();
    canvas.arc(xCenter, yCenter, radius, 0, 2*Math.PI);
    canvas.fill();
}