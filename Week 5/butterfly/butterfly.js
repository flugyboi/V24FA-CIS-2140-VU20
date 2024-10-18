/*
 * Spawns a butterfly gif where ever the mouse is clicked. The butterfly moves around the screen for a few seconds and then disapears.
 *
 * Assignment:
 * 1. Randomize the initial rotation angle. Remember it is in radians.
 * 2. Add a limit so only 10 butterflys can be on screen at once.
 */


var body = document.getElementById("body");
var butterflyUrl = "./butterfly.gif";

function spawnButterfly(event)
{
    
}

body.addEventListener("click", spawnButterfly);