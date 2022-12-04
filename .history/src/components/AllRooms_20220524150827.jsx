import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import Room from './Room';

export default function AllRooms(props) {
  return (
    <div id='allRoomsCont'>
        {props.arr.map((val,i)=>{
          return<Room showRoom={props.showRoom} index={i} roomName={val.roomName} roomType={val.roomType} roomColor={val.roomColor} roomProducts={val.roomProducts}/>
        }
        )}
    </div>
  )
}
