import React from 'react';
//import { Link } from 'react-router-dom';
//import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../scss/_header.scss'
//import DiceyMascotMain from '../utils/Dicey_Mascot.png'
import DiceyLogo from './DiceyLogo';

/*
 * Header component that renders the navigation bar at the top of the application.
 */

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" fixed="top" >
        
        <Container>
          {/* <Image src={DiceyMascotMain} rounded/> */}
          <DiceyLogo width={75} />
          <Navbar.Brand to="/">Tabletop Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' aria-label='Toggle navigation' />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className='me-auto'>
              <>
                <Nav.Item>
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <NavDropdown renderMenuOnMount={true} title="Dungeons & Dragons" id="collapsible-nav-dropdown">
                  <NavDropdown.Item to="#">Player Character Creator</NavDropdown.Item>
                  <NavDropdown.Item to="#">Monster Creator</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#">About</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown renderMenuOnMount={true} title="Warhammer 40,000" id="collapsible-nav-dropdown">
                  <NavDropdown.Item to="#">Army Builder</NavDropdown.Item>
                  <NavDropdown.Item to="#">Wrath and Glory</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#">About</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown renderMenuOnMount={true} title="Help" id="collapsible-nav-dropdown">
                  <NavDropdown.Item to="#">Report a Bug</NavDropdown.Item>
                  <NavDropdown.Item to="#">Version Log</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#">Contact Us</NavDropdown.Item>
                </NavDropdown>
                
              </>
            
            </Nav>
          
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </header>
  );
};

export default Header;