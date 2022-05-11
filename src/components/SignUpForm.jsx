import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
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
      window.alert(err);
      navigate('/');
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
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}/>
        </div>
        <div className="email">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
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
