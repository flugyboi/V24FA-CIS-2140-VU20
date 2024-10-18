var pipLoctions = [
    {x: 0.5, y: 0.5},
    {x: 0.25, y: 0.25},
    {x: 0.25, y: 0.5},
    {x: 0.25, y: 0.75},
    {x: 0.75, y: 0.25},
    {x: 0.75, y: 0.5},
    {x: 0.75, y: 0.75}
];
var pipsUsedOnEachNumber = [
    [0],
    [1, 6],
    [0, 1, 6],
    [1, 3, 4, 6],
    [0, 1, 3, 4, 6],
    [1, 2, 3, 4, 5, 6]
];
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var width = display1.width;
var pipRadius = width * 0.08;

function fillCircle(canvas, xCenter, yCenter, radius)
{
    canvas.fillStyle = 'black';
    canvas.beginPath();
    canvas.arc(xCenter, yCenter, radius, 0, 2*Math.PI);
    canvas.fill();
}

function showDie(display, resultNumber)
{
    var context = display.getContext('2d');
    context.clearRect(0, 0, display.width, display.height);

    var pipsUsed = pipsUsedOnEachNumber[resultNumber-1];
    for (var index = 0; index < pipsUsed.length; index++)
    {
        var pipIndex = pipsUsed[index];
        fillCircle(
            context,
            pipLoctions[pipIndex].x * width,
            pipLoctions[pipIndex].y * width,
            pipRadius);
    }
}

function rollDie()
{
    setText("Get a Pair!");
    stopColorfulTextScroll();

    var result1 = Math.floor(Math.random()*6) + 1;
    var result2 = Math.floor(Math.random()*6) + 1;
    showDie(display1, result1);
    showDie(display2, result2);
    
    if (result1 === result2)
    {
        setText("Winner!")
        startColorfulTextScroll();
    }
}