import '../App.css'
import React from 'react';
import QuestionArea from '../components/QuestionArea.jsx';
import CountdownBar from '../components/CountdownBar.jsx';
import { useState, useEffect } from 'react';


function Quiz () {
    const [countdownKey, setCountdownKey] = useState(0);

    // This function should be called whenever a new question is fetched
    const resetTimerBar = () => {
        setCountdownKey(prevKey => prevKey + 1);
    };

    return (
        
            <div className='w-screen h-screen flex flex-col justify-around items-center'>
                <CountdownBar key={countdownKey} />
                
                <QuestionArea resetTimerBar={resetTimerBar} />

            </div>
            
        
    )
}

export default Quiz;