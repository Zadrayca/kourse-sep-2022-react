import axios from "axios";

import {baseUrl1, baseUrl2, baseUrl3} from "../configs";
import {authService} from "./authService";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const axiosService1 = axios.create({baseURL: baseUrl1});

const axiosService2 = axios.create({baseURL: baseUrl2});

const axiosService3 = axios.create({baseURL: baseUrl3});

axiosService3.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        const access = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
});

let isRefreshing = false;

axiosService3.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true;

            try {
                await authService.refresh(refresh);
            } catch (e) {
                authService.deleteTokens();
                history.replace('/login?expSession=true');
            }
            isRefreshing = false;
            return axiosService3(error.config)
        }
        return Promise.reject(error)
    }
)


export {
    axiosService1,
    axiosService2,
    axiosService3,
    history
};