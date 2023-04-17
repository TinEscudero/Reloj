import React, { useEffect, useState } from 'react'


export default function Reloj (){
     const[clock, setClock]= useState();
     useEffect(()=>{
        setInterval(()=>{
            const fecha= new Date();
            setClock(fecha.toLocaleTimeString());
        }, 1000)
     },[])


  return (
    <div className='reloj'>
    <p>HORA</p>
      {clock}
    </div>
  )
}