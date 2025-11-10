
import React, { useState, useEffect } from 'react';


function ProgressCircleComponent(radius, progressColor, timeLeft, progressWidth, timeLimitQuestion) {

    const circumference = 2 * Math.PI * radius.radius;
    var progress = circumference  * (1 - radius.timeLeft / radius.timeLimitQuestion);
 
    return (
        <div>
            <svg className='w-full h-full rotate-[-90deg]' viewBox='0 0 36 36'>
                <circle 
                    className='text-white'
                    strokeWidth={radius.progressWidth}
                    stroke="currentColor"
                    fill="none"
                    // cx={parseInt(radius.radius) + 10}
                    // cy={parseInt(radius.radius) + 10}
                    cx={0}
                    cy={radius.radius}
                    r={String(radius.radius)}
                />

                <circle
                    className={`text-${radius.progressColor} transition-all duration-300`}
                    strokeWidth={radius.progressWidth}
                    stroke="currentColor"
                    fill="none"
                    cx={parseInt(radius.radius)*2}
                    cy={parseInt(radius.radius)*2}
                    r={String(radius.radius)}
                    strokeDasharray={2 * Math.PI * radius.radius}
                    strokeDashoffset={progress} // how much of circle remains unfilled  
                />
                <text 
                    x={20}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    transform={`rotate(90 ${radius.radius} ${radius.radius})`}     // counter the SVG -90deg
                    fontSize={radius.fontSize}
                >
                    {radius.timeLeft}
                </text>
            </svg>
        </div>
    )

};


export default ProgressCircleComponent;