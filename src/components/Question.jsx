import { React, useEffect, useState } from 'react';
import { dbService, Button } from '../index'
import { useForm } from 'react-hook-form';



function Question({ 
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
    nextQuestion,
    nextButtonName
     }) {

    
    const {register, handleSubmit, watch} = useForm();
    const selectedanswer = watch("selectedanswer");
    const [displayClasses, setdisplayClasses] = useState("")
    const optionArray = [option1, option2, option3, option4];
    

    const getOptionClass = (option) => {
        if (submitAnswer) {
           if (option === correctAnswer ) {
                
                return "bg-green-400 text-white";
            }
            if (option === selectedanswer && option !== correctAnswer ) return "bg-red-400 text-white";
        }
        else {
            if (option === selectedanswer) return "bg-blue-400 text-white";
        }
        return "bg-white";
    }

    return (
        <div className='max-w-md min-w-200 mx-auto p-6'>
            <form onSubmit={handleSubmit(onSubmit)} >                    
                <div className="w-full p-6 bg-white rounded-2xl shadow-lg text-3xl">
                    {question}
                </div>

                {/* Rendering List */}
                <div>
                    {optionArray.filter((item) => item && item)
                    .map((item, index) => (
                        <div key={index}>
                            <div className="max-w-sm">
                            
                                <label className={`flex items-center mt-4 py-2 rounded-2xl shadow-lg cursor-pointer mb-3 transition
                                    ${getOptionClass(item)}  ${submitAnswer ? "cursor-not-allowed" : ""}
                    
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




                {/* <div className='flex flex-col gap-4 text-2xl'>
                    <div className="max-w-md min-w-100">
                        <label className={`flex items-center mt-4 py-2 rounded-2xl shadow-lg cursor-pointer mb-3 transition
                            ${getOptionClass(option1)} ${submitAnswer ? "cursor-not-allowed" : ""}
                                hover:bg-indigo-300 `}> 
                            <input type='radio' value={option1}
                                {...register("selectedanswer", {required: true})}
                                className='hidden'
                                disabled={submitAnswer}
                            />
                            <span className="ml-2">{option1}</span>
                        </label>
                    </div>
                    <div className="my-2 py-2 max-w-md min-w-100">
                        <label className={`flex items-center p-2 rounded-2xl shadow-lg cursor-pointer mb-3 transition
                               ${getOptionClass(option2)} ${submitAnswer ? "cursor-not-allowed" : ""}
                                hover:bg-indigo-300 `}> 
                            <input type='radio' value={option2}
                                {...register("selectedanswer", {required: true})}
                                className='hidden'
                                disabled={submitAnswer}
                            />
                            <span className="ml-2">{option2}</span>
                        </label>
                    </div>
                    <div className="my-2 py-2 max-w-md min-w-100">
                        <label className={`flex items-center p-2 rounded-2xl shadow-lg cursor-pointer mb-3 transition
                                 ${getOptionClass(option3)} hover:bg-indigo-300 `}> 
                            <input type='radio' value={option3}
                                {...register("selectedanswer", {required: true})}
                                className='hidden'
                                disabled={submitAnswer}
                            />
                            <span className="ml-2">{option3}</span>
                        </label>
                    </div>
                    <div className="my-2 py-2 max-w-md min-w-100">
                        <label className={`flex items-center p-2 rounded-2xl shadow-lg cursor-pointer mb-3 transition
                                 ${getOptionClass(option4)} hover:bg-indigo-300 `}> 
                            <input type='radio' value={option4}
                                {...register("selectedanswer", {required: true})}
                                className='hidden'
                                disabled={submitAnswer}
                            />
                            <span className="ml-2">{option4}</span>
                        </label>
                    </div> */}
                {/* </div> */}
                    <div className='max-w-md min-w-200 mx-auto flex items-center'>
                        <Button 
                            className=' bg-gray-500 my-2 rounded-xl shadow-lg  p-2  text-center hover:bg-yellow-500'
                            type='submit' disabled={submitAnswer} buttonName="Submit"
                        />
                    </div>
            </form>

          
            <div className='max-w-md min-w-200 mx-auto flex items-center'>

                {/* <button onClick={nextQuestion}> { nextButton? "Next Question" : "Can't Answer" }</button> */}
                <Button 
                    type="button"
                    className=' bg-gray-500 my-2 rounded-xl shadow-lg  p-2  text-center hover:bg-yellow-500'
                    onClick={nextQuestion}
                    // buttonName={ nextButton? "Next Question" : "Can't Answer" }
                    buttonName={nextButtonName}
                    value={nextButtonName}
                />
                        
            </div>
        </div>
    )



}


export default Question;