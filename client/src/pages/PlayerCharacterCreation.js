import React from 'react';
import Container from 'react-bootstrap/Container';
import MainLayout from '../Layouts/MainLayout';
import '../scss/_page-not-found.scss';

/**
 * PlayerCharacterCreation component displays the main character creation page.
 *
 * Players can make player characters here and also get helpful advice.
 */
const PlayerCharacterCreation = () => {
  return (
    <MainLayout>
      <Container className="text-center player-character-creation">
        <h1>Player Character Creation</h1>
        <h2>Under Construction</h2>
      </Container>
    </MainLayout>
  );
};

export default PlayerCharacterCreation;