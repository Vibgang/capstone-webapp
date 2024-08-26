import React, { useState } from 'react';
import '../index.css';

const LoginPage = ({ onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Login submitted:', { email, password });
      // Here you would typically handle the login logic
    };
  
    return (
      <div className="container mt-10">
        <h2 className="title mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="submit-button">
              Sign In
            </button>
            <span className="link-button">
              Don't have an account? 
              <button 
                type="button" 
                onClick={onRegisterClick} className="link-button ml-1">
                Register Now
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  };

export default LoginPage;