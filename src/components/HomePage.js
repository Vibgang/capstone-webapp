import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">We solve<br />your legal problems</h1>
          <button className="hero-button">Learn More</button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Judicial Aid .. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
