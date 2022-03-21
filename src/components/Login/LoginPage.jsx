import React from 'react';

import './LoginPage.css';
const LoginPage=()=>{
  function handleSubmit(e) {
    e.preventDefault();
    alert('You are in the system.');
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form className='loginPage' onSubmit={handleSubmit}>
        <h1>CFN-Site</h1>
        <div>
          <label>Username:</label>
          <input type = "text" />
        </div>
        <div>
          <label>Password:</label>
          <input type = "password" />
        </div>
        <div>
          <button >Log In</button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
