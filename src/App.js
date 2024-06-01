import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassicPortfolio from './ClassicPortfolio';
import Portfolio3D from './Portfolio3d';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<ClassicPortfolio />} />
        <Route exact path="/Portfolio3D" element={<Portfolio3D />} />
      </Routes>
    </Router>
  )
}

export default App;
