import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';
import Subtitle from './components/Subtitle';
import Header from './components/Header';
import GithubButton from './components/GithubButton';
import Dropdown from './chatbot/Dropdown';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'


import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

const App = () => {

    const options = ["Migraine", "Vomiting", "Bruise", "Stroke", "Sweating", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"];

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
                    <p>type in your diagnosis</p>
                    <Dropdown options={options} />
                </div>
            </div>

          </div>

        <div class='container'>
            <Header />
            <Subtitle />
            <GithubButton class="github-button" repoUrl="https://github.com/josephmasson26/diagnoseme" />

        </div>
        </FadeIn>
        
      );
    }   
    

ReactDOM.render(<App />,  document.getElementById('root'));