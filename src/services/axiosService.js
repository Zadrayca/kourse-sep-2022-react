import axios from "axios";
import {baseUrl, rocketUrl} from "../configs";

const axiosService = axios.create({baseURL:baseUrl});

const axiosRocketService = axios.create({baseURL:rocketUrl});

export {
    axiosService,
    axiosRocketService
};