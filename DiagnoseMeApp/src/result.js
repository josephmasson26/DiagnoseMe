import React, {useState} from 'react';
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
const [rating, setRating] = useState(0);
setRating(0)

const getStars = (e) => {
    if(e <= 0){
        setRating(5)
    } else if(e <= 2.5){
        setRating(4)
    } else if(e <= 3.2){
        setRating(3)
    } else if(e <= 4.0){
        setRating(2)
    } else if(e <= 4.373){
        setRating(1)
    } else {
        setRating(0)
    }
}

const results = ["I need a big strong dommy mommy"];





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

                <ResetButton />

            </FadeIn>
                

                                
        </div>
    
    );
    
};

ReactDOM.render(<App />, document.getElementById('root'));