import { useState } from "react";
import { useTimer } from "../contexts/TimerContext";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import styles from "./TimerContainer.module.css";

const TimerContainer = () => {

   const {timerStatus, setTimerStatus,timerValue, setTimerValue} = useTimer();
   const [timeInput, setTimeInput] = useState(0);


  return (
    <div className={styles.timerContainer}>
        <header className={styles.timerHeader}>
            <h1>Timer</h1>
        </header>
        <section className={styles.timerDisplay}>
            <TimerDisplay timeLimit={timerValue} status={timerStatus}/>
        </section>
        <section className={styles.timerInput}>
            <input 
            type='number'
            placeholder="Enter time in seconds" 
            value={timeInput} 
            onChange={(e)=>setTimeInput(e.target.value)}/>
        </section>
        <footer className={styles.timerControls}>
            <button onClick={()=>{
                setTimerValue(timeInput)
                setTimerStatus("START");
            }}>Start</button>
            <button onClick={()=>{
                setTimerValue(0)
                setTimerStatus("STOP")
            }}>Stop</button>
            <button onClick={()=>{
                setTimerStatus("PAUSE")
            }}>Pause</button>
            <button onClick={()=>{
                setTimerStatus("RESUME")
            }}>Resume</button>
        </footer>
    </div>
  )
}

export default TimerContainer;