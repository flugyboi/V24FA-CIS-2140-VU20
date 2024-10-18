/*
 * Spawns a butterfly gif where ever the mouse is clicked. The butterfly moves around the screen for a few seconds and then disapears.
 *
 * Assignment:
 * 1. Randomize the initial rotation angle. Remember it is in radians.
 * 2. Add a limit so only 10 butterflys can be on screen at once.
 */


var body = document.getElementById("body");
var butterflyUrl = "./butterfly.gif";
var butterflySize = 50;
var speed = 25;

function spawnButterfly(event)
{
    var butterfly = document.createElement("img");
    var butterflyData = {
        butterfly: butterfly,
        life: Math.floor(Math.random()*1000)+2000,
        rotation: 0,
        left: event.x - butterflySize/2,
        top: event.y - butterflySize/2,
        interval: null
    };

    butterfly.src = butterflyUrl;
    butterfly.width = butterflySize;
    butterfly.height = butterflySize;
    butterfly.style.position = "absolute";
    butterfly.style.left = butterflyData.left + "px";
    butterfly.style.top = butterflyData.top + "px";

    body.appendChild(butterfly);
    butterflyData.interval = setInterval(fly, speed, butterflyData);
}

function fly(data)
{
    data.rotation = data.rotation + Math.random()*Math.PI/8 - Math.PI/16;
    var rotation = "rotate(" + data.rotation + "rad)";
    data.butterfly.style.transform = rotation;
    data.life -= speed;

    data.left += Math.sin(data.rotation);
    data.top -= Math.cos(data.rotation);

    data.butterfly.style.left = data.left + "px";
    data.butterfly.style.top = data.top + "px";
    
    if (data.life < 0)
    {
        clearInterval(data.interval);
        body.removeChild(data.butterfly);
    }
}

body.addEventListener("click", spawnButterfly);