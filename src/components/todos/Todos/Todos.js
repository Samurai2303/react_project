import {getTodos} from "../../../services/jsonplaceholder.service";
import {useEffect, useState} from "react";
import {Todo} from "../todo/Todo";

export function Todos() {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(({data}) => setTodos(data));
    }, []);

    return (
        <div>
            {todos.map(value => <Todo todo={value} key={value.id}/>)}
        </div>
    );
}