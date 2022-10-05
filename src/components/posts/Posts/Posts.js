import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {postsService} from "../../../services";
import {actions} from "../../../configs";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

function Posts() {
    let input = useRef();

    let state = useSelector(state => state.postsReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: actions.loadPosts, payload: data}));
    }, []);

    let show = (id) => {
        dispatch({type: actions.getPost, payload: id});
    };

    return (
        <div>
            {state.post ? <PostDetails post={state.post}/> : <div>No post choosen...</div>}
            <hr/>
            <input type="number" placeholder={'post id'} ref={input}/>
            <button onClick={() => show(input.current.value)}>Show</button>
            <hr/>
            {state.posts.length ? state.posts.map(value => <Post post={value} key={value.id}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Posts};
