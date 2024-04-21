import '../App.css'
import React from 'react';
import { useNavigate} from 'react-router-dom';
import QuestionBox from './QuestionBox.jsx';
import { Questions } from '../components/questions/Questions';
import getRandomQuestions from "../apiFunctions/getRandomQuestions";
import { useEffect, useState } from 'react';

function QuestionArea () {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        getRandomQuestions().then((questions) => {
            if (questions.length > 0) {
                setQuestions(questions);
                
            }
        });
    }, []);

    useEffect(() => {
        if (questions.length && currentQuestionIndex >= questions.length - 1 ) {
            setCurrentQuestionIndex(0);
            navigate('/result');
        }

    }, [currentQuestionIndex, questions])

    const correctAnswerIndex = Math.floor(Math.random() * 4);
    const incorrectAnswerIndices = [0, 1, 2, 3].filter(index => index !== correctAnswerIndex);


    return (
        
        <div className='w-full flex flex-col justify-center items-center'>
            {(questions.length > 0 && questions[currentQuestionIndex]) && <Questions questions={questions} currentQuestionIndex={currentQuestionIndex}/>}
            <div className="w-full h-auto border-solid flex flex-col justify-items-center gap-y-7 gap-x-0
            md:grid md:grid-cols-2 sm:w-3/5 ">
                {questions.length > 0 && <QuestionBox questions={questions} currentQuestionIndex={currentQuestionIndex} isCorrect={correctAnswerIndex === 0} incorrectAnswerIndex={incorrectAnswerIndices[0]} nextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex+1)}/>}
            </div>
        </div>
    )
}

export default QuestionArea;