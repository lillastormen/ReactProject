import '../App.css'
import React from 'react';
import QuestionBox from './QuestionBox.jsx';
import { Questions } from '../components/questions/Questions';
import getRandomQuestions from "../apiFunctions/getRandomQuestions";
import { useEffect, useState } from 'react';

function QuestionArea () {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        getRandomQuestions().then((questions) => {
            if (questions.length > 0) {
                setQuestions(questions);
                
            }
        });
    }, []);

    const correctAnswerIndex = Math.floor(Math.random() * 4);
    const incorrectAnswerIndices = [0, 1, 2, 3].filter(index => index !== correctAnswerIndex);


    return (
        
        <div className='w-full flex flex-col justify-center items-center'>
            {questions.length > 0 && <Questions questions={questions} currentQuestionIndex={currentQuestionIndex}/>}
            <div className="w-full h-auto border-solid flex flex-col justify-items-center gap-y-7 gap-x-0
            md:grid md:grid-cols-2 sm:w-3/5 ">
                {questions.length > 0 && <QuestionBox questions={questions} currentQuestionIndex={currentQuestionIndex} isCorrect={correctAnswerIndex === 0} incorrectAnswerIndex={incorrectAnswerIndices[0]}/>}
            </div>
        </div>
    )
}

export default QuestionArea;