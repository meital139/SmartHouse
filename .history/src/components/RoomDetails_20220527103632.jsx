import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import Product from './Product';

//פה פרטי החדר המלאים, זה מה שאמור להיפתח כשנלחץ על חדר בעמוד הבית או באולרומס

export default function RoomDetails(props) {
  const prodValid=()=>{
    if(props.temp.roomProducts[0] == undefined){
      props.temp.roomProducts.splice(0);
    }
  }

  return (
    <div>
        <div style={{backgroundColor: props.temp.roomColor}} className='room'>     
        <img id='roomImgDt' src='https://static.thenounproject.com/png/125129-200.png'/>   
        <img id='roomWifiImgDt'src="https://www.pngkey.com/png/full/660-6603849_smart-home-connection-icon.png"/> 
        <h2>Room Name:{props.temp.roomName}</h2>
        <h3>Room Type:{props.temp.roomType}</h3>
        <h3>Room color:{props.temp.roomColor}</h3>

        {props.temp.roomProducts.map((val)=>{
              {prodValid()}
          return<Product roomProduct={val.roomProduct}/>
        })}

        <Link to='/add-Product'><button id='addProdBtn'>Add Product</button></Link>
    </div>
    </div>
  )
}
