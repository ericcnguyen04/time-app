import './App.css';

import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

import React, {useState} from 'react';

function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  const start = () => console.log("hello")

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
    if (updatedMs === 100) {
      updatedS++
      updatedMS = 0
    }
    updatedMS++;
    return setTime({ms:0, s:0, m:0, h:0});
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
