<<<<<<< HEAD
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase'; // Import the auth instance from your firebase.js
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      // You can redirect or set some authentication state here
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login">
      <div className="container-1">
        <form onSubmit={handleSubmit}>
          <div className="group-10">
            <div className="login-1">Login</div>
            <div className="connecting-with-you-every-step-of-the-way">
              Connecting with You, Every Step of the Way!
            </div>
            <div className="group-1">
              <div className="frame-1">
                <img className="vector-1" src="assets/vectors/Vector8_x2.svg" alt="username" />
              </div>
              <input
                type="email"
                className="username"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="group-2">
              <div className="frame">
                <img className="vector" src="assets/vectors/Vector18_x2.svg" alt="password" />
              </div>
              <input
                type="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-2">Login</button>
            <div className="group-4">
              <p className="login-with-others">
                <span className="login-with-others-sub-3"></span><span></span>
              </p>
              <img className="subtract" src="assets/vectors/Subtract_x2.svg" alt="subtract" />
            </div>
            <div className="group-9">
              <div className="google-1"></div>
              <p className="continue-with-google">
                <span className="continue-with-google-sub-0"></span><span></span>
              </p>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="group-8">
          <div className="group-5">
            <span className="dont-have-account">Don’t Have account?</span>
          </div>
          <div className="container-2">
            <span className="sign-up">Sign Up</span>
=======
import './login.css'

export default function Login() {
  return (
    <div className="login">
      <div className="container-1">
        <div className="group-10">
          <div className="login-1">
            Login
          </div>
          <div className="connecting-with-you-every-step-of-the-way">
            Connecting with You, Every Step of the Way!
          </div>
          <div className="group-1">
            <div className="frame-1">
              <img className="vector-1" src="assets/vectors/Vector8_x2.svg" />
            </div>
            <div className="username">
              Username
            </div>
          </div>
          <div className="group-2">
            <div className="frame">
              <img className="vector" src="assets/vectors/Vector18_x2.svg" />
            </div>
            <div className="password">
              Password
            </div>
          </div>
          <div className="login-2">
            Login
          </div>
          <div className="group-4">
            <p className="login-with-others">
              <span className="login-with-others-sub-3"></span><span></span>
            </p>
            <img className="subtract" src="assets/vectors/Subtract_x2.svg" />
          </div>
          <div className="group-9">
            <div className="google-1">
            </div>
            <p className="continue-with-google">
              <span className="continue-with-google-sub-0"></span><span></span>
            </p>
          </div>
        </div>
        <div className="group-8">
          <div className="group-5">
            <span className="dont-have-account">
              Don’t Have account?
            </span>
          </div>
          <div className="container-2">
            <span className="sign-up">
              Sign Up
            </span>
>>>>>>> 8f2ea82fc942abca356d1106cf0b244eb16cacdb
          </div>
        </div>
      </div>
      <div className="container">
<<<<<<< HEAD
        <div className="rectangle-4"></div>
      </div>
    </div>
  );
}
=======
        <div className="rectangle-4">
        </div>
      </div>
    </div>
  )
}
>>>>>>> 8f2ea82fc942abca356d1106cf0b244eb16cacdb
