import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const SubmitButton = () => {
    const handleClick = () => {
        window.location.href = 'result.html'
    };

    return (
    <FadeIn delay={1500} transitionDuration={2000}>
        <button className="submit-diagnosis-button" onClick={handleClick}>
            Submit Diagnosis
        </button>
    </FadeIn>
    );
};

export default SubmitButton;