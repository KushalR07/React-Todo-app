import React from 'react';
import { useState } from 'react';
import './TodoForm.css';


interface TodoFormProps{
    onAddTodo:(text:string)=>void;
}
export default function TodoForm({onAddTodo}:TodoFormProps) {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        if(text.trim() === "") return;
        onAddTodo(text);
        setText("");
    }
   
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-input"
                placeholder="Enter your Todo task here"
                type="text"
                value={text}
                onChange={handleChange}
            />
            <button className="todo-button" type="submit">Add Todo</button>
        </form>
    );
}