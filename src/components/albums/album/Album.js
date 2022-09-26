export function Album({album}) {
    return(
        <div>
            <h4>Id - {album.id} <br/> User Id - {album.userId}</h4>
            <p>Title - {album.title}</p>
        </div>
    )
}