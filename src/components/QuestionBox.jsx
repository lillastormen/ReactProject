import '../App.css'
import React from 'react';



function QuestionBox ({Answer}) {



    return (
        <div className="w-full h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500
        hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
         sm:w-3/5">
            <div className='text-4xl font-mono flex justify-center items-center'>
                {Answer}
            </div>
        </div>
    )
}

export default QuestionBox;