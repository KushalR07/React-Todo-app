import React from 'react';
import { useState,useEffect } from 'react';
import './TodoForm.css';
import type {Todo}   from '../types';


export default function TodoForm() {
    const [text, setText] = useState("");
    const [todos,setTodos]=useState<Todo[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const AddTodo = () => {
        const newTodo:Todo={
            id:Date.now(),
            text:text.trim(),
            completed:false
        }
        setTodos([...todos, newTodo]);
        console.log(todos);
        setText("");

    };
    useEffect(()=>{
        console.log(todos);
    },[todos])
    return (
        <form className="todo-form" onSubmit={e => { e.preventDefault(); AddTodo(); }}>
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