import '../App.css'
import React from 'react';
import { useNavigate} from 'react-router-dom';

function Index () {

    const navigate = useNavigate();


    return (
        <>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='text-sm font-mono'>Homepage</div> 
            </div> 

            <div className="w-full h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500
            hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
            sm:w-3/5" 
            //on click needs to be an arrow function otherwise it triggers when it renders
            onClick={() => navigate('/quiz')}>
                <div className='text-xl font-mono flex justify-center items-center' >
                    <p>Start the quiz!</p>
                </div>
            </div>
        </>
    )
}

export default Index;