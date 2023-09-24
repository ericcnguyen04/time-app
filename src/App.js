import './App.css';

import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

import React, {useState} from 'react';

function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  const start = () => console.log("hello")

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
