/*
This is a small in browser game that uses the HTML canvas element to draw an apple (red circle) and a basket (green rectangle).
The goal is the catch as many apples as possible before missing one.

A. Play the game, read the script to get familar with it, and then implement the following features:
- A score tracker
- Speed up the apples after each catch
- Pause and unpause the game when Control (or another button of your choice) is hit
- Randomize the apple's shade of red each time it falls

B. Later, implement these features:
- Have a random chance for a Super Apple to fall that gives 3 points and looks unique
- Have two apples falling at the same time
*/

var color = 'green';
var width = 70;
var height = 20;
var yLocation = 450;

var movementDirection = 0;
var xLocation = 100;

var radiusApple = 20;
var colorApple = 'red';
var xApple;
var yApple;

var display = document.getElementById('display');
var context = display.getContext('2d');
var gameId;

function newApple()
{
    xApple = Math.random() * (display.width - (2 * radiusApple)) + radiusApple;
    yApple = -radiusApple;
}

function keyDown(event)
{
    if (event.repeat === false)
    {
        if (event.key === "ArrowLeft")
        {
            movementDirection -= 5;
        }
        else if (event.key === "ArrowRight")
        {
            movementDirection += 5;
        }
    }
}

function keyUp(event)
{
    if (event.repeat === false)
    {
        if (event.key === "ArrowLeft")
        {
            movementDirection += 5;
        }
        else if (event.key === "ArrowRight")
        {
            movementDirection -= 5;
        }
    }
}

function update() 
{
    xLocation += movementDirection;
    if (xLocation < 0)
    {
        xLocation = 0;
    }
    else if (xLocation > display.width - width)
    {
        xLocation = display.width - width;
    }

    yApple += speed;
    if (yApple > display.height + radiusApple)
    {
        endGame();
    }
    else if (isAppleHit())
    {
        appleCaught();
    }

    context.clearRect(0, 0, display.width, display.height);

    context.fillStyle = color;
    context.fillRect(xLocation, yLocation, width, height);

    context.fillStyle = colorApple;
    context.beginPath();
    context.arc(xApple, yApple, radiusApple, 0, 2*Math.PI);
    context.fill();
}

// Formula found here: https://math.stackexchange.com/questions/275529/check-if-line-intersects-with-circles-perimeter
function isAppleHit()
{
    var a = Math.pow(width, 2);
    var b = 2*(xLocation-xApple)*width;
    var c = Math.pow(xLocation-xApple, 2) + Math.pow(yLocation-yApple, 2) - Math.pow(radiusApple, 2);
    var disc = Math.pow(b,2) - 4*a*c;

    if (disc <= 0)
    {
        return false;
    }

    var t1 = (-b + Math.sqrt(disc))/(2*a);
    var t2 = (-b - Math.sqrt(disc))/(2*a);

    if ((0 < t1 && t1 < 1) || (0 < t2 && t2 < 1))
    {
        return true;
    }

    return false;
}

function appleCaught()
{
    // *** Write what should happen when an apple is caught ***
}

function endGame()
{
    clearInterval(gameId);
}

function startGame()
{
    newApple();
    gameId = setInterval(update, 10);
}

addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);