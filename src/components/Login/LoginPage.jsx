import React from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';

const LoginPage=()=>{
  const navigate = useNavigate();
  const LoginButton = () => {
    navigate('/About');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form className='loginPage'>
        <h1>Mento</h1>
        <div>
          <label>Username:</label>
          <input type = "text" />
        </div>
        <div>
          <label>Password:</label>
          <input type = "password" />
        </div>
        <div>
          <button onClick={LoginButton}
          >Log In</button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
