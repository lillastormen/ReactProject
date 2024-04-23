import '../App.css'
import React from 'react';
import QuestionArea from '../components/QuestionArea.jsx';
import CountdownBar from '../components/CountdownBar.jsx';


function Quiz () {


    return (
        
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <CountdownBar />
                <QuestionArea />

            </div>
            
        
    )
}

export default Quiz;