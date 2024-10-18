/*
 * This script takes in a JSON file and modifies the directory page to add a link and description for each of the posts listed in the JSON file.
 * 
 * Assignment:
 * 1. Add a third post that will display on the directory and as a post page.
 * 2. Customize the style of the site in some way to make it look the way you want. The same information should be displayed, but make it your own.
 */
var directoryDiv = document.getElementById("directory");
var baseLink = "./post.html?id=";

var jsonUrl = "./posts.json";

fetch(jsonUrl).then(response => {
    response.json().then(posts => {
        posts.forEach(element => {
            createCard(element);
        });
    });
}).catch(exception => {
    console.log(exception);
});

// Creates a card to display the post's information in and adds it to the webpage
function createCard(post)
{
    
}
