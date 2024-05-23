import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './pages/product'; // Correct capitalization
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <Home/> */}
    <Signup/>
    {/* <Login/> */}
    

  </React.StrictMode>
=======
    <Product />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 8f2ea82fc942abca356d1106cf0b244eb16cacdb
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
