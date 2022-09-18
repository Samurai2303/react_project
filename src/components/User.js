export function User(props) {
    let {user, lift} = props;
    let {address} = user;

    return (
        <div>
            <h2>Id - {user.id} <br/> Name - {user.name}</h2>
            <p>Username - {user.username} <br/>
                Email - {user.email} <br/>
                Phone - {user.phone} </p>
            <h4>Address:</h4>
            <p>City - {address.city} <br/>
                Street - {address.street} <br/>
                Suite - {address.suite} <br/>
                Zipcode - {address.zipcode}</p>
            <h4>Geo:</h4>
            <p>Lat - {address.geo.lat} <br/>
            Lng - {address.geo.lng}</p>
            <button onClick={()=>{
                lift(user);
            }}>Posts of the user</button>

        </div>
    );


}