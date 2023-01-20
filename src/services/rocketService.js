import {axiosRocketService} from "./axiosService";
import {urls} from "../configs/urls";

const rocketService = {
    getAllRockets: () => axiosRocketService.get(`${urls.launches}`).then(value => value.data)
}

export {rocketService};