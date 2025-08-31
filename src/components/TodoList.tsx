import TodoItem from "./TodoItem";
import { useState } from "react";
import type { Todo } from "../types";
import "./TodoList.css";

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
}

export default function TodoList({ todos, onToggleComplete }: TodoListProps) {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => setSelectedTodo(todo)}
            style={{ cursor: "pointer" }}
          >
            {todo.text} {todo.completed && "✅"}
          </li>
        ))}
      </ul>
      {selectedTodo && (
        <TodoItem todo={selectedTodo} onToggleComplete={onToggleComplete} />
      )}
    </>
  );
}
