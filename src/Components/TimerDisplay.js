import React, {useState, useEffect} from 'react'

import TimerButtons from './TimerButtons'

export default function TimerDisplay (props) {

    // react variables
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    // let timer;


    // useEffect(() => {
    //     timer = setInterval(() => {
    //         setSeconds(seconds + 1);

    //         if (seconds === 59) {
    //             setMinutes(minutes + 1);
    //             setSeconds(0)
    //         }
    //     }, 1000)
    // })

    // react functions

    const start = () => {
        run();
        setInterval(setInterval(run, 10))
    }

    const restart = () => {
        setSeconds(0)
        setMinutes(0)
    }

    const run = () => {
        if (minutes === 0) {
          hours--
          minutes = 0
        }
        if (seconds === 0) {
          minutes--
          seconds = 0
        }
        return setTime({s:seconds, m:minutes, h:hours});
      }

    return (
        <div className="main-section">
            <div className='clock-holder'>
                <div className='stopwatch'>
                    <h1>Timer</h1>
                        <span>{hours < 10 ? "0" + hours : hours}</span> &nbsp;:&nbsp;
                        <span>{minutes < 10 ? "0" + minutes : minutes}</span> &nbsp;:&nbsp;
                        <span>{seconds < 10 ? "0" + seconds : seconds}</span> &nbsp;
                    
                        <TimerButtons 
                            restart = {restart}
                        />
                </div>
            </div>
        </div>

        // {/* <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>&nbsp;:&nbsp; */} */}
        // {/* <span>{({minutes} >= 10) ? {minutes} : "0" + {minutes}}</span>&nbsp;:&nbsp; */}
        // {/* <span>{({seconds} >= 10) ? {seconds} : "0" + {seconds}}</span>&nbsp;:&nbsp; */}
        // {/* <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>&nbsp;&nbsp; */}
    )
}