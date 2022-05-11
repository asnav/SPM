import {TextField, Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';


function LoginPage() {
  // const [username, setUsername] = useState('usrname');
  // const [password, setPassword] = useState('pass');
  // setUsername(username);
  // setPassword(password);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={() => {
        navigate('/About');
      }}
      className='loginPage'
    >
      <h1>Login</h1>
      <TextField
        className='loginInput'
        id="filled-basic"
        label="Username"
        variant="filled"
        margin='normal'
        // value={username}
        // onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <TextField
        className='loginInput'
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        // value={password}
        // onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button type='submit' variant="contained">Login</Button>
      <hr />
      <a href='/SignUp' >{'Don\'t have an account yet?'}</a>
    </form>
  );
};
export default LoginPage;
