import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    getByPostId: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}

export {commentService};