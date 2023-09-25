import React, {useState, useEffect} from 'react'

export default function TimerDisplay (props) {

    return (
        <div>
            <span>{props.minutes}</span> &nbsp;:&nbsp;
            <span>{props.seconds}</span>
        {/* <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>&nbsp;:&nbsp; */}
        {/* <span>{({minutes} >= 10) ? {minutes} : "0" + {minutes}}</span>&nbsp;:&nbsp;
        <span>{({seconds} >= 10) ? {seconds} : "0" + {seconds}}</span>&nbsp;:&nbsp; */}
        {/* <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>&nbsp;&nbsp; */}
        </div>
    )
}