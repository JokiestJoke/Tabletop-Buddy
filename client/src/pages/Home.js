import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentCard from '../components/ContentCard';
import DnDPartyImage from '../utils/images/DnD_Party_400x400.png'
import Warhammer40kGoldenThrone from '../utils/images/Warhammer_Golden_Throne_400_x_400.png'
import MonsterCreatorImage from '../utils/images/Monster_Creator_400_x_400.png'
import WrathAndGloryImage from '../utils/images/Wrath_and_Glory_400_x_400.png'

/**
 * The Home component serves as the landing page of the application.
 */
const Home = () => {
  return (
    <MainLayout>
      <Container className='text-center home'>

        <Row className='d-flex justify-content-sm-around align-items-sm-center flex-sm-wrap'>
          <ContentCard
            mediaPathway={DnDPartyImage}
            cardTitle={'Dungeon & Dragons'}
            cardText={'Enter a world of fantasy today with the help of our beginner friendly tools.'}
            buttonText={'Let\'s Begin'}
          />

          <ContentCard 
            mediaPathway={Warhammer40kGoldenThrone}
            cardTitle={'Warhammer 40,000'}
            cardText={'Jump in to the grim dark future of Warhammer 40,000 with the help of our beginner friendly tools.'}
            buttonText={'Let\'s Begin'}
          />

        </Row>
      </Container>
    </MainLayout>
  );
}

export default Home;