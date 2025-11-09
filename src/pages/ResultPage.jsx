import React, { useEffect, useState } from 'react';
import { Result, dbService, Button } from '../index';
import { useNavigate } from 'react-router-dom';


function ResultPage() {

    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [studentName , setStudentName] = useState("");
    const navigate = useNavigate();
    const email = JSON.parse(sessionStorage.getItem("CurrentUser")).email;
    const score = parseInt(JSON.parse(sessionStorage.getItem("Score")));
    const quizCompleted = sessionStorage.getItem("QuizCompleted")
    const [ bgColor, setBgColor ] = useState("");
    const totalQuestions = parseInt(sessionStorage.getItem("TotalQuestions"));

    useEffect( () => {
        const selected = async () => {
            const selectedTopic = (await dbService.getTopicById(JSON.parse(sessionStorage.getItem("topicId")))).Topic;
            const responseClass = (await dbService.getClassById(JSON.parse(sessionStorage.getItem("classId")))).Class;
            setStudentName(JSON.parse(sessionStorage.getItem("CurrentUser")).name);
            setSelectedTopic(selectedTopic);
            setSelectedClass(responseClass);
            
            if (score/totalQuestions >= 0.6) {
                setBgColor("bg-green-400");
            } else {
                if (score/totalQuestions >= 0.4 && score/totalQuestions < 0.6 ) {
                    setBgColor("bg-amber-400");
                }
                else {
                    setBgColor("bg-red-400");
                }
            }
        } 
        selected();
    }, [sessionStorage.getItem("classId"), sessionStorage.getItem("topicId")] )

    if (quizCompleted === 'true') {

        return (
            <div className='bg-gray-100 rounded-2xl'>
                <div>
                    <Result 
                        selectedTopic={selectedTopic}
                        selectedClass={selectedClass}
                        score={score}
                        email={email}
                        studentName={studentName}
                        bgColor={bgColor}
                        maxScore={totalQuestions}
                    />
                </div>              
            </div>
        )
    }
    else {
        return(
            <div>
                Loading Results
            </div>

        )
    }

};

export default ResultPage;