import React, { useState, useEffect } from 'react';

const WorkTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    let interval: number | undefined;
    if (isActive) {
      interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      window.clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds])

  useEffect(() => {
    localStorage.setItem('work-time', seconds.toString());
  }, [seconds]);

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);
  const handleReset = () => {
    setSeconds(0)
    setIsActive(false)
    localStorage.removeItem('work-time')
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const displayMinutes = minutes % 60
    const displaySeconds = seconds % 60
    return `${hours}:${displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}:${displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}`;
  }

  return (
    <div className="timer">
      <h1>{formatTime(seconds)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )

}

export default WorkTimer