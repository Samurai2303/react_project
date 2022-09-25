import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

function getUsers() {
    return axiosInstance('/users');
}
function getComments() {
    return axiosInstance('/comments');
}

async function postUser(data) {
    let v;
     await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => v = json);
    return v;
}

let postComment = async (data) => {
    let v = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json());
    return v;
}

export {getUsers, getComments, postUser, postComment};