import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../configs";
import {commentsService} from "../../../services";
import {CommentDetails} from "../CommentDetails/CommentDetails";
import {Comment} from "../Comment/Comment";

function Comments() {
    let input = useRef();

    let dispatch = useDispatch();

    let state = useSelector(state => state.commentsReducer);

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: actions.loadComments, payload: data}));
    }, []);

    let show = (id) => {
        dispatch({type: actions.getComment, payload: id});
    };

    return (
        <div>
            {state.comment ? <CommentDetails comment={state.comment}/> : <div>No comment is selected...</div>}
            <hr/>
            <input type="number" placeholder={'comment id'} ref={input}/>
            <button onClick={() => show(input.current.value)}>Show</button>
            {state.comments.length ? state.comments.map(value => <Comment comment={value} key={value.id}/>) : <div>Loading...</div>}

        </div>
    );
}

export {Comments};
