import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {

    
  const navItems = [
    { name: 'Legal Summarization', id: 'summarization' },
    { name: 'Statute Prediction', id: 'prediction' },
    { name: 'Recommend Cases', id: 'cases' },
    { name: 'Clause Verification', id: 'verification' },
  ];

  return (
    <div className="home-page">
      <header>
        <nav>
          <div className="nav-logo">Judicial Aid</div>
          <div className="nav-items">
            {navItems.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="nav-item">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="nav-buttons">
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Register</Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">We solve<br />your legal problems</h1>
          <button className="hero-button">Learn More</button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Judicial Aid .. All Right Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;