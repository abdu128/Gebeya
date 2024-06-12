import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Cart.css';
import Image10 from './assets/images/Image10.jpeg';
import Image7 from './assets/images/Image11.jpeg';
import Image3 from './assets/images/Image17.jpeg';
import Image4 from './assets/images/Image18.jpeg';
import Image8 from './assets/images/Image2.jpeg';
import Image5 from './assets/images/Image5.jpeg';
import Image6 from './assets/images/Image7.jpeg';
import Image9 from './assets/images/Image9.jpeg';



const Chart = () => {
  const initialProducts = [
    { id: 1, name: 'IPhone 14', price: 10.0, image: Image6, quantity: 1 },
    { id: 2, name: 'MacBook 12', price: 15.0, image: Image7, quantity: 1 },
    { id: 3, name: 'Product 3', price: 20.0, image: Image8, quantity: 1 },
    { id: 4, name: 'Tishert', price: 30.0, image: Image9, quantity: 1 },
    { id: 5, name: 'Product 5', price: 40.0, image: Image10, quantity: 1 },
    { id: 6, name: 'Product 6', price: 50.0, image: Image5, quantity: 1 },
    { id: 7, name: 'Champion', price: 60.0, image: Image3, quantity: 1 },
    { id: 8, name: 'Nike', price: 70.0, image: Image4, quantity: 1 },
  ];
  

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartUpdated, setCartUpdated] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
    ));
    setCartUpdated(false); // Reset flag when quantity is changed
  };

  const handleBuyItem = () => {
    setPurchaseSuccess(true); // Set flag to indicate purchase success
    setProducts(initialProducts); // Reset the quantity of shopping cart
  };

  const subtotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);
  const serviceFee = 5.0; // Example service fee
  const shippingFee = 10.0; // Example shipping fee
  const totalValue = subtotal + serviceFee + shippingFee;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If the cart has been updated, recalculate totals
  if (cartUpdated) {
    // Recalculate totals
  }

  return (
    <div className="chart">
      <nav className="navbar">
        <h1>Gebeya</h1>
      
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
        />
          <div className="nav-links">
          <Link to="/" className="home">Home</Link>
          <Link to="/cart" className="my-chart">Cart</Link>
          <Link to="/about" className="about-1">About</Link>
          <Link to="/contact" className="contuct-us">Contact Us</Link>

          
        </div>
      </nav>
      {purchaseSuccess && (
        <div className="alert-success">
          Items purchased successfully!
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>subTotal</th>
          </tr>
        </thead>
        <tbody>
  {filteredProducts.map(product => (
    <tr key={product.id}>
      <td className="product-info">
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
      </td>
      <td>${product.price.toFixed(2)}</td>
      <td>
        <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
        {product.quantity}
        <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
      </td>
      <td>${(product.price * product.quantity).toFixed(2)}</td>
    </tr>
  ))}
</tbody>
</table>
      <table className="total-table">Total
        <tbody>
          <tr>
            <td>Subtotal:</td>
            <td>${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Service Fee:</td>
            <td>${serviceFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping Fee:</td>
            <td>${shippingFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>${totalValue.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="2">
              {purchaseSuccess ? (
                <div className="alert-success">
                  Items purchased successfully!
                </div>
              ) : (
                <button className="buton" onClick={handleBuyItem}>Buy Item</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br /> <br /><br /><br /><br />
      <div className="footer">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Cart</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@gebeya.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Adama,Ethiopia around Bole</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img className="icon" src="assets/vectors/Icon34_x2.svg" alt="Social Icon 1" />
            <img className="icon" src="assets/vectors/Icon21_x2.svg" alt="Social Icon 2" />
            <img className="icon" src="assets/vectors/Icon1_x2.svg" alt="Social Icon 3" />
            <img className="icon" src="assets/vectors/Icon17_x2.svg" alt="Social Icon 4" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Chart;