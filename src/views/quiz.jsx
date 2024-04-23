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

    const resetQuestionAfterTime = () => {
        
    }

    return (
        
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <CountdownBar key={countdownKey} />
                <div className='text-sm font-mono'>Yrgos fantastic React-made Quiz!</div>
                <QuestionArea resetTimerBar={resetTimerBar} />

            </div>
            
        
    )
}

export default Quiz;