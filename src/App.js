import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
<<<<<<< HEAD
import BottomFooter from './components/BottomFooter';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NoPage from './components/pages/NoPage';
import BarberPage from './components/pages/BarberPage';
import BarberPersonalPage from './components/BarberPersonalPage';
=======
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import SignUpForm from './components/SignUp/SignUpForm';
import BarberPersonalPage from './components/BarberPersonalPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

>>>>>>> main

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <div className="main">
      <TopNavBar userType={userType} setUserType={setUserType} />
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<HomePage userType={userType} />} />
          <Route path="/login" element={<LoginPage setUserType={setUserType} />} />
          <Route path="/signup" element={<SignUpPage setUserType={setUserType} />} />
          <Route path="/personal_page" element={<BarberPersonalPage />} />
          <Route path="/barber:id" element={<BarberPage />} />
          <Route path="*" element={<NoPage />} />
=======
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/SignUp' element={<SignUpForm/>}/>
          <Route path='/BarberProfile' element={<BarberPersonalPage/>}/>
>>>>>>> main
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
