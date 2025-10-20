import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputBox, Button, authService, dbService } from '../index';
import { useNavigate, Navigate } from 'react-router-dom';



function StudentInfo() {

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {register, handleSubmit, watch} = useForm();

    const submitInfo = async (data) => {
        setError("");
        // console.log(data);
        const email = data.email;
        const firstName = data.firstname;
        const lastName = data.lastname;
        try {
            const session = await dbService.createStudent({firstName, lastName, email});
    
            if (session) {
                // console.log(session);
                sessionStorage.setItem("StudentDetails", session)
                navigate('/startquiz');
            }
            
        } catch (error) {
            if (String(error).includes("ID already exists")) {
                // dbService.getStudentIdByEmail(email);
            const studentId =  (await dbService.getStudentIdByEmail(email)).rows[0].email;
            // console.log(studentId);
            sessionStorage.setItem("StudentDetails", studentId)
                // console.log("Student Already Registered");
                navigate('/startquiz');
                // <Navigate to={"/startquiz"} />
            }
        }   
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submitInfo)} className='space-y-5'>
                <div>
                    <InputBox 
                        labelName="First Name" 
                        type="text"
                        className=""
                        {
                            ...register("firstname", {
                                required: "First Name is mandatory",
                                pattern: /\S+/, message: "First Name is required"
                            })
                        }
                    />
                </div>
                <div>
                    <InputBox 
                        labelName="Last Name" 
                        type="text"
                        className=""
                        {
                            ...register("lastname", {
                                required: "Last Name is mandatory",
                                pattern: /\S+/, message: "Last Name is required"
                            })
                        }
                    />
                </div>
                <div>
                    <InputBox 
                        labelName="Email" 
                        type="text"
                        className=""
                        {
                            ...register("email", {
                                required: "Email is mandatory",
                                pattern: /^.*?\@.*/, message: "Email is required"
                            })
                        }
                    />
                </div>
                <div>
                        <Button 
                            type="submit"
                            buttonName="Submit"
                            className="text-center text-white"
                            
                        />
                </div>

            </form>
        </div>
    )


};


export default StudentInfo;