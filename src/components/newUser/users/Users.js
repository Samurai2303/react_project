import {useEffect, useState} from "react";
import {getUsers} from "../../../services/users.api.service";
import {User} from "../user/User";
import {Form} from "../form/form";

export function Users(){
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data));
    }, [])

    function newUser(user) {
        setUsers([...users, user]);
    }


    return(
        <div>
            <div>
                <Form setUsers={setUsers}/>
            </div>
            <hr/>
            <div>
                {users.length===0?<div>Loading...</div>:users.map((value, index) => <User user={value} key={index}/>)}
            </div>
        </div>
    )
}