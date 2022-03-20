import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

/**
 * constructs the base of the app
 * @return {JSX.Element}
 */
function App() {
  return (
    <div>
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/Login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
      <BottomFooter />
    </div>
  );
}

export default App;
