import { useForm } from 'react-hook-form';
import { Button, InputBox, authService } from '../index';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignIn(){

    const { handleSubmit, register} = useForm();
    const navigate = useNavigate();
    const [error, setError ] = useState("");
    // const [currentUser, setCurrentUser] = useState("");
    const submitLoginForm = async (data) => {
        
        const email = data.email;
        const password = data.password;
        setError("");
        try {
            const result = await authService.login({email, password});
            if (result) {
                sessionStorage.setItem("StudentDetails", JSON.stringify(result));
                sessionStorage.setItem("IsLoggedIn", true);
                navigate('/startquiz');
                console.log(result.$id);
                const user = await authService.getAccount();
                if (user) {
                    console.log(user);
                    sessionStorage.setItem("CurrentUser", JSON.stringify(user));
                }   
            }
            else {
                console.log("Login Failed");
            }
        } 
        catch (error) {

            if (error.name == 'AppwriteException') {
               
                if (error.type == 'user_invalid_credentials' ) {
                    setError("Invalid Credentials");
                }
                if (error.type == "user_session_already_exists") {
                    const user = await authService.getAccount();
                   
                    if (user) {
                        console.log(user);
                        sessionStorage.setItem("IsLoggedIn", true);
                        sessionStorage.setItem("CurrentUser", JSON.stringify(user));
                        navigate('/startquiz')
                    }
                    setError("Session Already Exists");

                } else {
                    console.log(error);
                    setError(error.type);
                }
            }
        }
    }

    const notRegistered = () => {
        navigate('/register');    
    };
    

    const isLoggedIn = sessionStorage.getItem("IsLoggedIn");
    
    if (isLoggedIn) {
        navigate('/startquiz')
    }



        return (
            <div className='p-2'>
            <form onSubmit={handleSubmit(submitLoginForm )} className='p-2'>
                <div>
                    <InputBox 
                        labelName="Username" 
                        type="text" 
                        {
                            ...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^.*?\@.*/,
                                    message: "Email is required"
                                }
                            })
                        }    
                    />
                </div>
                <div>
                    <InputBox 
                        labelName="Password" 
                        type="password" 
                        {
                            ...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^\S+/,
                                    message: "Password is required"
                                }
                            })
                        }
                    />
                </div>
                <div>
                    <Button buttonName="SignIn" type="submit" />
                </div>

            </form>
                <div className='grid grid-cols-2 py-2'>
                    <div>
                        <Button buttonName="Forgot Password?" className="bg-white text-black"/>
                    </div>
                    <div>
                        <Button 
                            buttonName="Not Registered Yet?" 
                            className="bg-white text-black"
                            onClick={notRegistered}
                        />
                    </div>
                </div>
                <div>
                    {error}
                </div>
        </div>
    )
}

export default SignIn;