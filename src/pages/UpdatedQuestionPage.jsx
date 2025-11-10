import React, { useEffect, useState } from 'react';
import { UpdatedQuestionComponent, dbService, Shuffle } from '../index';
import { useNavigate } from 'react-router-dom';


function UpdatedQuestionPage() {

    const [ questions, setQuestions ] = useState([]);
    const classId = JSON.parse(sessionStorage.getItem("classId"));
    const topicId = JSON.parse(sessionStorage.getItem("topicId"));
    const navigate = useNavigate();

    const maxQuestions = 5; // The total number of questions are always +1 than   
    sessionStorage.setItem("TotalQuestions", maxQuestions);  
    sessionStorage.setItem("Score", 0);

    const finishQuiz = async (e) => {
        console.log("Quiz Finished")
        const final_score = parseInt(sessionStorage.getItem("Score"));
        sessionStorage.setItem("QuizCompleted", "true");
        // sessionStorage.setItem("TotalQuestions", maxQuestionsNumber);
        const email = JSON.parse(sessionStorage.getItem("CurrentUser")).email;
        const classId = sessionStorage.getItem("classId");
        const topicId = sessionStorage.getItem("topicId");
        const updateResults = await dbService.updateResults( email, final_score, classId, topicId )
        if (updateResults) {
            console.log(updateResults);
            navigate('/result');
        }   
    }

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
    // console.log(questions.length);
    return(
        <UpdatedQuestionComponent questions={questions} maxQuestions={maxQuestions} finishQuiz={finishQuiz}/>
    )
};


export default UpdatedQuestionPage;