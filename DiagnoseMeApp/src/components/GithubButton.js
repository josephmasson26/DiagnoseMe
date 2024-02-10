// GithubButton.js
import React from 'react';
import FadeIn from 'react-fade-in';

const GithubButton = ({ repoUrl }) => (
    <FadeIn delay={1000} transitionDuration={2000}>
        <div className="github-button-wrapper">
            <a href={repoUrl} className="github-button">
                <img src="./assets/images/github-logo.png" alt="GitHub" />
            </a>
        </div>
        <style jsx>{`
            .github-button-wrapper {
                
                bottom: 20px;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
            }
            .github-button {
                display: inline-block;
                padding: 10px;
                background: linear-gradient(to right, #d2aafc, #7e0955);
                border-radius: 15px;
                text-align: center;
            }
            .github-button img {
                width: 30px; // Adjust as needed
                height: 30px; // Adjust as needed
            }
        `}</style>
    </FadeIn>
);

export default GithubButton;