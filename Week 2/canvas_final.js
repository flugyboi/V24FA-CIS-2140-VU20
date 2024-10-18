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

var speed = 1;
var points = 0;

var movementDirection = 0;
var xLocation = 100;

var radiusApple = 20;
var colorApple = 'red';
var apples = [];

var display = document.getElementById('display');
var context = display.getContext('2d');
var gameId;

var pause = false;

function newApple(index)
{
    var redNumber = Math.floor(Math.random() * 256);
    var isSuper = Math.random() > 0.75 ? true : false;

    apples[index] = {
        color: isSuper ? "rgb(0 255 255)" : "rgb(" + redNumber + " 0 0)",
        x: Math.random() * (display.width - (2 * radiusApple)) + radiusApple,
        y: -radiusApple,
        super: isSuper,
    };
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
        else if (event.key === "Control")
        {
            pause = !pause;
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
    if (pause)
    {
        return;
    }

    xLocation += movementDirection;
    if (xLocation < 0)
    {
        xLocation = 0;
    }
    else if (xLocation > display.width - width)
    {
        xLocation = display.width - width;
    }

    apples[0].y += speed;
    if (apples[0].y > display.height + radiusApple)
    {
        endGame();
    }
    else if (isAppleHit(0))
    {
        appleHit(0);
    }

    if (apples.length > 1)
    {
        apples[1].y += speed;
        if (apples[1].y > display.height + radiusApple)
        {
            endGame();
        }
        else if (isAppleHit(1))
        {
            appleHit(1);
        }
    }

    
    context.clearRect(0, 0, display.width, display.height);
    
    switch (movementDirection)
    {
        case 5:
            context.fillStyle = "blue";
            break;
        case -5:
            context.fillStyle = "red";
            break;
        case 0:
            context.fillStyle = "green";
            break;
    }
    context.fillRect(xLocation, yLocation, width, height);

    drawApple(0);
    drawApple(1);
}

// Formula found here: https://math.stackexchange.com/questions/275529/check-if-line-intersects-with-circles-perimeter
function isAppleHit(index)
{
    var a = Math.pow(width, 2);
    var b = 2*(xLocation-apples[index].x)*width;
    var c = Math.pow(xLocation-apples[index].x, 2) + Math.pow(yLocation-apples[index].y, 2) - Math.pow(radiusApple, 2);
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

function appleHit(index)
{
    if (apples[index].super)
    {
        points += 3;
    }
    else
    {
        points++;
    }
        
    speed += 0.5;
    if (speed > radiusApple/2)
    {
        speed = radiusApple/2;
    }

    updatePoints();
    newApple(index);
}

function drawApple(index)
{
    context.fillStyle = apples[index].color;
    context.beginPath();
    context.arc(apples[index].x, apples[index].y, radiusApple, 0, 2*Math.PI);
    context.fill();
}

function updatePoints()
{
    var pointsDisplay = document.getElementById('points');
    pointsDisplay.innerText = points;
}

function endGame()
{
    clearInterval(gameId);
}

function startGame()
{
    points = 0;
    speed = 1;
    apples = [];
    updatePoints();
    newApple(0);
    setTimeout(newApple, 3500, 1);

    clearInterval(gameId);
    gameId = setInterval(update, 10);
}

addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);