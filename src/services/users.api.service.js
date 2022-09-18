import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

function getUsers() {
    return axiosInstance();
}

function getPostsOfUser(id) {
    return axiosInstance('/' + id + '/posts');
}

export {getUsers, getPostsOfUser};