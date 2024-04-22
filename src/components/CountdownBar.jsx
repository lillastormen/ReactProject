import '../App.css'
import React from 'react';



function CountdownBar () {


    return(
        <div  className='w-full flex justify-center'>
            <div className='w-4/5 h-4 bg-gray-400 rounded-xl'>
                <div className='h-4/5 bg-red-500 rounded-xl animate-fill'></div>
            </div>
        </div>
    )
}

export default CountdownBar;