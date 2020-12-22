import axios from 'axios';
import {backEndUrl} from "../../utils/common.resource";

const axiosInstance = axios.create({
    baseURL: backEndUrl,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});
export default axiosInstance;
