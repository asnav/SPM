import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpForm';

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <div className="main">
      <TopNavBar userType={userType} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage userType={userType} />} />
          <Route
            path="/Login"
            element={<LoginPage setUserType={setUserType} />}
          />
          <Route
            path="/SignUp"
            element={<SignUpPage setUserType={setUserType} />}
          />
        </Routes>
      </BrowserRouter>
      <BottomFooter />
    </div>
  );
}

export default App;
