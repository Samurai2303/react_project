import {useEffect, useState} from "react";
import {getPost} from "../../services/jsonplaceholder.service";
import {useParams} from "react-router-dom";

export function Post() {
    let {id} = useParams();
    let [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(({data}) => setPost(data));
    }, []);

    return(
        <div>
            <h4>Id - {post.id} <br/> User id - {post.userId}</h4>
            <p>Title - {post.title} <br/>
            Body - {post.body}</p>

        </div>
    )
}