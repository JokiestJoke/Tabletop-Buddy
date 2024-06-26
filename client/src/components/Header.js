import React from 'react';
//import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../scss/_header.scss'

/*
 * Header component that renders the navigation bar at the top of the application.
 */

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" fixed="top" >
        
        <Container>
          <Navbar.Brand to="/">Tabletop Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' aria-label='Toggle navigation' />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className='me-auto'>
              <>
                <Nav.Item>
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#dnd">Dungeons & Dragons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#40k">Warhammer 40k</Nav.Link>
                </Nav.Item>
              </>
            
            </Nav>
          
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </header>
  );
};

export default Header;