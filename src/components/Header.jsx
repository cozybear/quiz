import React, { useEffect, useState } from 'react';
import { Button, authService } from '../index'
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();
    var storedLogin = JSON.parse(sessionStorage.getItem("IsLoggedIn")) ? true : false;
    const [isLoggedIn, setIsLoggedIn] = useState(storedLogin);
    console.log(isLoggedIn);
    
    let hideSignOut = true;
    
    useEffect( () => {
        setIsLoggedIn(JSON.parse(sessionStorage.getItem("IsLoggedIn")));
    }, [storedLogin]);
    
    const logout = async () => {
    const sessionId = JSON.parse(sessionStorage.getItem("StudentDetails")).$id;
    console.log(sessionId);
    const userLogout = await authService.logout(sessionId);
    sessionStorage.removeItem("StudentDetails");
    sessionStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
    if (userLogout) {
        navigate('/signin')
    }
    console.log(userLogout);
    }

    return (
        
        <div className='w-full flex gap-x-10 justify-between'>        
            <div className='w-1/3'>
                
            </div>
            <div className='w-1/3 text-3xl font-bold text-center'>
                The Physics Show
            </div>
            <div className="w-1/3 flex justify-end px-10">
                <Button buttonName="Sign Out" onClick={logout} hidden={!isLoggedIn}/>
            </div>
        </div>
    )
}


export default Header;