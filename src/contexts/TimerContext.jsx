import { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext(null);

const useTimer = () => useContext(TimerContext);

const TimerProvider = ({children}) => {

    const [timerStatus, setTimerStatus] = useState("");
    const [timerValue, setTimerValue] = useState('');
    const [timerId, setTimerId] = useState('');

    const startTimer = () => {
        setTimerValue(timerValue);
        const newTimerId = setInterval(()=>{
            setTimerValue((prev)=>prev-1)
        },1000)
        setTimerId(newTimerId);
    }

    const stopTimer = () => {
        clearInterval(timerId);
        setTimerValue(0);
    }

    const pauseTimer = () => {
        clearInterval(timerId);
    }

    const resumeTimer = () => {
        startTimer();
    }

    useEffect(()=>{
        if(timerValue<1){
            setTimerStatus("STOP")
        }
    },[timerValue])

    useEffect(()=>{
        switch (timerStatus) {
            case "START":
                startTimer();
                break;
            case "STOP":
                stopTimer();
                break;
            case "PAUSE":
                pauseTimer();
                break;
            case "RESUME":
                resumeTimer();
            default:
                break;
        }
        return () => {
            clearInterval(timerId);
          };
    },[timerStatus])


    return <TimerContext.Provider value={{timerStatus, timerValue, setTimerStatus, setTimerValue}}>
        {children}
    </TimerContext.Provider>
}

export{
    TimerProvider, useTimer
}