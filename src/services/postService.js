import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const postService = {
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)
}

export {postService};