import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    })
}


// The creat function creates a new instance of axios with a custom configuration 