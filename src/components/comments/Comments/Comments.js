import {useEffect, useState} from "react";
import {getComments} from "../../../services/jsonplaceholder.service";
import {Comment} from "../Comment/Comment";

export function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(({data}) => setComments(data));
    }, [])

    return(
        <div>
            {comments.map(value => <Comment comment={value} key={value.id}/>)}
        </div>
    )
}