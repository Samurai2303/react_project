import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api.service";
import {User} from "../user/User";

export function Users({getPosts}) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data));
    }, []);

    return(
        <div>
            {users.length===0?<div>Loading...</div>:users.map(value => <User user={value} getPosts={getPosts} key={value.id}/>)}
        </div>
    )
}