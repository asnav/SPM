import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpForm';
import AboutPage from './components/AboutPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="main">
      <TopNavBar isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/Login"
            element={<LoginPage setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/SignUp"
            element={<SignUpPage setLoggedIn={setLoggedIn} />}
          />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <BottomFooter />
    </div>
  );
}

export default App;
