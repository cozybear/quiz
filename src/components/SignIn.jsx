import { useForm } from 'react-hook-form';
import { Button, InputBox, authService } from '../index';
import { useNavigate } from 'react-router-dom';

function SignIn(){

    const { handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const submitLoginForm = async (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        const result = await authService.login({email, password});
        if (result) {
            sessionStorage.setItem("StudentDetails", JSON.stringify(result));
            sessionStorage.setItem("IsLoggedIn", true);
            navigate('/startquiz');
            console.log(result.$id);
        }
        else {
            console.log("Login Failed")
        }

    }

    const notRegistered = () => {
        navigate('/register');    
    };
    

    const isLoggedIn = sessionStorage.getItem("StudentDetails");
    if (isLoggedIn) {
        navigate('/startquiz')
    }



    return (
        <div>
            <form onSubmit={handleSubmit(submitLoginForm )}>
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
        </div>
    )
}

export default SignIn;