import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <form
      onSubmit={() => {
        navigate('/About');
      }}
      className="login-signup"
    >
      <h1>Login</h1>
      <hr />
      <TextField
        className="login-signup-input"
        id="filled-basic"
        label="Email"
        type="email"
        variant="filled"
        margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <TextField
        className="login-signup-input"
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button type="submit" variant="contained">Login</Button>
      <hr />
      <a href="/SignUp">{'Don\'t have an account yet?'}</a>
    </form>
  );
}
export default LoginPage;
