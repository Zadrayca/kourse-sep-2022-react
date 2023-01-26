import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    getPostById: (id) => axiosService.get(urls.postById(id))
};

export {
    postsService
};