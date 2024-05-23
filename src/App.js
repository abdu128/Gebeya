import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Chart from './pages/Cart'; // Ensure you have a Cart component
import Product from './pages/product';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Chart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
