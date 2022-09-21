export function User({user, getPosts}) {

    return (
        <div>
            <h3>Id - {user.id} <br/> Name - {user.name}</h3>
            <button onClick={() => {getPosts(user.id)}}>Show posts</button>
        </div>
    );
}