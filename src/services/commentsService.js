import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    getComments: () => axiosService.get(urls.comments)
};

export {
    commentsService
};