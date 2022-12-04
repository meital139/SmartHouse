import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import Device from './Device';

//פה פרטי החדר המלאים, זה מה שאמור להיפתח כשנלחץ על חדר בעמוד הבית או באולרומס
export default function RoomDetails(props) {
  //יש לי בעיה עם הוספת מוצר ראשונה- הוא מופיע כ"לא מוגדר" לכן הוספתי פונקציות להתגברות על הבעיה
  const ifDeviceUndefined=()=>{
    if(props.temp.roomDevices[0] == undefined){
      props.temp.roomDevices.splice(0);
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
        
        <div id='devicesBlock' >
          <div id='devicesTitle' style={{backgroundImage: src='https://media.istockphoto.com/photos/smart-house-concept-home-automation-picture-id1172913216?k=20&m=1172913216&s=612x612&w=0&h=U2g3JM4CDugrqpFt5PJMxOLyFEQZzI7v2vuCz58Wt2A='}}>{props.temp.roomName} room's Devices:</div>

            {props.temp.roomDevices.map((val)=>{
              {ifDeviceUndefined()}
            return<Device roomDevice={val.roomDevice}/>
            })}

          <Link to='/add-device'><button id='addDeviceBtn'>Add device</button></Link>
        </div>
      </div>
    </div>
  )
}
