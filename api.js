import axios from 'axios';
import { baseURL } from './constants';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Accept-Language': 'en',
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const newConf = { ...config };
        return newConf;
    },
    (error) => {
        Promise.reject(error).then((r) => r);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
);

export default axiosInstance;