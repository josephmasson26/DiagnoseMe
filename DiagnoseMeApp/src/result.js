import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GithubButton from './components/GithubButton';
import Subtitle from './components/Subtitle';
import ResultHeader from './components/ResultHeader';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ResetButton from './components/ResetButton';

// Change this to get a new rating
const rating = 3;

const results = ["Dummy Results"];


const App = () => {
    return (
        <div className="App">
            <FadeIn delay={300} transitionDuration={2000}>
                <div className="grid">
                    <div className="box main-box">
                        <div class="box-content">
                        <ResultHeader />
                        <FadeIn delay={500} transitionDuration={2000}>
                            <ReactStars count={5} value={rating} size={50} color2={"#ca35db"} edit={false}/>
                        </FadeIn> 
                        </div>
                    </div>  
                    
                    <div className="box side-box">
                        <div class="box-content">
                        <FadeIn delay={1000} transitionDuration={2000}>
                            <h1>results</h1>
                        </FadeIn>
                        </div>
                    </div>

                    <div className="box side-box">
                        <div class="box-content">
                        <div class='container'>
                            <Header />
                            <Subtitle />
                            <GithubButton class="github-button" repoUrl="https://github.com/josephmasson26/diagnoseme" />

                        </div>
                        </div>
                    </div>
                
                </div>


                <FadeIn delay={1000} transitionDuration={4000}>
                    <ResetButton />
                </FadeIn>


            </FadeIn>
                

                                
        </div>
    
    );
    
};

ReactDOM.render(<App />, document.getElementById('root'));