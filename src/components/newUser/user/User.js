export function User({user}) {
    let {address} = user;
    let {company} = user;


    return (
        <div>
            <h3>Id - {user.id} <br/> Name - {user.name}</h3>
            <p>Username - {user.username} <br/>
                Phone - {user.phone} <br/>
                Email - {user.email}</p>
            <h5>Address:</h5>
            <p>City - {address.city} <br/>
                Street - {address.street} <br/>
                Suite - {address.suite} <br/>
                Zipcode - {address.zipcode} </p>
            <h6>Geo:</h6>
            <p>Lat - {address.geo.lat} <br/>
                Lng - {address.geo.lng}</p>
            <h5>Company:</h5>
            <p>Company name - {company.name} <br/>
                Website - {company.website} <br/>
                CatchPhrase - {company.catchPhrase} <br/>
                Bs - {company.bs}</p>
        </div>
    )
}