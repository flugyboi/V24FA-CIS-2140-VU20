/*
 * These are helper functions to display the colorful background to the win screen.
 * Feel free to look at and modify this file, but it is not part of the assignment.
 */

var textSpan = document.getElementById("textSpan");
var textDisplay = document.getElementById("textDisplay");
var progress = 0;
var intervalId = null;

// Sets the text displayed
function setText(text)
{
    textSpan.innerText = text;
}

// Starts the background gradient scroll
function startColorfulTextScroll()
{
    progress = 0;
    textSpan.style.color = "white";
    textDisplay.style.background = "linear-gradient(45deg, red 0%, green 50%, blue 100%)";
    intervalId = setInterval(advanceColorfulTextScroll, 10);
}

// Moves the background gradient scroll
function advanceColorfulTextScroll()
{
    progress++;
    progress = progress%150;
    textDisplay.style.background = "linear-gradient(45deg, red " + (-150 + progress) + 
                                    "%, green " + (-100+progress) +
                                    "%, blue " + (-50+progress) +
                                    "%, red " + (progress) + 
                                    "%, green " + (50+progress) +
                                    "%, blue " + (100+progress) + "%)";
}

// Stops the background gradient scroll
function stopColorfulTextScroll()
{
    clearInterval(intervalId);
    textSpan.style.color = "";
    textDisplay.style.background = "";
}