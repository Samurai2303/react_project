export function User({user, userDetailsU, ShowPosts}) {

    return (
        <div>
            <h3>Id - {user.id} <br/> Name - {user.name}</h3>
            <p>Username - {user.username} <br/>
                Phone - {user.phone}</p>
            <button onClick={()=>{ShowPosts(user.id)}}>Show posts of the user</button>
            <button onClick={()=>{userDetailsU(user)}}>Show details of the users</button>
        </div>
    );
}