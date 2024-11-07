import React, { useState } from 'react';
import '../index.css';
import '../modules.css';

const StatutePredictionPage = () => {
  const [textInput, setTextInput] = useState('');
  const [sections, setSections] = useState([]); // Store all sections
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // Track the current section
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleProcess = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('/statute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Sending form data
        },
        body: new URLSearchParams({ inputData: textInput }), // Send textInput as form data
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log response data

        // Assuming the response contains a `predictedSections` field
        if (data && data.predictedSections) {
          setSections(data.predictedSections); // Set all sections
          setCurrentSectionIndex(0); // Reset to the first section
        } else {
          setSections([{ section: 'Error', text: 'No sections predicted.' }]);
        }
      } else {
        setSections([{ section: 'Error', text: 'Unable to fetch predicted statutes.' }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setSections([{ section: 'Error', text: 'Unable to fetch predicted statutes.' }]);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleNext = () => {
    setCurrentSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1));
  };

  const handlePrevious = () => {
    setCurrentSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="title">Statute Prediction</h1>
        <div className="instructions">
          <p>Enter or paste your document text to predict relevant statutes.</p>
        </div>
        <textarea
          value={textInput}
          onChange={handleTextChange}
          placeholder="Enter document text here..."
          className="text-input"
        />
        <button
          onClick={handleProcess}
          className="process-button"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? 'Processing...' : 'Predict Statutes'}
        </button>
        {sections.length > 0 && (
          <div className="output-container">
            <h3 className="output-title">{sections[currentSectionIndex].section}</h3>
            <p className="output-text">{sections[currentSectionIndex].text}</p>

            {/* Pagination Buttons */}
            <div className="pagination-buttons">
              <button
                onClick={handlePrevious}
                className="nav-button"
                disabled={currentSectionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="nav-button"
                disabled={currentSectionIndex === sections.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatutePredictionPage;
