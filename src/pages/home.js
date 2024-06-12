import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch authentication status from the backend
    fetch('http://localhost/auth_status.php', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        setIsAuthenticated(data.loggedin);
      })
      .catch(error => {
        console.error('Error fetching authentication status:', error);
      });

    // Fetch product data from the backend
    fetch('http://localhost/fetch_products.php', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleLogout = () => {
    fetch('http://localhost/logout.php', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      setIsAuthenticated(false);
    });
  };

  const handleAddToCart = (productId) => {
    fetch('http://localhost/add_to_cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ product_id: productId }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Item added successfully.');
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  const getImagePath = (image) => {
    return `assets/images/${image}`;
  };

  return (
    <div className="shop">
      <div className="navigation">
        <div className="gebeya-1">Gebeya</div>
        <input 
          type="text" 
          placeholder="Search products..."
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
        />
        <div className="container-2">
          
        
          <div className="items">
            <div className="home">
              <Link to="/">Home</Link>
            </div>
            <div className="home">
              <Link to="/cart">Cart</Link>
            </div>
            <div className="home">
              <Link to="/about">About</Link>
            </div>
            <div className="contact-us">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="button">
              <span className="login-signup">
                {isAuthenticated ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="http://localhost/login.php">Login/Signup</Link>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-with-image">
        <span className="gebeya">Gebeya</span>
        <div className="copy-8">
          <span className="your-one-stop-shop-for-seamless-shopping">
            Your One-Stop Shop for Seamless Shopping!
          </span>
        </div>
      </div>
      <div className="heading-1">Featured Products</div>
      <div className="card-grid">
        {products.map(product => (
          <div key={product.product_id} className="card">
            <img
              src={getImagePath(product.image)}
              alt={product.product_name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.product_name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product.product_id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">My Cart</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@gebeya.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Adama, Ethiopia around Bole</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="#">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a>
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
}
