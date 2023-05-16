export function PostFactory() {
    const createPost = (url, author, title, description, body) => {
      return {
        id: Math.random(),
        author,
        date: new Date(),
        url,
        title,
        description,
        body,
      };
    };
  
    return {
      createPost,
    };
}
  