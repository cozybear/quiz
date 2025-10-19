import React from 'react';


function Result({
    score,
    selectedTopic,
    selectedClass,
    email,
    studentName,
    bgColor
    }){
    // console.log(selectedTopic)
    return(
        <div className='flex flex-col min-w-md shadow-lg rounded-2xl p-4'>
            <div className='flex flex-col items-center text-center'>
                <div className={`flex flex-col items-center text-center rounded-full w-30 h-30 text-white ${bgColor}`}>
                    <div className='text-3xl p-3'>
                        {score}
                    </div>
                    <div className=''>
                        Out of 10
                    </div>
                </div>
            </div>
            <div >
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
    )

}

export default Result;