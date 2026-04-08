import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../security/Authcontext';

const Login = () => {

    const navigate = useNavigate();
    const authContext = useAuth();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, seterrorMessage]=useState(false);


    const handleUsernameChange = (event)=>
    {
        setUsername(prev=>event.target.value);
    }

    const handlePasswordChange = (event)=>{
        setPassword(prev=>event.target.value);

    }
    const userAuthenticate =()=>{
        const success = authContext.login(username, password);
        if(success){
            navigate(`/welcome/${username}`);
        } else {
            seterrorMessage(true);
        }
    }
    function handleSubmit(event){
      event.preventDefault();
        userAuthenticate();
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
        <form onSubmit={handleSubmit}>
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
            autoComplete="off"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login