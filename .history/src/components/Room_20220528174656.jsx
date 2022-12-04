import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './Style.css';
import RoomDetails from './RoomDetails';

//**this is the basic components with room name and room type as we see it in Homepage and allroom page**/
//in RoomDetails we will see all the room details-זה אמור להיפתח בלחיצה

export default function Room(props) {
  const[bgRoomColor,setRoomColor] = useState('');
  
  return (
    <Link to='/roomDetails'><div onClick={()=>{props.showRoom(props.index)}} style={{backgroundColor:props.roomColor}} className='room'>
        <img id='roomImg' src='https://static.thenounproject.com/png/125129-200.png'/>   
        <img id='roomWifiImg'src="https://www.pngkey.com/png/full/660-6603849_smart-home-connection-icon.png"/>
        <h2>Room Name:{props.roomName}</h2>
        <h3>Room Type:{props.roomType}</h3>
    </div> </Link>
  )
}
