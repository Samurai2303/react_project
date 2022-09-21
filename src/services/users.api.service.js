import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

function getUsers() {
    return axiosInstance();
}

export {getUsers};