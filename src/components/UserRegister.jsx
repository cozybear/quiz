
import { useNavigate } from 'react-router-dom';
import { Button, InputBox, authService } from '../index';
import { useForm } from 'react-hook-form';




function UserRegister() {

    const navigate = useNavigate();
    const { handleSubmit, register, formState: {errors} } = useForm();
    const submitRegisterForm = async (data) => {
        console.log("Form Submitted")
        console.log(data)
        const email = data.email;
        const password = data.password;
        const name = `${data.firstname} ${data.lastname}`
    
        try {
            const userCreated = await authService.createUser({email, password, name});
            if (userCreated) {
                console.log(userCreated);
                const userLogon =  await authService.login(email, password);
                console.log(userLogon);
                if (userLogon) {
                    navigate('/startquiz');
                }
                // navigate('/signin')
            }
        } catch (error) {
            return error;
        }


    };

    return (
        <div className='bg-white w-full'>
            
            <div>
                <form className='p-4' onSubmit={handleSubmit(submitRegisterForm)}>
                    <div>
                        <InputBox 
                            labelName="First Name" 
                            type="text"
                            {
                                ...register("firstname", {
                                    required: true,
                                    pattern: {
                                        value: /\S+/,
                                        message: "First Name Can't Be Empty"
                                    }    
                                })
                            }
                             />
                    </div>
                    <div>
                        <InputBox 
                            labelName="Last Name"
                            type="text"
                            {...register("lastname", {
                                required: true,
                                pattern: { 
                                    value: /\S+/,
                                    message: "Last Name Can't Be Empty"
                                }
                                })
                            } />
                    </div>
                    <div>
                        <InputBox 
                            labelName="Email" 
                            type="text"
                            {
                                ...register("email", {
                                    required: "Email is Required",
                                    pattern: {
                                        value: /^.*?\@.*/, 
                                        message: "Not a Valid Email"
                                    }                                    
                                })
                            }
                        />
                    </div>
                    <div>
                        <InputBox labelName="Password" type="password" 
                            {
                                ...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^.{8,}$/,
                                        message: "Password must be 8 characters long"
                                    }
                                })
                            }
                        />
                    </div>
                    <div className='py-3'>
                        <Button buttonName="Register" type="submit" />
                    </div>

                </form>
                <div className='flex flex-col text-red-500'>
                    <div className=''>
                        {errors.email && (
                            <p>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className=''>
                        {errors.firstname && (
                            <p>
                                {errors.firstname.message}
                            </p>
                        )}
                    </div>
                    <div className=''>
                        {errors.lastname && (
                            <p>
                                {errors.lastname.message}
                            </p>
                        )}
                    </div>
                    <div className=''>
                        {errors.password && (
                            <p>
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

};

export default UserRegister;