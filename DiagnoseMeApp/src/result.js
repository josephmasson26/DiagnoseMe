import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GithubButton from './components/GithubButton';
import Subtitle from './components/Subtitle';

const App = () => {
    return (
        <div className="App">
            <div class='container'>
            <Header />
            <Subtitle />
            <GithubButton class="github-button" repoUrl="https://github.com/josephmasson26/diagnoseme" />

            </div>
  
        </div>
    
    );
    
};

ReactDOM.render(<App />, document.getElementById('root'));