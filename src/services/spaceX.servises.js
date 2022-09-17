let _url = 'https://api.spacexdata.com/v3/launches/';

export function getLaunches() {
    return fetch(_url)
        .then(value => value.json());
}