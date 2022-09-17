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
        if (user === userDetails) {
            setuserDetails(null);
        } else {
            setuserDetails(user);
        }
    }




    return (
        <div>
            <hr/>
            {userDetails? <div>
                            <h2>Id - {userDetails.id} <br/> Name - {userDetails.name}</h2>
                            <p>Username - {userDetails.username} <br/>
                                Email - {userDetails.email} <br/>
                                Phone - {userDetails.phone} <br/></p>
                        </div>: <div>User details...</div>
                }
            <hr/>



            {users.length ? users.map(value => <User user={value} userDetailsFn={userDetailsFn} key={value.id}/>) :
                <div>Waiting response from 'Jsonplaceholder.com'</div>}

        </div>
    );

}