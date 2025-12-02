import axios from 'axios';
import { refreshToken } from '../components/header';
import { LogOutAccount } from '../components/login';
export const axiosInstance = axios.create({
    baseURL: 'https://youtube-music.f8team.dev/api'
});


axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token")
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response; 
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            const newToken = await refreshToken() 
            if (!newToken) {
                LogOutAccount()
                return
            }
            localStorage.setItem("access_token", newToken)
            console.log(newToken);
            return axiosInstance(error.config)
        }
        return Promise.reject(error);
    }
);
