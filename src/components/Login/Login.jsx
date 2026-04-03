import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, seterrorMessage]=useState(false);


    const handleUsernameChange = (event)=>
    {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);

    }
    const userAuthenticate =()=>{
        if(username === "Kushal"  && password === "dummy"){
            navigate(`/welcome/${username}`);
        }
        else{
            seterrorMessage(true);
        }
    }
    
    // function navigateToWelcome(){
    //     if(username == "Kushal"  && password =="dummy"){
    //         navigate('/welcome');
    //     }
    // }
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <div>Invalid credentials, Please try again.</div>}
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={userAuthenticate}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login