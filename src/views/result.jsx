import '../App.css'
import React from 'react';
import { useNavigate} from 'react-router-dom';
import Score from '../components/Score';


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
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='text-sm font-mono'>Yrgos fantastic React-made Quiz!</div> 
          
                <div className='pt-8 text-xl font-mono flex justify-center items-center'>
                    <p>{userName}, your total score is: {result}</p>
                </div>

                <div className="w-full h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 mt-12
                hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
                sm:w-3/5" 
                //on click needs to be an arrow function otherwise it triggers when it renders
                onClick={restartQuiz}>
                    <div className='text-xl font-mono flex justify-center items-center'>
                        <p>Start over</p>
                    </div>
                </div>
            </div>
        </> 
    )
}


export default Result;