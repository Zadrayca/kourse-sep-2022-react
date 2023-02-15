import {apiService, IRes} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id:number): IRes<ICar> => apiService.get(urls.cars.byId(id))
}

export {
    carService
}