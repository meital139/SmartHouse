import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import Device from './Device';

//**here will be all roomd details- when clicking on room form hpmepage or allrooms page**/
export default function RoomDetails(props) {
  //**had big problem with 1st device, he is 'undefined', no matter what i did. so i maid this function to get over it**/
  const ifDeviceUndefined=()=>{
    if(props.temp.roomDevices[0] == undefined){
      props.temp.roomDevices.splice(0);
    }
  }

  //**in case there are 5 devices already, i wish the addButton will dissapear - my function isn't working**
  // const fiveDevices=()=>{
  //   if(props.temp.roomDevices.length == 5){
  //     {addDeviceBtn.style.property = {display:none}};
  // }}

  return (
    <div id='roomDetails'>
        <title>{props.temp.roomName}'s Room</title>

        <div style={{backgroundColor: props.temp.roomColor}} className='room'>     
        <img id='roomImgDt' src='https://static.thenounproject.com/png/125129-200.png'/>   
        <img id='roomWifiImgDt'src="https://www.pngkey.com/png/full/660-6603849_smart-home-connection-icon.png"/> 
        <h2>Room Name:{props.temp.roomName}</h2>
        <h3>Room Type:{props.temp.roomType}</h3>
        <h3>Room color:{props.temp.roomColor}</h3>
        
        <div id='devicesTitle'>{props.temp.roomName} room's Devices:</div>        
        <div id='devicesBlock' >
            {props.temp.roomDevices.map((val)=>{
              {ifDeviceUndefined()}
            return<Device roomDevice={val.roomDevice}/>
            })}

          <Link to='/add-device'><button id='addDeviceBtn'>Add device</button></Link>
          {/* {fiveDevices()} */}
        </div>
      </div>
    </div>
  )
}
