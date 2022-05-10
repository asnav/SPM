
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import HomePage from './components/Home/HomePage';
// import LoginPage from './components/Login/LoginPage';
import SignUpForm from './components/SignUp/SignUpForm';
import AboutPage from './components/About/AboutPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/SignUp' element={<SignUpForm/>}/>
          <Route path='/About' element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>
      <BottomFooter />
    </div>
  );
}

export default App;
