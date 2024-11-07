import React, { useState } from 'react';
import '../index.css';
import '../modules.css';

const LegalSummarizationPage = () => {
  const [textInput, setTextInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleProcess = () => {
    fetch('/summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputData: textInput }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const formattedOutput = data.summary
        ? data.summary
            .replace(/\*(.*?)\*/g, '<strong>$1</strong>') // Bold text
            .replace(/\*/g, '') // Remove any remaining stars
            .replace(/\n/g, '<br/>') // Preserve line breaks
        : 'Failed to process document';
      setOutput(formattedOutput);
    })
    .catch(error => {
      console.error('Error:', error);
      setOutput('Failed to process document');
    });
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="title">Legal Text Summarization</h1>
        <div className="instructions">
          <p>Please enter or paste your legal document text to get a summarized output.</p>
        </div>
        <textarea
          value={textInput}
          onChange={handleTextChange}
          placeholder="Enter legal document text here..."
          id="inputData"
          className="text-input"
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
            <p className="output-text" dangerouslySetInnerHTML={{ __html: output }}></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalSummarizationPage;
