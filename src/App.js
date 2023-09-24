import './App.css';

import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

import React, {useState} from 'react';

function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setinterv] = useState()
  const [status, setStatus] = useState(0)

  const start = () => {
    //console.log("hello")
    run();
    setInterv(setInterval(run, 10));
  }

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
    <div className="main-section">
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponent time={time}/>
          <BtnComponent start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
