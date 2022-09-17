let _url = 'https://jsonplaceholder.typicode.com/users';

function getUsers() {
    return (fetch(_url)
        .then(value => value.json()));
}

function getUser(id) {
    return (fetch(_url + id)
        .then(value => value.json));
}

export {getUser, getUsers};