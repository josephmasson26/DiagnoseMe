import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GithubButton from './components/GithubButton';
import Subtitle from './components/Subtitle';
import ResultHeader from './components/ResultHeader';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ResetButton from './components/ResetButton';
import Credits from './components/credits';


// Change this to get a new rating

const App = () => {

    const [rating, setRating] = useState(0);
    const [distance, setDistance] = useState("");
    const [guess, setGuess] = useState("");
    const [disease, setDisease] = useState("");

    useEffect(() => {
        fetch('http://127.0.0.1:5000/disease')
        .then(response => response.json())
        .then(data => {
            setDistance(data.distance);
            setRating(data.rating);
            setGuess(data.guess);
            setDisease(data.disease);
        });
    }, []);

    // const results = ["I need a big strong dommy mommy"];

    return (
        <div className="App">
            
                <div className="grid">
                    
                    <div className="box main-box">
                    <FadeIn delay={300} transitionDuration={2000}>
                        <div class="box-content">
                        <ResultHeader />
                        <FadeIn delay={500} transitionDuration={2000}>
                            <ReactStars count={5} value={rating} size={50} color2={"#ca35db"} edit={false}/>
                        </FadeIn> 
                        </div>
                        </FadeIn>
                    </div> 
                     
                    
                    <div className="box side-box">
                        <FadeIn delay={600} transitionDuration={2000}>
                        <div class="box-content">
                        <FadeIn delay={1000} transitionDuration={2000}>
                        <h2>Guess: {guess}</h2>
                            <h2>Disease: {disease}</h2>
                            <h2>Distance: {typeof distance === 'number' ? distance.toFixed(2) : distance}</h2>                        
                            </FadeIn>
                        </div>
                        </FadeIn>
                    </div>

                    <div className="box side-box">
                        <FadeIn delay={1200} transitionDuration={2000}>
                        <div class="box-content">
                        <div class='container'>
                            <Header />
                            <Subtitle />
                            <GithubButton class="github-button" repoUrl="https://github.com/josephmasson26/diagnoseme" />
                            
                            <Credits className='credits'/>
                            
                        </div>
                        </div>
                        </FadeIn>
                    </div>
                
                </div>


                <FadeIn delay={1500} transitionDuration={4000}>
                    <ResetButton />
                </FadeIn>


            
                

                                
        </div>
    
    );
    
};

ReactDOM.render(<App />, document.getElementById('root'));