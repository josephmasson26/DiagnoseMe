import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ButtonGooey from './components/ButtonGooey';
import GithubButton from './components/GithubButton';
import Subtitle from './components/Subtitle';
import FadeIn from 'react-fade-in/lib/FadeIn';

const App = () => {
    return (
        <div className="App">
            <FadeIn delay={500} transitionDuration={2000}>
                <Header />
            </FadeIn>

            <FadeIn delay={700} transitionDuration={2000}>
                <ButtonGooey />
            </FadeIn>    

            <FadeIn delay={1300} transitionDuration={3000}>
                <Subtitle />
            </FadeIn>
            
            <FadeIn delay={1500} transitionDuration={3000}>
                <GithubButton repoUrl="https://github.com/josephmasson26/diagnoseme" />
            </FadeIn>
            
           
        </div>
    
    );
    //return <h1>Hello, Electron!</h1>;
    
};

ReactDOM.render(<App />, document.getElementById('root'));