import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainLayout from './Layouts/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <h1>
              Test 1
            </h1>
          </Col>
          <Col>
            <h1>
              Test 2
            </h1>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default App;
