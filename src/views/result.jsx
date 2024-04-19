import '../App.css'
import React from 'react';


function Result () {
    const result = sessionStorage.getItem('result');

    // Add button to go back and reset result to 0 and start over the quiz

    return (
        <> 
            <div className='w-full h-full flex justify-center items-center'>
                <div className='text-sm font-mono'>resultPage</div> 
            </div>
           
            <p>Total score: {result}</p>   
        </>
        
    )
}



export default Result;