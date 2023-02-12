import {axiosService3} from "./axiosService";
import {urls} from "../configs";

const carUserService = {
    create:(user) => axiosService3.post(urls.auth.users, user)
}

export {
    carUserService
}