import Login from '../components/Login/Login'
import Welcome from '../components/Welcome/Welcome'
import ErrorComponent from '../components/ErrorComponent'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const TodoApp=()=>{
    return (
      <>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/welcome/:username" element={<Welcome />}></Route>
                <Route path="*" element={<ErrorComponent />}></Route>

            </Routes>
        </Router>
      </>
    );
}

export default TodoApp;

