import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

function getAllUsers(){
    return axiosInstance();
}

function getUserById(id) {
    return axiosInstance(`/${id}`);
}

export {getAllUsers, getUserById};