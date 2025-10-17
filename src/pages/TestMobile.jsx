import React from 'react';
import { Question } from '../index'

function TestMobile() {
    
    const data = [
        {
            "Question": "What is the unit of power",
            "Answer": "Watt",
            "Image": null,
            "Option1": "Watt",
            "Option2": "Ampere",
            "Option3": "Volt",
            "Option4": "None",
            "$id": "68dcdfc0000a6ec23da2",
            "$sequence": 2,
            "$createdAt": "2025-10-01T08:01:10.828+00:00",
            "$updatedAt": "2025-10-01T08:01:10.828+00:00",
            "$permissions": [],
            "$databaseId": "68dcb3a200165fc13ff8",
            "$tableId": "prism_class_12"
        },
        // {
        //     "Question": "What is the unit of acceleration",
        //     "Answer": "Watt",
        //     "Image": null,
        //     "Option1": "m/s2",
        //     "Option2": "miles",
        //     "Option3": "knots",
        //     "Option4": "None",
        //     "$id": "68dcdfc0000a6ec23da2",
        //     "$sequence": 3,
        //     "$createdAt": "2025-10-01T08:01:10.828+00:00",
        //     "$updatedAt": "2025-10-01T08:01:10.828+00:00",
        //     "$permissions": [],
        //     "$databaseId": "68dcb3a200165fc13ff8",
        //     "$tableId": "prism_class_12"
        // }
    ]



    return (
        <div>
            <Question 
                question={data.Question}
                option1={data.Option1}
                option2={data.Option2}
                option3={data.Option3}
                option4={data.Option4} 
            />
        </div>
    )

}



export default TestMobile;