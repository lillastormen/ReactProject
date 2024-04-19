import '../App.css'
import React from 'react';
import QuestionArea from '../components/QuestionArea.jsx';
import CountdownBar from '../components/CountdownBar.jsx';

function Quiz () {


    return (
        <>
        <CountdownBar />
            <div className='w-full h-full flex justify-center items-center'>
                <div className='text-sm font-mono'>QuizText</div>
            </div>
            <QuestionArea />
        </>
    )
}

export default Quiz;