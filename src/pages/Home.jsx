import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../index';


function Home() {
    
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("IsLoggedIn") == 'true';
    

    const startQuiz = () => {
        navigate('/details')
    } 

    const signIn = () => {
        navigate('/signin')
    }

    const startLoggedInQuiz = (e) => {
        navigate("/startquiz");
    }


   

    return (

    <div className="max-w-md w-full bg-white bg-transperant-50 p-8 md:p-10 shadow-2xl rounded-xl text-center transition-all duration-300 transform hover:shadow-3xl hover:scale-[1.01]">
       <div className="mb-6">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                Physics Flash
            </h1>
            <p className="text-lg text-indigo-600 font-semibold">
                Your daily dose of discovery.
            </p>
        </div>
        <div className="mb-8">
            <p className="text-gray-600 leading-relaxed">
                Test your knowledge of the universe, from classical mechanics to quantum theory. Our short, focused quizzes are designed to challenge your mind and solidify your understanding of fundamental physical concepts.
            </p>
        </div>

        <div className='p-2'>
            <Button 
            buttonName={"Instant Quiz"}  
            className='text-white'
            hidden={isLoggedIn}
            onClick={startQuiz}
            />
        </div>
        <div className='p-2'>
            <Button 
                buttonName={"Sign In"}  
                className='text-white'
                hidden={isLoggedIn}
                onClick={signIn}
                />
        </div>
        <div className='p-2'>
            <Button 
                buttonName={"Start Quiz"}  
                className='text-white'
                hidden={!isLoggedIn}
                onClick={startLoggedInQuiz}
                />
        </div>
                

        
        <p className="mt-6 text-sm text-gray-400">
            Ready to explore the laws of nature?
        </p>
    </div>
    )
}

export default Home;