import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import  '../scss/_content-carousel.scss'
import Monster from '../utils/images/Monster_Creator_400_x_400.png'

const ContentCarousel = () => {
  return(
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image src={Monster}/>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default ContentCarousel;