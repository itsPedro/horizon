import { getPosts } from "../utils/misc.js";

class BlogPosts {

    constructor(posts) {
        this.posts = posts.reverse();
        this.container = document.querySelector('.posts');
        this.renderPosts();
    }

    renderPosts() {
        console.log(this.posts)
        this.posts.forEach((post) => {

            const postElement = document.createElement('div');
            postElement.classList.add('post');
            
            
            const postLink = document.createElement('a');
            const postBtn = document.createElement('button');
            postBtn.classList.add('btn');
            postBtn.classList.add('post-link');
            postBtn.textContent = 'Leia Mais';
            postLink.appendChild(postBtn);

            postBtn.addEventListener('click', () => {
                window.location.href = `post.html?id=${post.id}`;
            });

            const postImage = document.createElement('div');
            const img = document.createElement('img');
            postImage.classList.add('post-image');
            img.src = post.url;
            postImage.appendChild(img);

            const metaData = document.createElement('div');
            metaData.classList.add('post-metadata');
            const author = document.createElement('p');
            author.classList.add('post-author');
            author.textContent = post.author;
            const date = document.createElement('p');
            date.classList.add('post-date');
            date.textContent = post.date;
            metaData.appendChild(author);
            metaData.appendChild(date);

            const postContent = document.createElement('div');
            postContent.classList.add('post-content');
            const title = document.createElement('h1');
            title.classList.add('post-title');
            title.textContent = post.title;
            const description = document.createElement('p');
            description.classList.add('post-description');
            description.textContent = post.description;
            postContent.appendChild(title);
            postContent.appendChild(description);
            postContent.appendChild(postLink);
            postContent.appendChild(metaData)

            postElement.appendChild(postImage);
            postElement.appendChild(postContent);
            this.container.appendChild(postElement);
        });
    }

}

const posts = await getPosts();
new BlogPosts(posts);