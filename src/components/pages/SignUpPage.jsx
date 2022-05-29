import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

function SignUpPage(props) {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMismatch, setPasswordsMismatch] = useState(true);
  const [emailIsTaken, setEmailIsTaken] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setEmailIsTaken(true);
    setPasswordsMismatch(true);
    if (password === repeatPassword) {
      axios.post('/user/SignUp', {
        fullname,
        email,
        password,
      })
        .then(() => {
          props.setUserType('client');
          navigate('/');
        })
        .catch(() => {
          // eslint-disable-next-line no-alert
          setEmailIsTaken(false);
        });
    } else {
      setPasswordsMismatch(false);
    }
  }

  return (
    <div className="form-box">
      <form
        onSubmit={handleSubmit}
        className="login-signup"
      >
        <h1>Create Account</h1>
        <hr />
        <TextField
          className="login-signup-input"
          id="filled-basic"
          label="Full Name"
          variant="filled"
          margin="normal"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
          required
        />
        <br />
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
        <TextField
          className="login-signup-input"
          id="filled-password-input"
          label="Repeat Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
          required
        />
        <br />
        <p1 className="error-message" hidden={passwordsMismatch}>please verify your password</p1>
        <br hidden={passwordsMismatch} />
        <p1 className="error-message" hidden={emailIsTaken}>email is already used</p1>
        <br hidden={emailIsTaken} />
        <Button type="submit" variant="contained">Sign Up</Button>
        <hr />
        <a href="/Login">Already have an account?</a>
      </form>
    </div>
  );
}

export default SignUpPage;
