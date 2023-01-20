import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const userService = {
    getAllUsers: () => axiosService.get(urls.users).then(value => value.data),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}

export {userService};