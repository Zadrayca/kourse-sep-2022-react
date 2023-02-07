import {axiosService1} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getAllUsers:()=>axiosService1.get(urls.users),
    getUserById:(id)=>axiosService1.get(`${urls.users}/${id}`)
};

export {
    usersService
};