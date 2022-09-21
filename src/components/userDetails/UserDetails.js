export function UserDetails({user}) {
    let {address} = user;
    return (
        <div>
            <h3>Id - {user.id} <br/>
                Name - {user.name}</h3>
            <h4>User info:</h4>
            <p>Phone - {user.phone} <br/>
                Username - {user.username}</p>
            <h4>Address:</h4>
            <p>City - {address.city} <br/>
                Street - {address.street} <br/>
                Suite - {address.suite} <br/>
                Zipcode - {address.zipcode}</p>
        </div>
    );
}