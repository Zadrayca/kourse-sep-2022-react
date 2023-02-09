const baseUrl1 = 'https://jsonplaceholder.typicode.com';
const baseUrl2 = 'http://owu.linkpc.net/carsAPI/v1';
const baseUrl3 = 'http://owu.linkpc.net/carsAPI/v2';

const posts = '/posts';
const users = '/users';
const cars = '/cars';
const auth = '/auth';
const refresh = '/refresh';
const me = '/me';

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
    },
    auth: {
        login: auth,
        refresh: auth + refresh,
        me: auth + me
    }
}

export {
    baseUrl1,
    baseUrl2,
    baseUrl3,
    urls
};