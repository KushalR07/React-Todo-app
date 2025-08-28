import './App.css'
import Navbar from './Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Todo } from "./types";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"element={<TodoForm />} />
          <Route path="/list" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
