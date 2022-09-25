export function Comment({comment:{id, postId, name, email, body}}){

    return(
        <div>
            <h2>Id - {id} <br/> PostId = {postId}</h2>
            <h3>Name - {name}</h3>
            <p>Email - {email} <br/>
                Body - {body}</p>

        </div>
    )
}