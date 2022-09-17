export function User(props) {
    let {user, userDetailsFn} = props;

    return (
        <div>
            <h2>Id - {user.id} <br/>
                Name - {user.name}</h2>
            <button onClick={() => {
                userDetailsFn(user)
            }}>Show/Hide details
            </button>
        </div>
    );
}