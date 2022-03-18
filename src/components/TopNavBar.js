import {Navbar,Nav} from 'react-bootstrap';
import '../css/TopNavBar.css';


function TopNavBar(){
    return (
        <Navbar fixed= "sticky" bg="dark" variant="dark"> 
    <Navbar.Brand href="App.js">FCN-Site</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link className="nav-link" href="#LOGIN">LOGIN/REGISTER</Nav.Link>
    </Nav>
  </Navbar>

    );
}

export default TopNavBar;