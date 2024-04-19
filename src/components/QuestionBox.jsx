import '../App.css'
import React from 'react';

function QuestionBox ({ questions, currentQuestionIndex, nextQuestion }) {
    const question = questions[currentQuestionIndex];

    // Extract correct and incorrect answers
    const correctAnswer = question.correctAnswer;
    const incorrectAnswers = question.incorrectAnswers;

    // Shuffle incorrect answers
    const shuffledIncorrectAnswers = [...incorrectAnswers].sort(() => Math.random() - 0.5);

    // Select the correct and three incorrect answers
    const answers = [correctAnswer, shuffledIncorrectAnswers[0], shuffledIncorrectAnswers[1], shuffledIncorrectAnswers[2]];

    // Fisher-Yates shuffle algorithm for answers
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }


    const checkAnswer = (answer, correctAnswer) => {
        if (answer == correctAnswer) {
            const currentResult = sessionStorage.getItem('result');
            const newResult = (currentResult) ? parseInt(currentResult) + 1 : 1;
            sessionStorage.setItem('result', newResult);    
        }
        nextQuestion();
    }
    return (
        <>
        {answers.map((answer, index) => (
        <div className="w-full h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500
        hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
         sm:w-3/5" onClick={() => checkAnswer(answer, correctAnswer)}>
            <div className='text-xl font-mono flex justify-center items-center' >
            
                    <p key={index}>
                        {answer}
                    </p>
                
            </div>
        </div>
        ))}
        </>
    )
}

export default QuestionBox;
