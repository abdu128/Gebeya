<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import './pages/home';
import './pages/login';

=======
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Chart from './pages/Cart'; // Ensure you have a Cart component
import Product from './pages/product';
>>>>>>> 8f2ea82fc942abca356d1106cf0b244eb16cacdb

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
=======
      <div className="App">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Chart />} />
        </Routes>
      </div>
>>>>>>> 8f2ea82fc942abca356d1106cf0b244eb16cacdb
    </Router>
  );
}
export default App;
