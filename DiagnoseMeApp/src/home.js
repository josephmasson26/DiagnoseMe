import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';

const App = () => {
    return (
        <FadeIn delay={500} transitionDuration={2000}>
          <div className="grid">
            <div className="box side-box">1</div>
            <div className="box main-box">2</div>
            <div className="box side-box">3</div>
            <div className="box side-box">4</div>
            <div className="box main-box">5</div>
            <div className="box side-box">6</div>
          </div>
        </FadeIn>
      );
    }   
    

ReactDOM.render(<App />,  document.getElementById('root'));