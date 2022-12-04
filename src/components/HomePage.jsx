import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import Room from './Room';
import AllRooms from './AllRooms';

export default function HomePage(props) {
  return (
    <div>
      <h1>HomePage</h1>
      <div id='allRooms'>
      <AllRooms arr={props.arr} showRoom={props.showRoom}/>
      </div>

      <Link to='/add-room'><button id="plusButton"></button></Link>
    
    </div>
  )
}
