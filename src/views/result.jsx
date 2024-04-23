import '../App.css'
import React from 'react';
import { useNavigate} from 'react-router-dom';


function Result () {
    const result = sessionStorage.getItem('result');
    const userName = sessionStorage.getItem('userName');
    const navigate = useNavigate();

    const restartQuiz = () => {
        sessionStorage.clear();
        navigate('/');
    }


    return (
        <> 
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <div className='text-sm font-mono'>Yrgos fantastic React-made Quiz!</div> 
            
        
            <div className='text-2xl font-mono flex justify-center items-center flex-col mt-10'>
                <p>{userName}, your total score is:</p>
                <p className='text-6xl'>{result}</p>
            </div>

            <div className="w-3/5 h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 mt-10
            hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
            sm:w-3/5" 
            //on click needs to be an arrow function otherwise it triggers when it renders
            onClick={restartQuiz}
            
            >
                
                <div className='text-xl font-mono flex justify-center items-center' >
                    <p>Start over</p>
                </div>
            </div>
            </div>
        </> 
    )
}


export default Result;