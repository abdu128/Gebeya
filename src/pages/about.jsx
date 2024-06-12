import { Link } from 'react-router-dom'; // Import Link
import './about.css';

export default function About() {
  return (
    <div className="about">
      <div className="navigation">
        <div className="gebeya-1">
          <span className="gebeya-2">
          Gebeya
          </span>
        </div>
        <div className="items">
          <div className="home">
          <Link to="/" className="home">Home</Link>

          </div>
          <div className="about-3">
          <Link to="/Cart" className="home">Cart</Link>

          </div>
          <div className="contuct-us">
          <Link to="/contact" className="home">Contact us</Link>

          </div>
        </div>
      </div>
      <div className="about-container">
                <h1>About Gebeya</h1>
                <p>
                    Welcome to Gebeya, your premier e-commerce destination designed with a seamless and user-friendly experience in mind.
                    Developed using React, Gebeya ensures fast, efficient, and highly interactive shopping experiences for our users.
                </p>
                <ul>
                    <li>
                    <strong>Product listings</strong>  display detailed descriptions, images, prices, and sometimes reviews to help customers make informed purchasing decisions.
                    </li>
                    <li>
                    <strong>Search functionality</strong> allows users to quickly find products by keywords, categories, or filters, enhancing navigation efficiency.
                    </li>
                    <li>
                    <strong>The shopping car</strong> feature enables users to accumulate items for purchase, providing flexibility and convenience during the shopping process.
                    </li>
                    <li>
                        <strong>Wide Product Selection:</strong> From electronics to fashion, home goods to beauty products, Gebeya offers a diverse range of
                        products to cater to all your shopping needs.
                    </li>
                    
                    <li>
                        <strong>Fast Performance:</strong> Leveraging the power of React, Gebeya delivers quick loading times and a smooth user experience,
                        making your shopping journey efficient and enjoyable.
                    </li>
                </ul>
                <p>
                    Thank you for choosing Gebeya. We're dedicated to providing you with the best online shopping experience, powered by cutting-edge technology
                    and a commitment to customer satisfaction. Happy shopping!
                </p>
            </div> <br /> <br /> <br /> <br />
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
  )
}