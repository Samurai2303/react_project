import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

function getUsersAxios() {
    return axiosInstance.get();
}

function getUserAxios(id) {
    return axiosInstance.get('/' + id);
}

export {getUsersAxios, getUserAxios};