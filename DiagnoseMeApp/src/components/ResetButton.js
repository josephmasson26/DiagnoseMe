import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const ResetButton = () => {
    const handleClick = () => {
        window.location.href = './index.html';
    };

    return (
    <FadeIn delay={1500} transitionDuration={2000}>
        <button className="reset-button" onClick={handleClick}>
            Reset
        </button>
    </FadeIn>
    );
};

export default ResetButton;