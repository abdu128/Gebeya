import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('http://localhost/signup.php', {
        method: 'POST',
        body: formData,
      });
      const result = await response.text();
      setMessage(result);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="login">
      <div className="container-3">
        <span className="sign-up">
          SignUp
        </span>
        <div className="connecting-with-you-every-step-of-the-way">
          Connecting with You, Every Step of the Way!
        </div>
        <form onSubmit={handleSubmit}>
          <div className="group-1">
            <div className="frame-1">
              <img className="vector-1" src="assets/vectors/Vector5_x2.svg" alt="icon"/>
            </div>
            <input
              type="text"
              className="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="group-1">
            <div className="frame-2">
              <img className="vector-2" src="assets/vectors/Vector14_x2.svg" alt="icon"/>
            </div>
            <input
              type="email"
              className="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="group-2">
            <div className="frame">
              <img className="vector" src="assets/vectors/Vector24_x2.svg" alt="icon"/>
            </div>
            <input
              type="password"
              className="username"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="group-2">
            <div className="frame-3">
              <img className="vector-3" src="assets/vectors/Vector_x2.svg" alt="icon"/>
            </div>
            <input
              type="password"
              className="username"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="group-3">
            <button type="submit" className="login-2">SignUp</button>
          </div>
        </form>
        {message && <div className="message">{message}</div>}
        <div className="group-9">
          <div className="google-1"></div>
          <p className="continue-with-google">
            <span className="continue-with-google-sub-0"></span><span></span>
          </p>
        </div>
        <div className="group-11">
          <div className="group-5">
            <span className="have-account">Have account?</span>
          </div>
          <div className="container-2">
            <Link to="/login" className="sign-up">Log In</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="rectangle-4"></div>
      </div>
    </div>
  );
}
