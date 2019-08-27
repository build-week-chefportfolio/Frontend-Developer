import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': "application/json",
            Authorization: `${token}`
        }
    });
};
