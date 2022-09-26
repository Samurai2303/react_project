import axios from "axios";

let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/'});

function getTodos() {
    return axiosInstance('/todos');
}
function getAlbums() {
    return axiosInstance('/albums');
}
function getComments() {
    return axiosInstance('/comments');
}
function getPost(id) {
    return axiosInstance('posts/' + id);
}

export {getAlbums, getTodos, getComments, getPost};