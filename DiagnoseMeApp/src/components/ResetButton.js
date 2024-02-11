import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const ResetButton = () => {
    const handleClick = () => {
        window.location.href = './index.html';
    };

    return (
        <button className="reset-button" onClick={handleClick}>
            reset
        </button>
    );
};

export default ResetButton;