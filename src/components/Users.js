import {useEffect, useState} from "react";
import {getUsers} from "../services/users.api.service";
import {User} from "./User";

export function Users(props) {
    let {lift} = props;

    let [users,setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    return(
        <div>
            {users.map(value => <User user={value} lift={lift} key={value.id}/>)}
        </div>
    )
}