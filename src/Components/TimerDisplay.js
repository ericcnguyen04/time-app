import React, {useState, useEffect} from 'react'

export default function TimerDisplay (props) {

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
        })
    })

    return () => clearInterval(timer)

    return (
        <div>
        <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
        <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
        <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
        <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>&nbsp;&nbsp;
        </div>
    )
}