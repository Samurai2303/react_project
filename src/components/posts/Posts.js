import {useEffect} from "@types/react";
import {getPostsOfUser} from "../../services";
import {useState} from "react";

export async function Posts(id) {
    let [posts, setPosts] = useState([]);

    await useEffect(() => {
        getPostsOfUser(id).then(({data}) => setPosts(data));
    }, []);

    return posts;
}