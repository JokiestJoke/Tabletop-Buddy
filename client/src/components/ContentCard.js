import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../scss/_content-card.scss'

const ContentCard = ({ mediaPathway, cardTitle, buttonText }) => {
  return (
    <Col md={2}>
      <Card>
        <Card.Img variant="top" src={mediaPathway} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ContentCard;
