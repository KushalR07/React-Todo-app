import type {Todo} from '../types';

interface TodoListProps{
    todos:Todo[]
}

export default function TodoList({todos}:TodoListProps) {
   
    return(
        <ul>
            {todos.map(todo=>{
                return(
                    <li key={todo.id}>{todo.text}
                        <button onClick={()=>!todo.completed}>{todo.completed?"Completed":"Pending"}</button>
                    </li>
                )
            })}
        </ul>
    )
     
}