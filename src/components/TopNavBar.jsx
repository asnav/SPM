import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function TopNavBar(props) {
  return (
    <Navbar collapseOnSelect className="my-navbar" expand="lg" variant="dark">
      <Navbar.Brand className="logo" href="/">
        mento.
      </Navbar.Brand>
      <Nav>
        {props.userType ? (
          <Nav.Link className="navbar-item" href="/login" onClick={props.setUserType(null)}>
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link className="navbar-item" href="/login">
            Login
          </Nav.Link>
        )}
        {props.userType === 'barber' && (
          <Nav.Link className="navbar-item" href="/personal_page">
            My Page
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}

export default TopNavBar;
