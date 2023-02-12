import {axiosService3} from "./axiosService";
import {urls} from "../configs";

const carService2 = {
    getAllCars: (page = 1) => axiosService3.get(urls.cars.cars, {params: {page}}),
    create: (data) => axiosService3.post(urls.cars.cars, data),
    updateById: (id, data) => axiosService3.put(urls.cars.byId(id), data),
    deleteById: (id) => axiosService3.delete(urls.cars.byId(id))
};

export {
    carService2
};