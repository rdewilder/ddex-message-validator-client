import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (
      <div className="ddex-header">
        <Navbar className="ddex-header-nav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">DDEX ERN Validator</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Help</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
