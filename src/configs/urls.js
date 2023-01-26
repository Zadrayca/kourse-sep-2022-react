const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    todos: '/todos',
    albums: 'albums',
    comments: '/comments',
    postById: (id) => `/posts/${id}`
}

export {
    baseUrl,
    urls
};