import React, { useState } from 'react';
import '../index.css';
import '../modules.css';

const RecommendCasesPage = () => {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProcess = () => {
    // Simulate processing the file
    setTimeout(() => {
      setOutput('Recommended similar past cases relevant to the document.');
    }, 2000);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="title">Recommend Similar Cases</h1>
        <div className="instructions">
          <p>Upload your document to find similar past cases.</p>
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
          Recommend Cases
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

export default RecommendCasesPage;
