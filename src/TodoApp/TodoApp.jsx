import Login from '../components/Login/Login'
import Welcome from '../components/Welcome/Welcome'
import ErrorComponent from '../components/ErrorComponent'
import TodoList from '../components/TodoList/TodoList'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Logout from '../components/Logout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TodoComponent from '../components/TodoList/TodoComponent'

const TodoApp=()=>{
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/welcome/:username" element={<Welcome />}></Route>
            <Route path="*" element={<ErrorComponent />}></Route>
            <Route path='/todos' element={<TodoList/>}></Route>
            <Route  path='/logout' element={<Logout />}/>
            <Route  path='/todo/:id' element={<TodoComponent />}/>
          </Routes>
          <Footer />
        </Router>
      </>
    );
}

export default TodoApp;

