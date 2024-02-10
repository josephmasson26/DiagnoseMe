import React from 'react';
import FadeIn from 'react-fade-in';

function ResultHeader() {
    return (
        <FadeIn delay={500} transitionDuration={2000} className='result-header'>
            <h1>Results</h1>
        </FadeIn>
    );
}

export default ResultHeader;