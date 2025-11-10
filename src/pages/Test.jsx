import React, { useEffect, useState } from 'react';


function Test(){

    const [timeLeft, setTimeLeft] = useState(100);
    const [question, setQuestion ] = useState(0);
    const [timeLimitQuestion, setTimeLimiteQuestion ] = useState(100);
    
    const progress = timeLeft / timeLimitQuestion; // 1 → full, 0 → empty
    const offset = 100 * (1 - progress);
    useEffect(() => {

        setTimeLeft(100);
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setQuestion(q => q +1 );
                    return 0;
                }
                return prevTime-1;
            });
        }, [1000])

        return () => clearInterval(timer);
    }, [question]);
    
    
    return (
        <div className='bg-white min-w-100 text-3xl'>
            Question: {question}
            <div>
                Timer: {timeLeft}
            </div>
            <div className='h-50 w-50'>
                <svg className="w-24 h-24 rotate-[-90deg]" viewBox="0 0 36 36">
                    <circle
                        className="text-gray-300"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="16"
                    />
                    <circle
                        className="text-blue-500 transition-all duration-300 ease-linear"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="16"
                        strokeDasharray="100"
                        strokeDashoffset={offset} // how much of circle remains unfilled
                        
                    />
                    <text
                        x="18"
                        y="18"
                        textAnchor="middle"
                        transform="rotate(90 18 18)"      // counter the SVG -90deg
                        fontSize={radius.fontSize}
                        >
                            {timeLeft}s
                        </text>
                    </svg>
                                </div>
        </div>
    )
};

export default Test;