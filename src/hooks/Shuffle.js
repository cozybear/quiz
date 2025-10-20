import { useEffect, useState } from "react";

function Shuffle(inputArray, outputArrayLength) {
    // const [outputArray, setOutputArray] = useState([]);
    var outputArray = [];
        // console.log(`The input array is ${inputArray}`)
        const arrayLength = inputArray.length;
        
        if (arrayLength < outputArrayLength) {
            // console.log("Input array length must be greater or equal to output array length requested");
            return "Input array length must be greater or equal to output array length requested";
        }
        else {
            for ( let currentIndex = 0; currentIndex < arrayLength; currentIndex = currentIndex+1) {        
                let currentIndexValue = inputArray[currentIndex];     
                let randomIndex = Math.round(Math.random()* currentIndex);
                let randomIndexValue = inputArray[randomIndex];
                inputArray[currentIndex] = randomIndexValue;
                inputArray[randomIndex] = currentIndexValue;       
            }
            // setOutputArray(inputArray.splice(0, outputArrayLength));
            outputArray = inputArray.splice(0, outputArrayLength);
        }
   
        return outputArray;
}
    
export default Shuffle;
