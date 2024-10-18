/*
 * This script takes one of the posts, as identified by the query parameter 'id', and displays its information.
 */

var titleTag = document.getElementById("title");
var bodyTag = document.getElementById("body");
var jsonUrl = "./posts.json";

fetch(jsonUrl).then(response => {
    response.json().then(posts => {
        var params = new URLSearchParams(window.location.search);
        var id = params.get('id');

        posts.forEach(element => {
            if (element.id === id)
            {
                titleTag.innerText = element.title;
                bodyTag.innerHTML = element.body;
            }
        });
    });
}).catch(exception => {
    console.log(exception);
});