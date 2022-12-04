import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function Product(props) {

    //hook for changing color on click
    const[bgColorOnOff,setColor] = useState('');

    const changeColor =()=>{
      if(bgColorOnOff=='')
        setColor('green')
      else{
        setColor('red')
      }
    }

  return (
    <div>
        <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='productOnOff'>{props.roomProduct}</button>
    </div>
  )
}
