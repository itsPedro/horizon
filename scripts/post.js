import { getPostById } from '../utils/misc.js';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

async function fetchPost() {
  try {
    const post = await getPostById(postId);
    console.log(post);
    const postContentDiv = document.querySelector('.post-main');

    postContentDiv.innerHTML = `
      <div class="main-blog">
        <div class="main-img">
          <img src="${post.url}" alt="post image">
        </div>
        <div class="blog-header">
            <div class="blog-header-content">
                <h1>${post.title}</h1>
                <div class="blog-metadatas">
                  <span>${post.author}</span>
                  <p>${post.date}</p>
                </div>
                <div class="blog-description">
                  <p>${post.description}</p>
                </div>
            </div>
        </div>
        <div class="blog-content">
          <p>${post.body}</p>
        </div>
      </div>
    `;

  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

fetchPost();