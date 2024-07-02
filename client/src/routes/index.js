import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

/**
 * The main routing component of the application.
 */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/> 
        {/* <Route path="/" element={<Home />} />
        
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;