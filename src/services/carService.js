import {axiosService2} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAllCars:()=>axiosService2.get(urls.cars.cars),
    create:(data) => axiosService2.post(urls.cars.cars, data),
    updateById:(id, data) => axiosService2.put(urls.cars.byId(id), data),
    deleteById:(id) => axiosService2.delete(urls.cars.byId(id))
};

export {
    carService
};