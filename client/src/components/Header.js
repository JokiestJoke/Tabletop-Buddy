import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../scss/_header.scss'
import DiceyLogo from './DiceyLogo';
import LinkFormatter from './LinkFormatter';
/*
 * Header component that renders the navigation bar at the top of the application.
 */

const Header = () => {
  return (   
    <header>
      <Navbar collapseOnSelect expand="lg" fixed="top" >
        
        <Container>
          <DiceyLogo width={75} />
          <Navbar.Brand as={Link} to="/">Tabletop Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' aria-label='Toggle navigation' />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className='me-auto'>
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <NavDropdown renderMenuOnMount={true} title="Dungeons & Dragons" id="collapsible-nav-dropdown">
                  <NavDropdown.Item as={Link} to='/PlayerCharacterCreation'>Player Character Creation</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/MonsterBuilder'>Monster Builder</NavDropdown.Item>
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