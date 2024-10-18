/*
 * Fill in the function so that it calls the next url it is given until it reaches the end of the path.
 * Please use the callApi function as it has some basic error handling.
 * Each request will return a response body with three properties: nextLink, finished, and result.
 * body.nextLink will be the next url you should call. When it is null you are done.
 * body.finished will be a boolean that is false if there are more urls to call and true if you are done.
 * body.result will be a string. It will be null except for when you are done.
 * 
 * Once you have the result print it out with the printResult function.
 */

// Starting URL, call this first
var url = "https://js-week3-api.azurewebsites.net/api/Loop?code=Pt5d7lqLSympO9VRi9T4oBph9a9ZNR8BlACTWsKjrpe-AzFu-JlXHg%3D%3D"

async function callApiEndpoint()
{
    var result;
    while (url !== null)
    {
        var body = await callApi(url);
        url = body.nextLink;
        result = body.result;
    }

    printResult(result);
}

/*
 * This function makes the fetch call and parces the output into something easily readable.
 * It also provides some basic error handling to prevent your code from running forever or getting into unexpected situations.
 */ 
var count = 0
async function callApi(url)
{
    count++;
    if (count > 50)
    {
        throw "Too many requests made. Something is wrong."
    }

    var response = await fetch(url);
    if (!response.ok)
    {
        console.log(response.status);
        throw "Error calling url " + url;
    }
    return await response.json();
}

/*
 * Prints a message to the results display element.
 */ 
function printResult(result)
{
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerText = result;
}
