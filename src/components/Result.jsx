import React from 'react';
import { Button } from '../index';
import { useNavigate } from 'react-router-dom';

function Result({
    score,
    selectedTopic,
    selectedClass,
    email,
    studentName,
    maxScore,
    bgColor
    }){

    const navigate = useNavigate();
    const closeResult = () => {
        sessionStorage.removeItem("classId");
        sessionStorage.removeItem("topicId");
        sessionStorage.removeItem("Score");
        sessionStorage.removeItem("CurrentIndex");
        sessionStorage.removeItem("TotalQuestions");
        sessionStorage.removeItem("QuizCompleted");
        navigate('/');
    }
    return(
        <div className='flex flex-col min-w-md shadow-lg rounded-2xl p-4'>
            <div className='flex flex-col items-center text-center'>
                <div className={`flex flex-col items-center text-center rounded-full w-30 h-30 text-white ${bgColor}`}>
                    <div className='text-3xl p-3'>
                        {score}
                    </div>
                    <div className=''>
                       /{maxScore}
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    Name: {studentName}
                </div>
                <div>
                    Class: {selectedClass}
                </div>
                <div>
                    Topic: {selectedTopic}
                </div>
                <div>
                    Email: {email}
                </div>
            </div>
            <div className='p-3'>
                    <Button buttonName="Close Results" onClick={closeResult}/>
            </div>
        </div>
    )

}

export default Result;