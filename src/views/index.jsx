import '../App.css'
import React, {useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Index () {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const startQuiz = () => {
        sessionStorage.setItem('userName', userName);
        navigate('/quiz');
    }


    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='font-mono text-4xl w-2/3 text-center mt-12'>Yrgos fantastic React-made Quiz!</div>

            <div className='text-xl font-mono flex justify-center items-center'>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-md px-3 py-1 mt-12"
                />
            </div>
            
            <div className="w-full h-auto py-5 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 mt-12
            hover:from-blue-500 hover:to-purple-400 hover:scale-110 ease-in-out transition-all duration-100
            sm:w-3/5" 
            //on click needs to be an arrow function otherwise it triggers when it renders
            onClick={startQuiz}>
                <div className='text-xl font-mono flex justify-center items-center' >
                    <p>Start the quiz!</p>
                </div>
            </div>
            </div> 
        </>
    )
}

export default Index;