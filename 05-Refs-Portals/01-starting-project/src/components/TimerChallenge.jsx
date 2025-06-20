import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }){
    const dialog = useRef();
    const timer = useRef();
    const [ timerStarted, setTimerStarted ] = useState(false);
    const [ timerExpired, setTimerExpired ] = useState(false);

    async function handleStart(){
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            console.log(timerExpired)
            dialog.current.open();
        }, targetTime * 1000);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    return(
        <>
            {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result={'lost'} />}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime>1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge 
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running..' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}