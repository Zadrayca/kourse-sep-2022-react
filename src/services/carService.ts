import {apiService, IRes} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAllCars: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id: string): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.cars.base, car),
    updateById: (id: string, data: ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteById: (id: string): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}