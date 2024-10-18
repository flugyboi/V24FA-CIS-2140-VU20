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
        number1 = number1 * 10 + number 
    }
    else
    {
        number2 = number2 * 10 + number
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
        else if (operator === "*")
        {
            number1 = number1 * number2
        }
        else if (operator === "/")
        {
            number1 = number1 / number2
        }
        
        // display the result
        textarea.value = number1
        
        // reset the other values so that a new calculation can be done
        number2 = 0
        operator = null
    }
}

function clearPressed()
{
    number1 = 0;
    number2 = 0;
    operator = null;

    var textarea = document.getElementById("calculator-display");
    textarea.value = "";
}