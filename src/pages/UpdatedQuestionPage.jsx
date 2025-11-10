import React, { useEffect, useState } from 'react';
import { UpdatedQuestionComponent, dbService, Shuffle } from '../index';


function UpdatedQuestionPage() {

    const [ questions, setQuestions ] = useState([]);
    const classId = JSON.parse(sessionStorage.getItem("classId"));
    const topicId = JSON.parse(sessionStorage.getItem("topicId"));

    const maxQuestions = 4; // The total number of questions are always +1 than   
    sessionStorage.setItem("TotalQuestions", maxQuestions+1);  
    sessionStorage.setItem("Score", 0);

    useEffect ( () => {
        const getQuestions = async () => {
            try {
                const response = (await dbService.getQuestions(classId, topicId)).rows;
                const selectedQuestions = Shuffle(response, maxQuestions);
                setQuestions(selectedQuestions);
                sessionStorage.setItem("CurrentIndex", parseInt(0));
            } catch (error) {
                console.log(error)
            }
        }
        getQuestions();
        }, [classId, topicId]
    );
   
    return(
        <UpdatedQuestionComponent questions={questions} maxQuestions={maxQuestions} />
    )
};


export default UpdatedQuestionPage;