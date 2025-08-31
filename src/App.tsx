import "./App.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  // ✅ Toggle completed state
  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoForm onAddTodo={handleAddTodo} />} />
          <Route
            path="/list"
            element={
              <TodoList todos={todos} onToggleComplete={handleToggleTodo} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
