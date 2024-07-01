import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SocialsButtonGroup from './SocialsButtonGroup';
import '../scss/_footer.scss';

/**
 * Footer component that displays at the bottom of the application.
 * It uses react-bootstrap's components.
 */
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container className="text-center">
        
        <Row>
          <Col >
            <span>Developed with &#9829; by JokiestJoke</span>
            <SocialsButtonGroup />
          </Col>
          
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;