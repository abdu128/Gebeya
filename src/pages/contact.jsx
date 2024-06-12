import { Link } from 'react-router-dom'; // Import Link
import './product.css';

export default function Product() {
  return (
    <div className="product-detail-page">
      <div className="navigation">
        <div className="gebeya-1">
          <span className="gebeya-2">Gebeya</span>
        </div>
        <div className="frame-798">
          <span className="search-product">Search product</span>
        </div>
        <div className="items">
          <Link to="/" className="home">Home</Link>
          <Link to="/cart" className="my-chart">Cart</Link>
          <Link to="/about" className="about-1">About</Link>
          <Link to="/contact" className="contuct-us">Contact Us</Link>

          
        </div>
      </div>
      <div className="container-1">
        <div className="image-5">
        
        </div>
        <div className='h'>
            <header>
                <h1>Contact Us</h1>
            </header>
            <main>
                <section>
                    <p>Email: support@gebeya.com</p>
                    <p>Phone: +1 123-456-7890</p>
                    <p>Address: Around Bole, Adama, Ethiopia</p>
                </section>
           
            </main>
          
        </div>
      </div>
    
      
      {/* Footer Section */}
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
          <p>Address: Around Bole, Adama, Ethiopia</p>
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
}