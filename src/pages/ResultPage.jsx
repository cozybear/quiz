import React, { useEffect, useState } from 'react';
import { Result, dbService } from '../index'


function ResultPage() {

    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [studentName , setStudentName] = useState("");
    const email = sessionStorage.getItem("StudentDetails")
    const score = parseInt(JSON.parse(sessionStorage.getItem("Score")));
    const [bgColor, setBgColor] = useState("");

    
    

    useEffect( () => {
        const selected = async () => {
        
            const selectedTopic = (await dbService.getTopicById(JSON.parse(sessionStorage.getItem("topicId")))).Topic;
            const responseClass = (await dbService.getClassById(JSON.parse(sessionStorage.getItem("classId")))).Class;
            const studentRecord = (await dbService.getStudentIdByEmail(email)).rows[0];
            setStudentName(String(studentRecord.firstName).concat(" ").concat(studentRecord.lastName));
            setSelectedTopic(selectedTopic);
            setSelectedClass(responseClass);
            if (score < 8) {
            setBgColor("bg-green-400");
    }
        } 
        selected();
        
        
    }, [sessionStorage.getItem("classId"), sessionStorage.getItem("topicId")] )


    if (score && email && studentName ) {

        return (
    
            <div>
                <Result 
                    selectedTopic={selectedTopic}
                    selectedClass={selectedClass}
                    score={score}
                    email={email}
                    studentName={studentName}
                    bgColor={bgColor}
                />
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