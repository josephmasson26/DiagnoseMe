import React from 'react';

const SubmitButton = () => {
    const handleClick = () => {
        window.location.href = '/result.html';
    };

    return (
        <button className="submit-diagnosis-button" onClick={handleClick}>
            Submit Diagnosis
        </button>
    );
};

export default SubmitButton;