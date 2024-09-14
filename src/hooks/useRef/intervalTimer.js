import React, { useState, useRef, useEffect } from 'react';

function IntervalTimer() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(); // Create a ref to store the interval ID
    console.log("IntervalTimerIntervalTimerIntervalTimer");

    useEffect(() => {
        console.log('useEfffet----useRedIntervalTimer');
        intervalRef.current = setInterval(() => {
            console.log("interval------")
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(intervalRef.current);
    },[]); // Empty dependency array means this runs once when the component mounts

    return (
    <div>Seconds Elapsed: {seconds}
    <p>{intervalRef.current }</p>
    </div>
    )
}

export default IntervalTimer;
