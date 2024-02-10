import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';
import Subtitle from './components/Subtitle';
import GithubButton from './components/GithubButton';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

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
                    <Chatbot className="chatbot" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
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