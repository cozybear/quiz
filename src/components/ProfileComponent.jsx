import React, { useEffect, useState } from 'react';
import { storageService, InputBox, dbService } from '../index';

function ProfileComponent() {

    const userDetails = JSON.parse(sessionStorage.getItem("CurrentUser"));
    const [ profileURL, setProfileURL ] = useState("");
    const [ quizResults, setQuizResults ] = useState([]);
    const [ totalQuizes, setTotalQuizes ] = useState(0);
    const [ averageScore, setAverageScore ] = useState(0);
    const [ highestScore, setHighestScore ] = useState(0);

    

    
    

    useEffect(() => {

        const Results = async () => {
        const result = (await dbService.getQuizResultsByEmail(userDetails.email)).rows;
        const allScores = ((result.map((result) => result.score)).reduce((accumulator, currentValue) => accumulator + currentValue, 0) / result.length).toFixed(2);
        console.log(allScores);
        
        console.log(result);
        setQuizResults(result);
        setAverageScore(allScores);
        }

        const profileImage = async () => {
            const result = await storageService.getProfileImage("68dcc74900359019df8c");
            setProfileURL(result);
        }
        
    
        

        Results();
        profileImage();
        // dataCalculation();  
    }, [])

    // setAverageScore(quizResults.map(result => result.score));

    return (
        <div>
            <div className="flex grid-cols border border-gray-300 border-2">
                <div className="p-5  ">
                    {profileURL ? (<img src={profileURL} width={300} />) : "Loading"}
                </div>
                <div>
                    <div className='grid grid-cols-2 '>
                        <div className='p-2'>
                            <InputBox labelName={"Name"} value={userDetails.name} disabled={true} />
                        </div>
                        <div className='p-2'>
                            <InputBox labelName={"Email"} value={userDetails.email} disabled={true} />
                        </div>
                        <div className='p-2'>
                            <InputBox labelName={"Average Score"} value={averageScore} disabled={true} />
                        </div>
                        <div className='p-2'>
                            <InputBox labelName={"Total Quizes"} value={quizResults.length} disabled={true} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default ProfileComponent;