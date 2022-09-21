import {Post} from "../post/Post";

export function Posts({posts}) {
    return(
        <div>
            {posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    )
}