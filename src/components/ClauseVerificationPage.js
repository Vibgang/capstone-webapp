import '../modules.css';
import React, { useState } from 'react';
import '../index.css';

const ClauseVerificationPage = () => {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProcess = () => {
    // Simulate processing the file
    setTimeout(() => {
      setOutput('Contract clauses have been analyzed for potential issues');
    }, 2000);
  };

  return (
    <div className="page-container legal-summarization">
      <div className="content-container">
        <h1 className="title">Clause Verification</h1>
        <div className="instructions">
          <p>Upload your document to verify contract clauses.</p>
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
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
