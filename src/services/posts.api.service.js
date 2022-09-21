import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export function getPostsOfUser(id) {
    return axiosInstance(`/${id}/posts`);
}