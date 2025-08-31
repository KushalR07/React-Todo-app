import type { Todo } from "../types";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, onToggleComplete }: TodoItemProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginTop: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>Todo Details</h3>
      <p>
        <strong>ID:</strong> {todo.id}
      </p>
      <p>
        <strong>Text:</strong> {todo.text}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed ✅" : "Pending ⏳"}
      </p>
      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? "Mark as Pending" : "Mark as Completed"}
      </button>
    </div>
  );
}
