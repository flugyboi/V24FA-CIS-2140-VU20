
/*
 * This file makes an object class for blog posts that will have different display methods for different types of posts.
 * Assignment: Add a third type of blog post: AnnouncementPost. Have this be text inside an h1 tag so the text is very big. Add a section to posts.js that uses this new type.
 */

class BlogPost {
    content;
    title;

    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    displayContent(element) {
        var title = document.createElement("h3");
        title.innerText = this.title;
        element.appendChild(title);
    }

    static createPost(definition) {
        switch (definition.type) {
            case "text":
                return new TextPost(definition.title, definition.content);
            case "image":
                return new ImagePost(definition.title, definition.content);
            default:
                throw "Unkown blog type";
        }
    }
}

class TextPost extends BlogPost {
    displayContent(element) {
        super.displayContent(element);
        var post = document.createElement("p");
        post.innerText = this.content;
        element.appendChild(post);
        element.appendChild(document.createElement("hr"));
    }
}

class ImagePost extends BlogPost {
    displayContent(element) {
        super.displayContent(element);
        var post = document.createElement("img");
        post.src = this.content;
        post.width = 500;
        element.appendChild(post);
        element.appendChild(document.createElement("hr"));
    }
}


var display = document.getElementById("display");
posts.forEach(postDefinition => {
    var post = BlogPost.createPost(postDefinition);
    post.displayContent(display);
});