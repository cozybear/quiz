import { React, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Question, dbService } from '../index'
import conf from '../conf/conf'
import { useSelector } from 'react-redux';



function QuestionPage(){

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { register, handleSubmit, formState: { errors } }   = useForm();
    const [submitAnswer, setSubmitAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [nextButton, setnextButton] = useState(false);
    const [correctAnswer, setcorrectAnswer] = useState("");
    // const selectedClass = useSelector((state) => state.class);
    const classId = JSON.parse(sessionStorage.getItem("classId"));
    const topicId = JSON.parse(sessionStorage.getItem("topicId"));
    
    // const score = useSelector((state) => state.score);
    
    if (!sessionStorage.getItem("Score")) {
        sessionStorage.setItem("Score", 0)
    }

    var currentQuestion = questions[currentIndex];
    
    useEffect ( () => {
     

        const getQuestions = async () => {
            try {
            
                const response = (await dbService.getQuestions(classId, topicId));
                
                setQuestions(response.rows);
                
                
            } catch (error) {
                console.log(error)
            }
        }
        getQuestions();


    }, [classId, topicId]);


  

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSubmitAnswer(false);
            setnextButton(false);
            setcorrectAnswer("");
            setUserAnswer("");
            console.log(submitAnswer);
            console.log(nextButton);
            console.log(userAnswer);
        }
    };


    if (questions.length === 0) {
        return (
            <div>
                <p> Loading Questions</p>
            </div>
        );
    }
    // console.log(submitAnswer);
    
    // console.log(currentQuestion);
    

    const onSubmitAnswer = (data) => {

        setUserAnswer(data.selectedanswer);
        setcorrectAnswer(currentQuestion.Answer);
        setSubmitAnswer(true);
        setnextButton(true);
        // console.log()

        if (userAnswer === correctAnswer) {
            sessionStorage.setItem("Score", JSON.parse(sessionStorage.getItem("Score"))+1 )
        }

    }


    return (
        <div>
                  
            <div>
                
                <Question 
                    question={currentQuestion.Question}
                    option1={currentQuestion.Option1}
                    option2={currentQuestion.Option2}
                    option3={currentQuestion.Option3}
                    option4={currentQuestion.Option4}
                    onSubmit={onSubmitAnswer} 
                    submitAnswer={submitAnswer}
                    correctAnswer={currentQuestion.Answer}
                    nextButton={nextButton}
                    nextQuestion={nextQuestion}
                />
            </div> 
        </div>

      
    )

}

export default QuestionPage;