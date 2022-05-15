import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

function SignUpForm() {
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
  const handleSubmit = () => {
    // e.preventDefault();
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
      navigate('/');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="login-signup"
    >
      <h1>Create Account</h1>
      <TextField
        className="login-signup-input"
        id="filled-basic"
        label="Full Name"
        variant="filled"
        margin="normal"
        value={fullname}
        onChange={(event) => setFullname(event.target.value)}
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
      <Button type="submit" variant="contained">Sign Up</Button>
    </form>
  );
}
export default SignUpForm;
