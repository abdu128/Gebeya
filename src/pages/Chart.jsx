import React, { useState } from 'react';
import './Chart.css';



const Chart = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 10.0, image: 'product 1.jpg', quantity: 1 },
    { id: 2, name: 'Product 2', price: 15.0, image: 'product 2.jpg', quantity: 1 },
    { id: 3, name: 'Product 3', price: 20.0, image: 'product 3.jpg', quantity: 1 },
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
          <a href="#home">Home</a>
          <a href="#cart">My Cart</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
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
            <th>Total</th>
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
    </div>
  );
};

export default Chart;
