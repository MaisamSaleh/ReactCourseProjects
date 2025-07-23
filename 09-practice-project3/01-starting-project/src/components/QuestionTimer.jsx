import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeOut, mode }){
    const [ remainingTime, setRemainingTime ] = useState(timeOut);

    useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (typeof onTimeOut === "function") {
        onTimeOut();
      }
    }, timeOut);

    return () => clearTimeout(timeoutId);
  }, []); 

    useEffect(()=>{
        const interval = setInterval(() => {
            setRemainingTime((prevTime)=> prevTime - 100);
        }, 100);

        return(()=>{
            clearInterval(interval);
        })
    }, [])

    return <progress id="question-time" max={timeOut} value={remainingTime} className={mode}/>
}