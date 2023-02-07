import {axiosService1} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    getAllPosts:()=>axiosService1.get(urls.posts.posts),
    getPostsById:(id)=>axiosService1.get(urls.posts.byId(id))
};

export {
    postsService
};