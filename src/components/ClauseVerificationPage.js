import '../modules.css';
import React, { useState } from 'react';
import '../index.css';

const ClauseVerificationPage = () => {
  const [textInput, setTextInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleProcess = () => {
    // Simulate processing the input text
    setTimeout(() => {
      setOutput('Contract clauses have been analyzed for potential issues');
    }, 2000);
  };

  return (
    <div className="page-container legal-summarization">
      <div className="content-container">
        <h1 className="title">Clause Verification</h1>
        <div className="instructions">
          <p>Enter the contract text to verify clauses.</p>
        </div>
        <textarea
          value={textInput}
          onChange={handleTextChange}
          placeholder="Paste your contract text here"
          className="text-input"
        />
        <button
          onClick={handleProcess}
          className="process-button"
        >
          Verify Clauses
        </button>
        {output && (
          <div className="output-container">
            <h2 className="output-title">Output:</h2>
            <p className="output-text">{output}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClauseVerificationPage;
