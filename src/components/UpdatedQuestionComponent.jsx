import React, {useState, useEffect} from 'react';
import { dbService, Shuffle, Button, InputBox, ProgressCircleComponent } from '../index';
import { useForm } from 'react-hook-form';
import { useNavigate  } from 'react-router-dom';

function UpdatedQuestionComponent({ questions, maxQuestions, finishQuiz }) {

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
    const [timeLeft, setTimeLeft] = useState(10);
    const [timerClass, setTimerClass ] = useState("green-500");
    const timeLimitQuestion = 100;
    

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
        setTimeLeft(timeLimitQuestion);

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    currentIndex = parseInt(sessionStorage.getItem("CurrentIndex"));
                    if ( currentIndex < maxQuestionsNumber ) {

                        setQuestion(currentIndex+1);
                        sessionStorage.setItem("CurrentIndex", currentIndex+1);
                    }
                    else {
                        finishQuiz;
                    }
                    clearInterval(timer);
                    return 0;
                }
                
                const timerprogress = prevTime/timeLimitQuestion;

                if(timerprogress > 0.6 ) {
                    setTimerClass("green-500")
                } else {
                       if (timerprogress <= 0.6 && timerprogress > 0.3 ) {
                        setTimerClass("red-500");
                    }
                    else {
                        setTimerClass("red-500");
                    }
                }
                return prevTime-1;
            });
        }, 1000)
        
        return () => clearInterval(timer);

    }, [currentIndex, currentQuestion]);

    const submitAnswer = (data) => {
        setAnswerSubmitted(true);
        setCorrectAnswer(question.Answer);

        if (question.Answer === data.Option) {
            score = score + 1;
            sessionStorage.setItem("Score", score);
        }
    };

    

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
                <div className='flex justify-between my-4 relative'>
                    <div className=''>
                        Question No. {currentIndex+1}
                    </div>
                    <div className=' absolute top-0 left-1/2 -translate-x-1/2 h-20 w-20 ' >
                        <ProgressCircleComponent   
                            radius={"10"}
                            progressColor={timerClass}
                            progressWidth={"2"}
                            timeLeft={timeLeft}
                            timeLimitQuestion={timeLimitQuestion} 
                            fontSize={10}  
                        />
                    </div>
                    <div className=''>
                        Your Score: {score}
                    </div>
                </div>
            <div className='mt-15'>
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
                <div className='flex justify-center pt-4'>
                    Total Questions: {maxQuestionsNumber}
                </div>
            </div>
        </div>
    )
}

};

export default UpdatedQuestionComponent;