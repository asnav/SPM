import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/TopNavBar.css';
import TopNavBar from './components/TopNavBar';
import BottomFooter from './components/BottomFooter';

function App() {
  return (
  <div>
    <TopNavBar/>
    <BottomFooter/>
  </div>
  );
}

export default App;
