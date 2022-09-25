import axios from "axios";

let axiosInstance = axios.create({baseURL: 'http://owu.linkpc.net/api/v2'});

let actions = {
    getAll: () => axiosInstance.get('/cars'),
    post: (car) => axiosInstance.post('/cars', car),
    deleteById: (id) => axiosInstance.delete(`/cars/${id}`),
    updateById: (id, car) => axiosInstance.put(`/cars/${id}`, car)
};

export {axiosInstance, actions};
