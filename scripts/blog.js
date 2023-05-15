import { getPosts } from "../utils/misc";

class BlogPosts {
    constructor() {
        this.posts = [];
        this.container = document.querySelector('.main-posts');
        this.template = document.querySelector('.post-template');
        this.loadPosts();
    }

    async loadPosts() {
        const response = await getPosts();
        this.posts = response;
        this.renderPosts();
    }

    renderPosts() {
        const fragment = document.createDocumentFragment();
        this.posts.forEach((post) => {
            const element = this.template.content.cloneNode(true);
        })
    }


}