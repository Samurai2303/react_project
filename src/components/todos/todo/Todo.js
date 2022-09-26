export function Todo({todo}) {

    return(
        <div>
            <h4>Id - {todo.id} <br/> User Id - {todo.userId}</h4>
            <p>Title - {todo.title} <br/>
            Completed - {todo.completed}</p>
        </div>
    )
}