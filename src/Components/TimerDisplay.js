import React, {useState, useEffect} from 'react'

import TimerButtons from './TimerButtons'

export default function TimerDisplay (props) {

    // react variables
    const [timer, setTimer] = useState({s:45, m:0, h:1})
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)

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
        setStatus(1)
        setInterv(setInterval(run, 10))
    }

    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    }

    const restart = () => {
        clearInterval(interv)
        setStatus(0)
        setTimer({s:0, m:0, h:0})
    }

     // react logics
    let updatedS = timer.s
    let updatedM = timer.m
    let updatedH = timer.h

    const run = () => {
        // if (hours === 0) {
        //   hours--
        //   minutes = 0
        // }
        if (timer.m === 0) {
          timer.h--
          timer.m = 59
        //   minutes = 0
        }
        if (timer.s === 0) {
          timer.m--
          timer.s = 59
        //   seconds = 0
        }
        return setTimer({s:updatedS, m:updatedM, h:updatedH});
      }

    return (
        <div className="main-section">
            <div className='clock-holder'>
                <div className='stopwatch'>
                    <h1>Timer</h1>
                        <span>{timer.h < 10 ? "0" + timer.h : timer.h}</span> &nbsp;:&nbsp;
                        <span>{timer.m < 10 ? "0" + timer.m : timer.m}</span> &nbsp;:&nbsp;
                        <span>{timer.s < 10 ? "0" + timer.s : timer.s}</span> &nbsp;
                    
                        <TimerButtons 
                            restart = {restart}
                            start = {start}
                            stop = {stop}
                            status = {status}
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