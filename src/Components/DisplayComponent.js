import '../App.css'

import React, {useState} from "react";

import BtnComponent from "./BtnComponent";

function DisplayComponent() {
    
  // // react variables
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

  return (
    <div>
      <div className="main-section">
       <div className='clock-holder'>
         <div className='stopwatch'>
           <h1> Stop watch</h1>
            <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
            <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
            <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
            <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>&nbsp;&nbsp;
           <BtnComponent 
             start={start}
             status = {status}
             stop = {stop}
             reset = {reset}
             resume = {resume}
           />
         </div>
       </div>

      </div>
    </div>
  );
}

export default DisplayComponent;
