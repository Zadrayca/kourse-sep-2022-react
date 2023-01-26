import {axiosService} from "./axiosService";
import {urls} from "../configs";

const albumsService = {
    getAlbums: () => axiosService.get(urls.albums)
};

export {
    albumsService
};