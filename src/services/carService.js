import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAllCar: () => axiosService.get(urls.cars),
    createCar: (newCar) => axiosService.post(urls.cars, newCar),
    updateCarById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteCarById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {carService};