import {Link} from "react-router-dom";

export function Comment({comment}) {
    return(
        <div>
            <h4>Id - {comment.id}<br/> Post Id - {comment.postId}</h4>
            <p>Name - {comment.name} <br/>
            Email - {comment.email} <br/>
            Body - {comment.body}</p>
            <Link to={'/posts/'+comment.postId}>Show post</Link>
            <hr/>
        </div>
    )
}