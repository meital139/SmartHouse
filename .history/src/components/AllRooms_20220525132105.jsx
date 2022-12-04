import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import Room from './Room';

export default function AllRooms(props) {
  return (
    <div id='allRoomsCont'>
      <h1>All your Smart rooms</h1>
        {props.arr.map((val,i)=>{
          return<Room key={i} showRoom={props.showRoom} index={i} roomName={val.roomName} roomType={val.roomType} roomColor={val.roomColor} roomProducts={val.roomProducts}/>
        }
        )}
    </div>
  )
}
