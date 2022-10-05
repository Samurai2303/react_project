import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {usersService} from "../../../services";
import {actions} from "../../../configs";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

function Users() {
    let input = useRef();

    let dispatch = useDispatch();

    let state = useSelector(state => state.usersReducer);

    useEffect(() => {
        usersService.getAll().then(({data}) => {dispatch({type: actions.loadUsers, payload: data})});
    }, []);

    function show(id) {
        dispatch({type: actions.getUser, payload: id});
    }

    return (
        <div>
            {state.user ? <UserDetails user={state.user}/> : <div>No user choosed</div>}
            <hr/>
            <input type="number" placeholder={'user id'} ref={input}/>
            <button onClick={() => show(input.current.value)}>Show</button>
            <hr/>
            {state.users.length ? state.users.map(value => <User user={value} key={value.id}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Users};
