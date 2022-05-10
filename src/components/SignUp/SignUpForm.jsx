import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    e.preventDefault();
    try {
      axios.post('/api/users/signup', {
        fullname,
        email,
        password,
      });
      navigate.push('/');
    } catch (err) {
      window.alert(err);
    }
  };
  return (
    <div className="container">
      <h2 className="title">Create Account</h2>
      <form className="sign-up">
        <div className="name">
          <label className="label">Full name</label>
          <input
            className="input"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button onClick={handleSubmit}>SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
