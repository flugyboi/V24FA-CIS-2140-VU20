/*
 * These are the other functions that run the button clicker game.
 * They are not part of the assignment, there is nothing here you have to change.
 * You may edit the code if you want to change something about the game.
 */ 


// These four settings must be the same in the CSS code and here for the code to work properly.
var boardWidth = 500;
var boardHeight = 500;
var buttonWidth = 25;
var buttonHeight = 25;

var board = document.getElementById("board");
var timeDisplay = document.getElementById("timeDisplay");

var startTime;

/*
 * Makes an array of between 3 and 6 button definitions and then returns the array.
 * It also starts a timer to track how long it takes to clear all the buttons.
 */
function getButtons()
{
    startTime = Date.now();
    var buttonArray = [];
    
    for(var i=0; i<Math.random()*4+2; i++)
    {
        buttonArray[i] = {
            xCord: Math.floor(Math.random()*(boardWidth - buttonWidth)),
            yCord: Math.floor(Math.random()*(boardHeight - buttonHeight)),
            color: "rgb(" + Math.floor(Math.random()*255) + " " + Math.floor(Math.random()*255) + " " + Math.floor(Math.random()*255) + ")"
        };
    }

    return buttonArray;
}

/*
 * Takes in a button definition and its index as parameters and creates a new button based on them.
 * The new button is then added to the board element.
 */
function displayButton(button, index)
{
    var element = document.createElement("button");
    element.innerText = index;
    element.classList.add("board-button");
    element.onclick = function() { buttonClicked(element); };
    element.style.left = button.xCord + "px";
    element.style.top = button.yCord + "px";
    element.style.backgroundColor = button.color;

    board.appendChild(element);
}

/* 
 * Called when one of the buttons made in displayButton is clicked. 
 * Removes the button from the board and checks if there are no more buttons. 
 * If there are no more it stops the timer and displays the time.
 */
function buttonClicked(element)
{
    board.removeChild(element);
    if (board.childNodes.length === 0)
    {
        var time = (Date.now() - startTime)/1000; // convert the milliseconds to seconds
        timeDisplay.innerText = time + " seconds";
    }
}