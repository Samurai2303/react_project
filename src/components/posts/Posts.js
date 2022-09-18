import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/users.api.service";
import {Post} from "./Post";

export function Posts(props) {
    let {user} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsOfUser(user.id).then(value => setPosts(value.data));
    }, []);

    return(
        <div>
            <h3>Posts of {user.name}</h3>
            {posts.map(value => <Post post={value}/>)}
        </div>
    )
}