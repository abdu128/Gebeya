import React, { useState } from 'react';
import exampleImage1 from '../assets/image1.jpg';
import exampleImage2 from '../assets/image2.jpg';
import exampleImage3 from '../assets/image3.jpg';
import './product.css';

const Product = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    // Example product data
    const products = [
      { id: 1, name: 'Product 1', image: exampleImage1, description: 'Description for Product 1', price: '$25.00' },
      { id: 2, name: 'Product 2', image: exampleImage2, description: 'Description for Product 2', price: '$30.00' },
      { id: 3, name: 'Product 3', image: exampleImage3, description: 'Description for Product 3', price: '$20.00' }
      // Add more products as needed
    ];
  
    return (
      <div className="product">
        <nav className="navbar">
          <h1>Gebeya</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#cart">My Cart</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </nav>
        <div className="container">
        <img src={exampleImage3} alt="Product" className="product-image2" />
        <div className="product-card2">
        <div className="product-details2">
          <h2>Product Name</h2>
          <p>This is a detailed description of the product. It includes features, benefits, and other important information.</p>
          <p className="product-price">$25.00</p>
          <button  className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      </div>
  
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Product;