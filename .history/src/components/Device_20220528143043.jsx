import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function Device(props) {

    //hook for changing color on click
    const[bgColorOnOff,setColor] = useState('');
    const[RoomDeviceStatus,setOnOff] = useState(false);

    // const changeColor =()=>{
    //   if(bgColorOnOff=='green')
    //     setColor('red')
    //   else{
    //     setColor('green')
    //   }
    // }

    const changeColor =()=>{
      if(RoomDeviceStatus==true)
        setColor('red')
      else{
        setColor('green')
      }
    }

  return (
    <div>
        {/* <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='deviceOnOff'>{props.roomDevice}</button> */}
        <button onClick={()=>{setOnOff(!RoomDeviceStatus)}} style={{backgroundColor:bgColorOnOff}} id='deviceOnOff'>{props.roomDevice}</button>
        {changeColor}
    </div>
  )
}
