import axios from 'axios';
// import { getAccessToken, getRefreshToken } from '../components/register';
// import { refreshToken } from '../components/header';
export const axiosInstance = axios.create({
    baseURL: 'https://youtube-music.f8team.dev/api'
});


// axiosInstance.interceptors.request.use((config) => {
//     const accessToken = getAccessToken()
//     if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`
//     }
//     return config
// })

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response; 
//     },
//     async (error) => {
//         if (error.response && error.response.status === 401) {
//             const newToken = await refreshToken(); 
//             console.log(newToken);
//         }
//         return Promise.reject(error);
//     }
// );
