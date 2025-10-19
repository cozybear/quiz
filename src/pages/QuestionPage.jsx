import { React, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Question, QuestionComponent, dbService } from '../index'
import conf from '../conf/conf'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function QuestionPage(){

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { register, handleSubmit, formState: { errors } }   = useForm();
    const [submitAnswer, setSubmitAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [nextButton, setnextButton] = useState(false);
    const [correctAnswer, setcorrectAnswer] = useState("");
    const [nextButtonName, setNextButtonName] = useState("Can't Answer");
    // const selectedClass = useSelector((state) => state.class);
    const classId = JSON.parse(sessionStorage.getItem("classId"));
    const topicId = JSON.parse(sessionStorage.getItem("topicId"));
    const score =   JSON.parse(sessionStorage.getItem("Score"));
    const max_score = questions.length;
    const navigate = useNavigate();

    
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

    const nextQuestion = (e) => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSubmitAnswer(false);
            setnextButton(false);
            setcorrectAnswer("");
            setUserAnswer("");
            setNextButtonName("Can't Answer");
        } 
        console.log(e.target.value);
        if (String(e.target.value) === "Finish Quiz") {
            navigate('/result')
        }

    };
    if (questions.length === 0) {
        return (
            <div>
                <p> Loading Questions</p>
            </div>
        );
    }
    const onSubmitAnswer = (data) => {

        setUserAnswer(data.selectedanswer);
        setcorrectAnswer(currentQuestion.Answer);
        setSubmitAnswer(true);
        setnextButton(true);
        setNextButtonName("Next Question")
        
        if (data.selectedanswer === currentQuestion.Answer) {
            sessionStorage.setItem("Score", JSON.parse(sessionStorage.getItem("Score"))+1 )
            
        }

        if (currentIndex === questions.length -1) {
                setNextButtonName("Finish Quiz")
        }
        
    }
    return (
        <div className='rounded-2xl shadow-2xl'>
            <div className='grid grid-cols-2 p-6 '>

                <div className='justify-self-start'>
                    Question No. {currentIndex+1}
                
                </div>
                <div className='justify-self-end'>
                    Your Score: {score}
                </div>
            </div>
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
                    nextButtonName={nextButtonName}
                    nextQuestion={nextQuestion}
                />
            </div>
            <div className='p-2 text-center'>
                Total Questions: {questions.length}    
            </div> 
        </div>
    )
}

export default QuestionPage;