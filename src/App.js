
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignUp/SignUpForm';
import AboutPage from './components/About/AboutPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <TopNavBar isLoggedIn={isLoggedIn}/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route
            path='/Login'
            element={<LoginPage setLoggedIn={setLoggedIn}/>}
          />
          <Route
            path='/SignUp'
            element={<SignUpPage setLoggedIn={setLoggedIn}/>}
          />
          <Route path='/About' element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>
      <BottomFooter />
    </div>
  );
}

export default App;
