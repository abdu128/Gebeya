import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        navigate('/home');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to connect to server');
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
                type="text"
                className="username"
                placeholder="Email/username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            {error && <div className="error">{error}</div>}
          </div>
        </form>
        <div className="group-8">
          <div className="group-5">
            <span className="dont-have-account">Don’t Have account?</span>
          </div>
          <div className="container-2">
            <Link to="/signup" className="sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="rectangle-4"></div>
      </div>
    </div>
  );
}
