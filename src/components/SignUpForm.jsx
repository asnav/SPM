import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div className="container">
      <h2 className="title">Create Account</h2>
      <form onSubmit={handleSubmit} className="sign-up">
        <label htmlFor="name" className="name">
          Full name:
          <input
            className="input"
            type="text"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>

        <label htmlFor="email" className="email">
          Email
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password" className="password">
          Password
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}
export default SignUpForm;
