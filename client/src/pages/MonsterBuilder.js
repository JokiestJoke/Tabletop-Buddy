import React from 'react';
import Container from 'react-bootstrap/Container';
import MainLayout from '../Layouts/MainLayout';
import '../scss/_page-not-found.scss';

/**
 * MonsterBuilder component displays the main monster builder page.
 *
 * Dungeon Masters can make monsters here and also get helpful advice.
 */

const MonsterBuilder = () => {
  return (
    <MainLayout>
      <Container className="text-center page-not-found">
        <h1>Monster Builder</h1>
        <h2>Under Construction</h2>
      </Container>
    </MainLayout>
  );
};

export default MonsterBuilder;