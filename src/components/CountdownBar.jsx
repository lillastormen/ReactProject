import { useState, useEffect } from "react";
import React from "react";

function CountdownBar ({ countdownKey }) {
    const [countdown, setCountdown] = useState(100); // Set initial countdown value

    useEffect(() => {
        setCountdown(100); // Reset countdown whenever countdownKey changes
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1); // Decrease countdown every second
        }, 1000);
        return () => clearInterval(interval); // Clear interval on component unmount or countdownKey change
    }, [countdownKey]);

    return (
        <div className='w-full flex justify-center'>
            <div className='w-4/5 h-4 bg-gray-400 rounded-xl'>
                <div className='h-4/5 bg-red-500 rounded-xl animate-fill'></div>
            </div>
        </div>
    );
}

export default CountdownBar;
