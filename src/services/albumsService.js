import {axiosService} from "./axiosService";
import {urls} from "../configs";

const albumsService = {
    getComments: () => axiosService.get(urls.albums)
};

export {
    albumsService
};