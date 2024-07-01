import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'

const DiceyLogo = ({ width }) => {
  return (
    <Col md={1} className='text-center'>
      <Image 
        src={require('../utils/Dicey_Mascot.png')}
        width={width}
      />
    </Col>
  );
}

export default DiceyLogo;