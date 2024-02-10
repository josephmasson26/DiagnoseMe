import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Subtitle = () => {
    
    return (
        <FadeIn delay={1300} transitionDuration={2000}>
        <div className="subtitle">
            developed for Hackyltics 2024
        </div>
        </FadeIn>
    );
};

export default Subtitle;