import '../App.css'
import React from 'react';
import { useState, useEffect } from 'react';

function QuestionBox ({ questions, currentQuestionIndex, nextQuestion }) {
    const [counter, setCounter] = useState(0);
    const question = questions[currentQuestionIndex];

    const [clicked, setClicked] = useState(false);

    // Ger correct and incorrect answers
    const correctAnswer = question.correctAnswer;
    const incorrectAnswers = question.incorrectAnswers;

    // Select the correct and three incorrect answers
    const [answers, setAnswers] = useState([correctAnswer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]]);

    // Fisher-Yates shuffle algorithm for answers
    useEffect(() => {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        const incorrectAnswers = questions[currentQuestionIndex].incorrectAnswers;
        let newAnswers = [correctAnswer, ...incorrectAnswers];
    
        // Fisher-Yates shuffle algorithm
        for (let i = newAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newAnswers[i], newAnswers[j]] = [newAnswers[j], newAnswers[i]];
        }
    
        setAnswers(newAnswers);
    }, [currentQuestionIndex, questions]);

    // Check if answer is correct answer and show correct answer + delay 3s
    const checkAnswer = (answer, correctAnswer) => {
        setClicked(true);
        if (answer == correctAnswer) {
            const currentResult = sessionStorage.getItem('result');
            const newResult = (currentResult) ? parseInt(currentResult) + 1 : 1;
            sessionStorage.setItem('result', newResult);
            console.log(currentResult);
            setCounter(counter => counter + 1);
        }
        
        setTimeout(() => {
            nextQuestion();
            setClicked(false);
        }, 3000);
    }
    return (
        <>
        {answers.map((answer, index) => (
        <div key={index}
        className={`w-9/10 h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500
        hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
        sm:w-3/5 
        ${clicked && answer === correctAnswer ? 'border-green-500 border-8' : ''}
        ${clicked && answer !== correctAnswer ? 'border-red-500 border-8' : ''}`}
        onClick={() => checkAnswer(answer, correctAnswer)}>

            <div className='text-xl font-mono flex justify-center items-center' >
                <p >
                    {answer}
                </p>
            </div>
        </div>
        ))}
        <div className='font-mono text-xl'>
            Correct answers:{counter}
        </div>
        </>
    )
}

export default QuestionBox;
