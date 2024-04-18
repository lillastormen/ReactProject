import { useEffect, useState } from "react";
import getRandomQuestions from "../../apiFunctions/getRandomQuestions";

export function Questions() {

    const [questions, setQuestions] = useState([]); //default value - an empty array

    useEffect(() => {
        getRandomQuestions().then((questions) => setQuestions(questions));
    }, []); //empty dependecy array so that it will only run once

    return (
        <div>
            Questions: 
            {questions && questions.map((question) => (
                <p key={question.id}>
                    {question.question.text}
                </p>
                )
            )}
        </div>
    )
}

export default Questions;