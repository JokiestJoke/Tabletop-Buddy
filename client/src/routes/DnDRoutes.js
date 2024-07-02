import React from 'react';
import { Route } from 'react-router-dom';
import PlayerCharacterCreation from '../pages/PlayerCharacterCreation';
import MonsterBuilder from '../pages/MonsterBuilder';

/**
 * A component that renders a group of routes related to Dungeons and Dragons.
 *
 
 */
const DndRoutes = () => {
  return (
    <>
      <Route path='/PlayerCharacterCreation' element={ <PlayerCharacterCreation /> } />
      <Route path='MonsterBuilder' element={ <MonsterBuilder /> } />
    </>
  );
};

export default DndRoutes;