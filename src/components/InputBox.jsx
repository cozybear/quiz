import React from 'react';


function InputBox({
    labelName, 
    id,  
    type, 
    className,
    onChange,
    ...props
    }
 ){

    return (
        <div>
            <label  className={`w-full ${className}`}> {labelName}   </label>
            <input id={id}
                type={type}
                htmlFor={id} 
                className={`w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-m text-gray-900 focus: border-blue-500 focus:ring-blue-500 ${className}`} 
                onChange={onChange} 
                {...props}
                />
        </div>
    )

}


export default InputBox;