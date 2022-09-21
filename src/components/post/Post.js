export function Post({post}) {
    return (
        <div>
            <h4>Title - {post.title}</h4>
            <p>Body - {post.body}</p>
        </div>
    );
}