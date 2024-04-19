import { useEffect, useState } from "react";
import getRandomQuestions from "../../apiFunctions/getRandomQuestions";
import React from "react";

export function Questions({questions, currentQuestionIndex}) {

    return (
        <div className="">
            Question: 
            {questions && questions[currentQuestionIndex] && (
                <p key={questions[currentQuestionIndex].id}>
                    {questions[currentQuestionIndex].question.text}
                </p>
            )}
        </div>
    )
}

export default Questions;