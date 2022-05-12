import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function TopNavBar() {
  return (
    <Navbar collapseOnSelect className="my-navbar" expand="lg" variant="dark">
      <Navbar.Brand className="logo" href="/">
        mento.
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="login-link" href="/Login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopNavBar;
