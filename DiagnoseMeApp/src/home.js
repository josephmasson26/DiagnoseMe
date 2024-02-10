import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';
import Subtitle from './components/Subtitle';
import GithubButton from './components/GithubButton';

const App = () => {
    return (
        <FadeIn delay={300} transitionDuration={2000}>
          <div className="grid">
            <div className="box side-box">
                <div class="box-content">
                    1
                </div>    
            </div>
            <div className="box main-box">
                <div class="box-content">
                    2
                </div>    
            </div>
            <div className="box side-box">
                <div class="box-content">
                    3
                </div>
            </div>
            <div className="box side-box">
                <div class="box-content">
                    4
                </div>
            </div>
            <div className="box side-box">
                <div class="box-content">
                    5
                </div>
            </div>
            

          </div>

        <div class='container'>
            <Subtitle />
            <GithubButton repoUrl="https://github.com/josephmasson26/diagnoseme" />

        </div>
        </FadeIn>
        
      );
    }   
    

ReactDOM.render(<App />,  document.getElementById('root'));