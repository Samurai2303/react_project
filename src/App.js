import './App.css';
import {useState} from "react";
import {getPostsOfUser} from "./services/posts.api.service";
import {Posts, Users} from "./components";

function App() {
    let [posts, setPosts] = useState([]);

    function getPosts(id) {
        getPostsOfUser(id).then(({data}) => setPosts(data));
    }

    return (
        <div>
            {posts.length===0?<div>Posts of the user...</div>:<Posts posts={posts}/>}
            <hr/>
            <Users getPosts={getPosts}/>
        </div>
    );
}

export default App;
