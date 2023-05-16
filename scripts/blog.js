import { getPosts } from "../utils/misc.js";

class BlogPosts {

    constructor() {
        this.posts = [];
        this.container = document.querySelector('.posts');
        this.template = document.querySelector('.post');
        this.renderPosts();
    }

    renderPosts() {
        const fragment = document.createDocumentFragment();
        this.posts.forEach((post) => {
            const element = this.template.content.cloneNode(true);
            element.querySelector('.post-title').innerHTML = post.title;
            element.querySelector('.post-description').innerHTML = post.description;
            element.querySelector('.post-date').innerHTML = post.date;
            element.querySelector('.post-author').innerHTML = post.author;
            element.querySelector('.post-url').innerHTML = post.url;

        });
        this.container.appendChild(fragment);
    }

}

const posts = await getPosts();
new BlogPosts(posts);

console.log(posts)


