import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentCard from '../components/ContentCard';
import DnDCardMedia from '../utils/Dnd_Party_500_x_500.png'

/**
 * The Home component serves as the landing page of the application.
 */
const Home = () => {
  return (
    <MainLayout>
      <Container className='text-center home'>
        <Row >
          <ContentCard 
            mediaPathway={DnDCardMedia}
            cardTitle={'Dungeon & Dragons'}
            buttonText={'Create a Character'}
          />
          <ContentCard 
            mediaPathway={DnDCardMedia}
            cardTitle={'Warhammer 40k'}
          />     
        </Row>
        
      </Container>
    </MainLayout>
  );
}

export default Home;