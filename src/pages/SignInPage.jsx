import React from 'react';
import { Button, InputBox, SignIn } from '../index';

function SignInPage() {

    return (
        <div className='min-w-100 min-h-100 bg-white flex items-center justify-center flex-col rounded-xl'> 
            <div>
                Sign In Page
            </div>
            <div>
                <SignIn />
            </div>
        </div>
    )

}


export default SignInPage;