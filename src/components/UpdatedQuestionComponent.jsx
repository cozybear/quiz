import React, {useState, useEffect} from 'react';
import { dbService, Shuffle, Button, InputBox } from '../index';
import { useForm } from 'react-hook-form';
import { useNavigate  } from 'react-router-dom';

function UpdatedQuestionComponent({ questions, maxQuestions }) {

    const navigate = useNavigate();    
    const maxQuestionsNumber = parseInt(maxQuestions);
    const [ question, setQuestion ] = useState({});
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [ correctAnswer, setCorrectAnswer] = useState("");
    const [currentIndexState, setCurrentIndexState] = useState(0);
    const [options, setOptions] = useState([]);
    const [ selectedOptionClass, setSelectedOptionClass ] = useState("");
    const { register, watch, reset, handleSubmit } = useForm();
    var selectedOption = watch("Option")
    var score =   JSON.parse(sessionStorage.getItem("Score"));
    var currentIndex = parseInt(sessionStorage.getItem("CurrentIndex"));
    const currentQuestion = questions[currentIndex];

    if (currentQuestion) {
        const optionArray = ([currentQuestion.Option1, currentQuestion.Option2, currentQuestion.Option3, currentQuestion.Option4 ]).filter(item => item !== null);
     
        var currentOptions = Shuffle(optionArray, optionArray.length );
    }
 
    const nextQuestion = (e) => {

        if (currentIndex < maxQuestionsNumber-1) {
            currentIndex = currentIndex + 1;
            sessionStorage.setItem("CurrentIndex", currentIndex);
            setAnswerSubmitted(false);
            setQuestion(questions[currentIndex]);
            selectedOption = false;
            reset();
        }
    };

    useEffect(() => {
        
        setQuestion(questions[currentIndex]);
        setOptions(currentOptions);
        // setAnswerSubmitted(false);
    }, [currentIndex, currentQuestion]);

    const submitAnswer = (data) => {
        setAnswerSubmitted(true);
        setCorrectAnswer(question.Answer);

        if (question.Answer === data.Option) {
            score = score + 1;
            sessionStorage.setItem("Score", score);
        }
    };

    const finishQuiz = (e) => {
        console.log("Quiz Finished")
        const final_score = parseInt(sessionStorage.getItem("Score"));
        sessionStorage.setItem("QuizCompleted", "true");
        sessionStorage.setItem("TotalQuestions", maxQuestionsNumber);
        navigate('/result');
        
    }

    const getOptionClass = (item) => {
        if (answerSubmitted) {
            if (selectedOption === item && item === correctAnswer) {
                return "bg-green-500"
            }
            else {
                if (selectedOption === item && item !== correctAnswer ) {
                    return  "bg-red-500"
                } 
                if (selectedOption !== item && item === correctAnswer ) {
                    return "bg-green-500"
                }
                
            }
        } else {
            if (selectedOption === item) {
                return "bg-indigo-500"
            }
            return "bg-white"
        }
    }

    if (question) {

        return (
            <div className='min-w-100 max-w-md mx-auto p-6 rounded-xl bg-white'>
                <div className='flex justify-between my-4 px-2 py-2 '>
                    <div className=''>
                        Question No. {currentIndex+1}
                    </div>
                    <div>
                        Your Score: {score}
                    </div>
                </div>
            <div>
                <form className='' onSubmit={handleSubmit(submitAnswer)}>
                    <div>
                        {question && question.Question}
                    </div>
                    <div >
                        {options.map((value, index) => (
                            <div key={index} className='max-w-sm'>
                                <label 
                                    className={`flex items-center  mt-4 mb-4 p-2 rounded-xl cursor-pointer shadow-lg cursor-not-allowed hover:bg-indigo-300
                                        ${getOptionClass(value)} ${selectedOptionClass}  ${answerSubmitted ? "cursor-not-allowed" : ""}`}
                                > 
                                    <input 
                                        type='radio' 
                                        value={value}
                                        className='hidden'
                                        disabled={answerSubmitted}
                                        {...register("Option", {
                                            required: true}
                                        )}
                                    />
                                    <span>
                                        {value}
                                    </span>
                                </label>
                            </div>
                        ))}
                       <div className='flex justify-center py-2 w-f'>
                            <Button buttonName="Submit" className={'min-w-50'} type={"submit"} />
                       </div>
                    </div>
                </form>
                <div className='flex justify-center '>
                    {currentIndex < maxQuestionsNumber-1 ? 
                        <Button buttonName={"Next Question"} className={'min-w-50'} onClick={nextQuestion}/> : 
                        <Button buttonName={"Finish Quiz"} className={'min-w-50'} onClick={finishQuiz}/>
                    }
                    
                </div>
            </div>
        </div>
    )
}

};

export default UpdatedQuestionComponent;