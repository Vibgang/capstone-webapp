import React, { useState } from 'react';
import '../index.css';
import '../modules.css';

const RecommendCasesPage = () => {
  const [textInput, setTextInput] = useState('');
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // New state for page index

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleProcess = async () => {
    setLoading(true);
    try {
      const response = await fetch('/precedent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ inputData: textInput }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setOutput(Object.values(data)); // Store all values in an array
        setPage(0); // Reset page to 0 when new data is fetched
      } else {
        setOutput('Error: Unable to fetch recommended cases.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error: Unable to fetch recommended cases.');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (output && page < output.length - 1) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (output && page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="title">Recommend Similar Cases</h1>
        <div className="instructions">
          <p>Enter or paste your document text to find similar past cases.</p>
        </div>
        <textarea
          value={textInput}
          onChange={handleTextChange}
          placeholder="Enter document text here..."
          id="inputData"
          className="text-input"
        />
        <button
          onClick={handleProcess}
          className="process-button"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Recommend Cases'}
        </button>
        
        {output && (
          <div className="output-container">
            <h2 className="output-title">Search Results:</h2>
            <div className="response-box">
              {output[page]} {/* Displaying the result as a div */}
            </div>
            <div className="pagination-buttons">
              <button onClick={handlePrevious} className="pagination-button" disabled={page === 0}>
                Previous
              </button>
              <button onClick={handleNext} className="pagination-button" disabled={page === output.length - 1}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendCasesPage;
