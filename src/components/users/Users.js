import {useEffect, useState} from "react";

import {getAllUsers, getPostsOfUser} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";
import {Posts} from "../posts/Posts";
import {Post} from "../post/Post";

export function Users() {
    let [users, setUsers] = useState([]);
    let [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data))
    }, []);

    function userDetailsU(user) {
        setUserDetails(user);
    }

    let [posts, setPosts] = useState([]);

    async function ShowPosts(id) {
        let v = await Posts(id);
        setPosts(v);
    }




    return (
        <div>
            <div>
                {posts.length!==0?posts.map(value => <Post key={value.id} post={value}/>):false}
            </div>
            <hr/>
            <div>
                {userDetails && <UserDetails user={userDetails}/>}
            </div>
            <hr/>
            <div>
                {users.map(value => <User user={value} userDetailsU={userDetailsU} key={value.id} ShowPosts={ShowPosts}/>)}
            </div>
        </div>
    );
}