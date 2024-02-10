import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ButtonGooey from './components/ButtonGooey';
import GithubButton from './components/GithubButton';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ButtonGooey />
            <GithubButton repoUrl="https://github.com/josephmasson26/diagnoseme" />
        </div>
    
    );
    //return <h1>Hello, Electron!</h1>;
    
};

ReactDOM.render(<App />, document.getElementById('root'));