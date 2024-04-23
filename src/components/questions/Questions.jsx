import { useEffect, useState } from "react";
import getRandomQuestions from "../../apiFunctions/getRandomQuestions";
import React from "react";

export function Questions({questions, currentQuestionIndex}) {

    return (
        <div className='w-4/5 font-mono text-3xl mt-8 mb-8'>
        
            {questions && questions[currentQuestionIndex] && (
                <p key={questions[currentQuestionIndex].id}>
                    {questions[currentQuestionIndex].question.text}
                </p>
            )}
        </div>
    )
}

export default Questions;