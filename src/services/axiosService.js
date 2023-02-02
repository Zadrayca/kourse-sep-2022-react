import axios from "axios";

import {baseUrl} from "../configs";

const axiosService = axios.create({baseUrl: baseUrl});

export {
    axiosService
};