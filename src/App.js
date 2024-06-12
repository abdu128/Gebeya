import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />*
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
