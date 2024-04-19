import '../App.css'
import React from 'react';
import QuestionBox from './QuestionBox.jsx';

function QuestionArea () {


    return (
        <div className='w-full flex justify-center'>
            <div className="w-full h-auto border-solid flex flex-col justify-items-center gap-y-7 gap-x-0
            md:grid md:grid-cols-2 sm:w-3/5 ">
                <QuestionBox Answer={'Svar 1'}/>
                <QuestionBox Answer={'Svar 2'}/>
                <QuestionBox Answer={'Svar 3'}/>
                <QuestionBox Answer={'Svar 4'}/>
            </div>
        </div>
    )
}

export default QuestionArea;