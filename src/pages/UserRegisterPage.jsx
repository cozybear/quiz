
import { UserRegister, Button, InputBox } from '../index';
import { useForm } from 'react-hook-form';

function UserRegisterPage(){

    

    return(
        <div className='max-w-md min-w-100 max-h-screen min-h-100 bg-white rounded-xl'>
            <div className='p-3'>
                User Registration Page
            </div>
            <div>
                <UserRegister />
            </div>

        </div>
    )
}

export default UserRegisterPage;