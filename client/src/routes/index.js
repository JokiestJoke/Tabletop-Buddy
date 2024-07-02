import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import DndRoutes from './DnDRoutes';

/**
 * The main routing component of the application.
 */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }/> 
        {DndRoutes()}
        <Route path='*' element={ <PageNotFound /> } />
        {/* <Route path="/" element={<Home />} />
        
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;