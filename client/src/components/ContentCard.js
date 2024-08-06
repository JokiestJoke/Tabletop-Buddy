import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../scss/_content-card.scss'

const ContentCard = ({ mediaPathway, cardTitle, buttonText, cardText }) => {
  return (
    <Col className='d-flex justify-content-center'>
      <Card >
        <Card.Img variant="top" src={mediaPathway} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>
            { cardText }
          </Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ContentCard;
