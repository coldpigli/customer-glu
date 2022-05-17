import React from 'react'
import getFormattedTimeString from '../utils/timerUtils'

const TimerDisplay = ({status, timeLimit}) => {

  return (
    <div>
        <h1>{getFormattedTimeString(timeLimit)}</h1>
    </div>
  )
}

export default TimerDisplay