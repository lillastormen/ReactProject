import React from "react";

export function Questions({question}) {

    return (
        <div className='w-4/5 font-mono text-2xl mt-8 mb-8'>
            {question && (
                <p >
                    {question}
                </p>
            )}
        </div>
    )
}

export default Questions;