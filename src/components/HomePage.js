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

  const contentSections = [
    {
      title: 'Legal Text Summarization & Visual Representation',
      description: 'Upload legal documents and get automated summaries with visual representations.',
    },
    {
      title: 'Statute Prediction and Verification',
      description: 'Predict relevant statutes and verify their validity.',
    },
    {
      title: 'Recommend Similar Past Cases',
      description: 'Find similar past cases relevant to your current case.',
    },
    {
      title: 'Contract Clause Verification',
      description: 'Analyze contract clauses for potential issues or ambiguities.',
    },
  ];

  return (
    <div className="home-page">
      <header>
        <nav>
          <div className="nav-buttons">
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Register</Link>
          </div>
          <div className="nav-items">
            {navItems.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="nav-item">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="main-content">
        {contentSections.map((section, index) => (
          <div key={index} className="content-box">
            <h2 className="title">{section.title}</h2>
            <p className="text">{section.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
