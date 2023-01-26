import {axiosService} from "./axiosService";
import {urls} from "../configs";

const todosService = {
    getComments: () => axiosService.get(urls.todos)
};

export {
    todosService
};