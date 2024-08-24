import React, { useState } from 'react';
import '../index.css';
import '../modules.css';

const LegalSummarizationPage = () => {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProcess = () => {
    // Simulate processing the file
    setTimeout(() => {
      setOutput('This is a summary of the legal document.');
    }, 2000);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="title">Legal Text Summarization</h1>
        <div className="instructions">
          <p>Please upload your legal document to get a summarized output.</p>
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
          Process Document
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

export default LegalSummarizationPage;
