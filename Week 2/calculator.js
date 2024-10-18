/*
This is a simple calculator script to add or subtract two numbers. 
Look through this script to get an idea on how If/Else logic can work and how functions can be attached to buttons.

Once you are familar with how the script works, add the following features:
- Multiplication and division
- A clear button
- Support for larger numbers
*/

var number1 = 0
var number2 = 0
var operator = null

function numberPressed(number) 
{
    // gets the textarea so the number can be displayed
    var textarea = document.getElementById("calculator-display");
    
    // appends the new number to the end of the display
    textarea.value += number 

    // if the operator has not been added then the new number is the first
    // if the operator has been added then the new number is the second
    if (operator === null) 
    {
        // stores the number for use later
        number1 = number 
        // *** Change this to support larger numbers ***
    }
    else
    {
        number2 = number
        // *** Change this to support larger numbers ***
    }
}

function operatorPressed(op)
{
    // There can only be one operator, so once it is added more can't be added
    if (operator === null)
    {
        var textarea = document.getElementById("calculator-display");
        textarea.value += op
        operator = op 
    }
}

function equalPressed()
{
    var textarea = document.getElementById("calculator-display");

    // If there is no operator then no calculation can be done
    if (operator !== null)
    {
        if (operator === "+")
        {
            number1 = number1 + number2
        }
        else if (operator === "-")
        {
            number1 = number1 - number2
            
        }
        // *** Add in support for multiplication and division ***
        
        // display the result
        textarea.value = number1
        
        // reset the other values so that a new calculation can be done
        number2 = 0
        operator = null
    }
}

// *** Add a Clear button to erase the screen ***

var count = 0;
var intervalId = setInterval(() => {
    count++;
    console.log("repeat " + count);

    // Ends after 5 times
    count > 5 ? clearInterval(intervalId) : "";
}, 1000);
setTimeout(() => {
    count++;
    console.log("just once " + count);
}, 2500);

function printPolitely(statement)
{
    console.log("Hello. Sorry to bother you, but I think this is important: " + statement + "\r\nThank you");
}
printPolitely("Something happened!");
printPolitely("Something else happened!");
printPolitely("This is the END!");