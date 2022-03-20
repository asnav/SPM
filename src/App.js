import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';
import LoginPage from './components/LoginPage';

// import { Switch, Route, HashRouter } from "react-router-dom";


function App() {
  return (
  <div>
    <TopNavBar/>
    <BottomFooter/>
    <LoginPage/>
  </div>
  );
}

export default App;
