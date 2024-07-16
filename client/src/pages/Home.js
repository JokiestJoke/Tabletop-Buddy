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
            cardTitle={'Dungeon & Dragons: Character Creator'}
            cardText={'Enter a world of fantasy and create a character'}
            buttonText={'Create Character'}
          />

          <ContentCard 
            mediaPathway={Warhammer40kGoldenThrone}
            cardTitle={'Warhammer 40,000: Army Builder'}
            cardText={'Jump in to the grim dark future of Warhammer 40,000 and create an army'}
            buttonText={'Build an army'}
          />

          <ContentCard 
            mediaPathway={MonsterCreatorImage}
            cardTitle={'Dungeons & Dragons: Monster Creator'}
            cardText={'Create monsters & bosses for your campaigns'}
            buttonText={'Build an army'}
          />

          <ContentCard
            mediaPathway={WrathAndGloryImage}
            cardTitle={'Warhammer 40,000: Wrath & Glory Character Creator'}
            cardText={'Jump in to the grim dark future of Warhammer 40k'}
            buttonText={'Create Character'}
          />

        </Row>
      </Container>
    </MainLayout>
  );
}

export default Home;