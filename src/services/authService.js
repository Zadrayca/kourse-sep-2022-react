import {axiosService3} from "./axiosService";
import {urls} from "../configs";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    login: async (cred) => {
        const response = await axiosService3.post(urls.auth.login, cred);
        if (response.status === 200) {
            authService.setTokens(response.data)
        }
        return response
    },

    refresh: async (refresh) => {
        const response = await axiosService3.post(urls.auth.refresh, {refresh})
        if (response.status === 200) {
            authService.setTokens(response.data)
        }
        return response
    },

    me: () => axiosService3.get(urls.auth.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken: () => localStorage.getItem(accessTokenKey),

    getRefreshToken: () => localStorage.getItem(refreshTokenKey),

    deleteTokens: ()=> {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },

    isAuthenticated:()=> !!localStorage.getItem(accessTokenKey)

};

export {
    authService
};