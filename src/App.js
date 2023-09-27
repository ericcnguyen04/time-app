import './App.css';

import DisplayComponent from './Components/DisplayComponent';
// import BtnComponent from './Components/BtnComponent';
import TimerDisplay from './Components/TimerDisplay';
import Home from './Components/Home';

// import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // change all of app and make home page, each stopwatch and timer should have its own page

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<DisplayComponent />} />
        <Route path="/timer" element={<TimerDisplay />} />
      </Routes>
    </BrowserRouter>

    // <div className="main-section">
    //   <div className='clock-holder'>
    //     <div className='stopwatch'>
    //       <h1> Stop watch</h1>
    //       <DisplayComponent time={time}/>
    //       <BtnComponent 
    //         start={start}
    //         status = {status}
    //         stop = {stop}
    //         reset = {reset}
    //         resume = {resume}
    //       />
    //     </div>
    //   </div>

    //   <div className='clock-holder'>
    //     <div className='stopwatch'> {/* this is timer*/}
    //     <h1>Timer</h1>
    //       <TimerDisplay 
    //         minutes={minutes}
    //         seconds={seconds}
    //       />
    //     </div>
    //   </div>

    // </div>
  );
}

export default App;
