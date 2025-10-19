import React from 'react';

function Button({buttonName, onClick, type, disabled, className, hidden}) {

// "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"

    
    return (
        <div>
            <button className={`w-full bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 ${className}` } 
            onClick={onClick} 
            type={type} 
            disabled={disabled}
            hidden={hidden}
            value={buttonName}
            >
                {buttonName}
            </button>
        </div>
    )

}

export default Button;
