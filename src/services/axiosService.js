import axios from "axios";

import {baseUrl1, baseUrl2} from "../configs";

const axiosService1 = axios.create({baseURL:baseUrl1});

const axiosService2 = axios.create({baseURL:baseUrl2});

export {
    axiosService1,
    axiosService2
};