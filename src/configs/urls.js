const baseUrl1 = 'https://jsonplaceholder.typicode.com';
const baseUrl2 = 'http://owu.linkpc.net/carsAPI/v1';

const posts = '/posts';
const users = '/users';
const cars = '/cars';

const urls = {
    posts: {
        posts,
        byId: (id) => `${posts}/${id}`
    },
    users: {
        users,
        byId: (id) => `${users}/${id}`
    },
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    baseUrl1,
    baseUrl2,
    urls
};