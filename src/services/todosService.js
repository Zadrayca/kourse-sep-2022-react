import {axiosService} from "./axiosService";
import {urls} from "../configs";

const todosService = {
    getTodos: () => axiosService.get(urls.todos)
};

export {
    todosService
};