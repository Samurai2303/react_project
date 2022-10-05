import {actions} from "../configs";

let postsReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case actions.loadPosts:
            return {...state, posts: action.payload};
        case actions.getPost:
            let post = state.posts.find(value => value.id === +action.payload);
            return {...state, post};
        default:
            return {...state};
    }
};

export {postsReducer};