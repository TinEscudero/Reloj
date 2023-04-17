import React, { useEffect, useState } from 'react'

export default function Cronometro(){

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
      let interval = null;

      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, [timerOn]);
    return (
      <div className="clock">
        <p>CRONÓMETRO</p>
        <h2>{time}</h2>
        <div className='fuera'></div>
        <button className='boton1' onClick={() => setTimerOn(true)}>Start</button>
        <button  className= "boton2" onClick={() => setTimerOn(false)}>Stop</button>
        <button className= "boton3" onClick={() => setTimerOn(true)}>Resume</button>
        <button className= "boton4" onClick={() => setTime(0)}>Reset</button>
      </div>
    );

};