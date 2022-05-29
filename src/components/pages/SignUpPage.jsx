/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

function SignUpPage(props) {
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   fullname: '',
  //   email: '',
  //   password: '',
  // });
  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  //   window.alert(values.fullname);
  // };
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      try {
        axios.post('/user/SignUp', {
          fullname,
          email,
          password,
        });
        navigate('/');
      } catch (err) {
        // eslint-disable-next-line no-alert
        window.alert(err);
        props.setUserType('client');
        navigate('/');
      }
    } else {
      setIsHidden(false);
    }
  };
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
        <p1 className="error-message" hidden={isHidden}>Wrong username or password</p1>
        <br hidden={isHidden} />
        <Button type="submit" variant="contained">Sign Up</Button>
        <hr />
        <a href="/Login">Already have an account?</a>
      </form>
    </div>
  );
}

export default SignUpPage;
