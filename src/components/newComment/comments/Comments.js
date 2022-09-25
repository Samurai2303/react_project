import {Form} from "../form/Form";
import {Comment} from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../../services/users.api.service";

export function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(({data}) => setComments(data));

    }, []);




    return(
        <div>
            <Form setComments={setComments}/>
            <hr/>
            {comments.length===0?<div>Loading...</div>:comments.map((value, index) => <Comment comment={value} key={index}/>)}
        </div>
    )
}