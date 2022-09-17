import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
});

export function getLaunchesAxios() {
    return axiosInstance();
}