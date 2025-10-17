import { React, useEffect, useState } from 'react';
import { dbService, Button } from '../index'
import { useForm } from 'react-hook-form';



function QuestionComponent({ 
    question, 
    option1, 
    option2, 
    option3, 
    option4 , 
    correctAnswer, 
    onSubmit , 
    submitAnswer, 
    className, 
    nextButton=false, 
    nextQuestion }) {

    
    const {register, handleSubmit, watch} = useForm();
    const selectedanswer = watch("selectedanswer");
    const [displayClasses, setdisplayClasses] = useState("")
    const optionArray = [option1, option2, option3, option4];
    

 

    return (
        <div className='max-w-md min-w-200 mx-auto p-6'>
            <form onSubmit={handleSubmit(onSubmit)} >                    
                <div className="max-w-md min-w-200 mx-auto p-6 bg-white rounded-2xl shadow-lg text-3xl">
                    {question}
                </div>

                <div>
                    {optionArray.filter((item) => item && item)
                    .map((item, index) => (
                        <div key={index}>
                            <div className="max-w-sm min-w-80">
                                <label 
                                className={`flex items-center mt-4 py-2 rounded-2xl shadow-lg cursor-pointer mb-3 transition
                                    hover:bg-indigo-300 `}> 
                                    <input type='radio' value={item}
                                        {...register("selectedanswer", {required: true})}
                                        className='hidden'
                                        disabled={submitAnswer}
                                    />
                                    <span className="ml-2">{item}</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                    <div className='grid grid-cols-2 gap-2'>
                        
                        <div className='  rounded-xl shadow-lg bg-gray-300 p-2 justify-center text-center hover:bg-yellow-500'>
                            <button type='submit' disabled={submitAnswer}>Submit</button>
                        </div>
                    </div>
            </form>

          
            <div className='max-w-md min-w-200 mx-auto p-6'>

                {/* <button onClick={nextQuestion}> { nextButton? "Next Question" : "Can't Answer" }</button> */}
                <Button className=' bg-gray-500 my-2 rounded-xl shadow-lg  p-2  text-center hover:bg-yellow-500' onClick={nextQuestion} buttonName={ nextButton? "Next Question" : "Can't Answer" }/>
                        
            </div>
        </div>
    )



}


export default QuestionComponent;