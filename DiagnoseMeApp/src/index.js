import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ButtonGooey from './components/ButtonGooey';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ButtonGooey />
        </div>
    
    );
    //return <h1>Hello, Electron!</h1>;
    
};

ReactDOM.render(<App />, document.getElementById('root'));