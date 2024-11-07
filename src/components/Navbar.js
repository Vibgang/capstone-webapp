// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const navItems = [
    { name: 'Legal Summarization', id: 'summarization' },
    { name: 'Statute Prediction', id: 'prediction' },
    { name: 'Recommend Cases', id: 'cases' },
    { name: 'Clause Verification', id: 'verification' },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="nav-items">
          {navItems.map((item) => (
            <Link key={item.id} to={`/${item.id}`} className="nav-item">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
