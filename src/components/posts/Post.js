export function Post(props) {
    let {post} = props;

    return(
        <div>
            <h2>Id - {post.id} <br/> Title - {post.title}</h2>
            <p>Body - {post.body}</p>
        </div>
    )
}