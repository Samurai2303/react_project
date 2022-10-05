function PostDetails({post}) {

    return (
        <div>
            <h3>Id - {post.id} <br/> User id - {post.userId}</h3>
            <p>Title - {post.title} <br/>
                Body - {post.body}</p>
        </div>
    );
}

export {PostDetails};
