import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';

const LoginPage=()=>{
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleLogIn(e) {
    const mail = emailRef.current.value;
    if (mail === '') return;
    mail.current.value = null;
    const password = passwordRef.current.value;
    if (password === null) return;
    password.current.value = null;
  }
  const signUpButton = () => {
    navigate('/SignUp');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form className='loginPage'>
        <h1>Mento</h1>
        <div>
          <label>Username:</label>
          <input ref={emailRef} type = "text" />
        </div>
        <div>
          <label>Password:</label>
          <input ref={passwordRef} type = "password" />
        </div>
        <div>
          <button onClick={handleLogIn}
          >Log In</button>
        </div>
        <div>
          <text onClick={signUpButton}
          >If you dont have an account click here to SIGN UP</text>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;