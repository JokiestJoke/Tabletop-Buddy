import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import  '../scss/_content-carousel.scss'
import Monster from '../utils/images/Monster_Creator_400_x_400.png'
import Warhammer from '../utils/images/Wrath_and_Glory_400_x_400.png'

const ContentCarousel = () => {
  return(
    <Col className='d-flex justify-content-center align-items-center'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Image src={Monster}/>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Warhammer}/>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}

export default ContentCarousel;