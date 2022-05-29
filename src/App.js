import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NoPage from './components/pages/NoPage';
import BarberPage from './components/pages/BarberPage';
import BarberPersonalPage from './components/BarberPersonalPage';

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <div className="main">
      <TopNavBar userType={userType} setUserType={setUserType} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage userType={userType} />} />
          <Route path="/login" element={<LoginPage setUserType={setUserType} />} />
          <Route path="/signup" element={<SignUpPage setUserType={setUserType} />} />
          <Route path="/personal_page" element={<BarberPersonalPage />} />
          <Route path="/barber:id" element={<BarberPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
