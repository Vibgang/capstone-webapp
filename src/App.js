import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LegalSummarizationPage from './components/LegalSummarizationPage';
import StatutePredictionPage from './components/StatutePredictionPage';
import RecommendCasesPage from './components/RecommendCasesPage';
import ClauseVerificationPage from './components/ClauseVerificationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/summarization" element={<LegalSummarizationPage />} />
        <Route path="/prediction" element={<StatutePredictionPage />} />
        <Route path="/cases" element={<RecommendCasesPage />} />
        <Route path="/verification" element={<ClauseVerificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
