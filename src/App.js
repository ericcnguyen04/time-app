import './App.css';

import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import TimerDisplay from './Components/TimerDisplay';

import React, {useState, useEffect} from 'react';

function App() {

  // react variables
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  // react functions
  const start = () => {
    //console.log("hello")
    run();
    setStatus(1)
    setInterv(setInterval(run, 10));
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  }

  const resume = () => start();

  // react logics
  let updatedMS = time.ms
  let updatedS = time.s
  let updatedM = time.m
  let updatedH = time.h

  const run = () => {
    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    if (updatedMS === 100) {
      updatedS++
      updatedMS = 0
    }
    updatedMS++;
    return setTime({ms:updatedMS, s:updatedS, m:updatedM, h:updatedH});
  }

  // === !! === !! Stopwatch is up !! === !! ==

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  let timer;
  useEffect(() => {

      timer = setInterval(() => {
          setSeconds(seconds + 1);

          if (seconds === 59) {
              setMinutes(minutes + 1);
              setSeconds(0)
          }
      }, 1000)
  })

  // return () => clearInterval(timer)

  return (
    <div className="main-section">
      <div className='clock-holder'>
        <div className='stopwatch'>
          <h1> Stop watch</h1>
          <DisplayComponent time={time}/>
          <BtnComponent 
            start={start}
            status = {status}
            stop = {stop}
            reset = {reset}
            resume = {resume}
          />
        </div>
      </div>

      <div className='clock-holder'>
        <div className='stopwatch'> {/* this is timer*/}
        <h1>Timer</h1>
          <TimerDisplay 
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
