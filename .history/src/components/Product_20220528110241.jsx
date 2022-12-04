import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function Product(props) {

    //hook for changing color on click
    const[bgColorOnOff,setColor] = useState('');

    const changeColor =()=>{
      if(props.productStatus =='false')
        setColor('red')
      else{
        setColor('green')
      }
    }

  return (
    <div>
        <button onClick={()=>{setColor(!false)}} style={{backgroundColor:bgColorOnOff}} id='productOnOff'>{props.roomProduct}</button>
        {changeColor}
    </div>
  )
}
