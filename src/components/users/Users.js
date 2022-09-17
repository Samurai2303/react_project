import {useEffect, useState} from "react";
import {User} from "./User";
import {getUsers} from "../../services/users.api.services";


export function Users() {

    let [users, setUsers] = useState([]);
    let [userDetails, setuserDetails] = useState(null);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value);
            });
    }, [])

     let userDetailsFn = (user) => {
        setuserDetails(user);
    }


    return (
        <div>
            <hr/>
            {userDetails && <div>
                <h2>Id - {userDetails.id} <br/> Name - {userDetails.name}</h2>
                <p>Username - {userDetails.username} <br/>
                Email - {userDetails.email} <br/>
                Phone - {userDetails.phone} <br/></p>
            </div>}
            <hr/>

            {users.map(value => <div><User user={value} userDetailsFn={userDetailsFn} key={value.id}/></div>)}
        </div>
    )

}