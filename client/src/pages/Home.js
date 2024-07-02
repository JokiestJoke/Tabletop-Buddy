import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
/**
 * The Home component serves as the landing page of the application.
 */
const Home = () => {
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <h1>
              Home Test 1
            </h1>
          </Col>
          <Col>
            <h1>
              Home Test 2
            </h1>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default Home;