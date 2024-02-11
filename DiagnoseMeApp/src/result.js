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
// import data from './disease_distances.json' assert { type: 'json' }


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
                            <h1>Guess:{guess}</h1>
                            <h1>Disease:{disease}</h1>
                            <h1>Distance:{distance}</h1>
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

                <ResetButton />

            </FadeIn>
                

                                
        </div>
    
    );
    
};

ReactDOM.render(<App />, document.getElementById('root'));