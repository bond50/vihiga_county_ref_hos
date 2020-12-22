import React, {useEffect} from 'react';
import {useHistory} from "react-router";
import axiosInstance from "../axios/axios";

const Logout = () => {
    const history = useHistory();
    useEffect(() => {
        const response = axiosInstance.post('users/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push('/auth/login');
    })
    return (
        <div>logout</div>
    );
};

export default Logout;