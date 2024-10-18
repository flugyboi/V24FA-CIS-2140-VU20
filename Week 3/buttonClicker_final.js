/*
 * Fill in the generateButtons function so that when it is clicked a group of buttons is randomly placed on the board.
 * Use the functions getButtons and displayButton from the buttonClickerUtils file to help you. Look at the documentation in that file for help on how to use those functions.
 */

function generateButtons()
{
    var buttonArray = getButtons();

    for (var i=0; i<buttonArray.length; i++)
    {
        displayButton(buttonArray[i], i);
    }
}