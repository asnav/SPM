import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="form-box">
      <form
        onSubmit={() => {
          if (!passwordIsWrong) {
            props.setUserType('barber');
            navigate('/signup');
          } else {
            setPasswordIsWrong(true);
          }
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
          required
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
          required
        />
        <br />
        <p1 className="error-message" hidden={!passwordIsWrong}>Wrong username or password</p1>
        <br hidden={!passwordIsWrong} />
        <Button type="submit" variant="contained">Login</Button>
        <hr />
        <a href="/SignUp">{'Don\'t have an account yet?'}</a>
      </form>
    </div>
  );
}
export default LoginPage;
