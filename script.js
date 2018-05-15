"use strict";

$(document).ready(() => {
    $.get('https://www.reddit.com/r/aww/.json', (data) => {
    // console.log(data.data.children);

    for(let post of data.data.children) {
        console.log(post);
        $("#container").append (`
        <div class="post">
            <h4><a href="https://reddit.com/${post.data.permalink}">${post.data.title}</a></h4>
            <p>${post.data.author}</p>
            <img src="${post.data.preview.images["0"].source.url}">
        </div>
        `)
        console.log(post.data.author);
    }


    })
});