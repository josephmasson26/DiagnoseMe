import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';
import Subtitle from './components/Subtitle';
import Header from './components/Header';
import GithubButton from './components/GithubButton';
import Dropdown from './chatbot/Dropdown';
import SubmitButton from './components/SubmitButton';


import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'


import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import ResetButton from './components/ResetButton';

const App = () => {

    //Insert options for the dropdown HERE
    const options = ['(vertigo) Paroymsal  Positional Vertigo', 'AIDS', 'Acne', 'Alcoholic hepatitis', 'Allergy', 'Arthritis', 'Bronchial Asthma', 'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis', 'Common Cold', 'Dengue', 'Diabetes ', 'Dimorphic hemmorhoids(piles)', 'Drug Reaction', 'Fungal infection', 'GERD', 'Gastroenteritis', 'Heart attack', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Hypertension ', 'Hyperthyroidism', 'Hypoglycemia', 'Hypothyroidism', 'Impetigo', 'Jaundice', 'Malaria', 'Migraine', 'Osteoarthristis', 'Paralysis (brain hemorrhage)', 'Peptic ulcer diseae', 'Pneumonia', 'Psoriasis', 'Tuberculosis', 'Typhoid', 'Urinary tract infection', 'Varicose veins', 'hepatitis A'];

    return (
    <div className="App">
        <FadeIn delay={300} transitionDuration={2000}>
          <div className="grid">
            <div className="box side-box">
                <div class="box-content">
                <div class='container'>
            <Header />
            <Subtitle />
            <GithubButton class="github-button" repoUrl="https://github.com/josephmasson26/diagnoseme" />
            <ResetButton />
            </div>
        </div>    
            </div>
            <div className="box main-box">
                <div class="box-content">
                    <Chatbot className="chatbot" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div>    
            </div>

            <div className="box side-box">
                <div class="box-content">
                    <p>click and type in your guess! </p>
                    <Dropdown options={options} />
                </div>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={1000} transitionDuration={4000}>
            <SubmitButton />
        </FadeIn>

    </div>
        
      );
    }   
    

ReactDOM.render(<App />,  document.getElementById('root'));