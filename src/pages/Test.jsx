import React, { useEffect, useState } from 'react';
import { Button, dbService } from '../index';
import { ScrollRestoration } from 'react-router-dom';


function Test(){

    const [timeLeft, setTimeLeft] = useState(100);
    const [question, setQuestion ] = useState(0);
    const [timeLimitQuestion, setTimeLimiteQuestion ] = useState(100);
  
    
    const submitResult = async (e) => {
        const email = "email@email.com";
        const classId = "68dd2ec800347010fb2d";
        const topicId = "68de40c4003d1cf422d6";
        // const datetime = new Date(Date.now()).toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });

        const result = await dbService.updateResults(
           email,
           10,
           topicId,
           classId

        )

        console.log(result)


    };
    
    return (

        <div>
            <Button buttonName={"Test"} onClick={submitResult} />
        </div>


        
    )
};

export default Test;