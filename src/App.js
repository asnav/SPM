
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/TopNavBar';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import SignUpForm from './components/SignUp/SignUpForm';
// import BarberPersonalPage from './components/BarberPersonalPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/SignUp' element={<SignUpForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
