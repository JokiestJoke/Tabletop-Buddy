import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import ContentCarousel from '../components/ContentCarousel';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ContentCard from '../components/ContentCard';
import '../scss/_home.scss'
import dicey from '../utils/Dicey_Mascot.png'
import DnDPartyImage from '../utils/images/DnD_Party_400x400.png'
import Warhammer40kGoldenThrone from '../utils/images/Warhammer_Golden_Throne_400_x_400.png'
import TavernWall from '../utils/images/tavern_wall_background_500_x_500.png'

/**
 * The Home component serves as the landing page of the application.
 */
const Home = () => {

  const [user, setUser] = useState(true);
  
  return (
    <MainLayout>
      <Container className='text-center home'>
        <h1>Tabletop Buddy</h1>
        
        {user ? (
          <>
            <Col>
              <Row className='d-flex justify-content-sm-around align-items-sm-center flex-sm-wrap'>
                <ContentCard
                  mediaPathway={DnDPartyImage}
                  cardTitle={'Dungeon & Dragons'}
                  cardText={'Enter a world of fantasy a today with the help of our beginner friendly tools.'}
                  buttonText={'Let\'s Begin'}
                />
      
                <ContentCard 
                  mediaPathway={Warhammer40kGoldenThrone}
                  cardTitle={'Warhammer 40,000'}
                  cardText={'Jump in to the grim dark future with the help of our beginner friendly tools.'}
                  buttonText={'Let\'s Begin'}
                />
              </Row>
            </Col>
            <Col>
              <ContentCarousel />
            </Col>
          </>
        ) : (
          <>
            <Col className='d-flex justify-content-center'>
              <Image src={dicey} alt='Dicey the mascot'/>
            </Col>
            <Col>
              <p>Welcome to Tabletop Buddy, the platform designed for tabletop enthusiasts of all skills levels </p>
              <p><Link to='/login'>Log in</Link> to begin working on some proofs!</p>
              <p>Don't have an account? <Link to="/signup">Sign up</Link> now!</p>
            </Col>
          </>
        )
        }
      </Container>
    </MainLayout>
  );
}

export default Home;