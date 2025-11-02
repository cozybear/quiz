import { React, useEffect, useState } from 'react';
import { dbService, Button } from '../index'
import { useDispatch, useSelector } from 'react-redux';
import { selectclass, selecttopic, removeclasstopic } from '../store/dbSlice';
import { useNavigate } from 'react-router-dom';



function InitiateQuiz() {

    const [classes, setClasses ] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedClass, setSelectedClass] = useState();
    const [startQuizButton, setStartQuizButton] = useState(false);
    const dispatch = useDispatch();
    const classname = useSelector((state) => state.class);
    const selectedTopic = useSelector((state) => state.topic);
    const navigate = useNavigate();

    

    useEffect( () => {
        const getClasses = async () => {
            const response = await dbService.getClasses();
            setClasses(response.rows);
        };
        getClasses();
    }, []);

    const clickClass = async (e) => {
        
        dispatch(selectclass(e.target.value));
        sessionStorage.setItem("classId", JSON.stringify(e.target.value));
        // setSelectedClass(classname);
        
        const getTopics = await dbService.getTopicsByClass(e.target.value);
        
        if (getTopics.rows) {
            // console.log(getTopics.rows)
            setTopics(getTopics.rows)

        }
        // console.log(`This is topics ${getTopics.rows}`)
        // console.log(`UseState Topics: ${JSON.stringify(topics)}`)
        
    };

    const clickTopic = (e) => {
        console.log("Topic Button Clicked");
        // dispatch(selecttopic(e.target.value));
        sessionStorage.setItem("topicId", JSON.stringify(e.target.value));

        setStartQuizButton(true);
       
    }

   
    const startQuiz = (e) => {
       

        navigate('/quiz')

    }

    if (!sessionStorage.getItem('classId')) {

        return (
            <div className='max-w-md w-full shadow-lg rounded-lg p-6 text-center bg-gray-100'>
                <div className='text-3xl m-10'>
                    Select Your Class
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    {classes.map((item) => (
                        <div key={item.$id} >
                            <button onClick={clickClass} className='max-w-md w-full rounded-lg shadow-lg bg-gray-200 hover:bg-blue-500 p-4' value={item.$id}>
                                {item.Class}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        if (sessionStorage.getItem('classId') ){

            if (topics.length == 0) {
                return (
                    <div className='max-w-md w-full shadow-lg rounded-lg p-6 text-center bg-white'>
                        {`No Topics Found for selected class`}
                    </div>
                )
            }

            return (
                <div className='max-w-md w-full shadow-lg rounded-lg p-6 text-center bg-white'>
                    <div className='text-3xl m-10'>
                        Select Your Topic
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        {topics.map((item) => (
                            <div key={item.$id} >
                                <button  className='max-w-md w-full rounded-lg shadow-lg bg-gray-200 hover:bg-blue-500 p-4' value={item.$id} onClick={clickTopic}>
                                    {item.Topic}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='pt-6 '>
                        <Button 
                            buttonName={"Start Quiz"}
                            hidden={!startQuizButton}
                            onClick={startQuiz}
                        />
                    </div>
                 </div>
            )
        } 
    }
}

export default InitiateQuiz;