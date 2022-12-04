import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function Menu() {
  return (
    <div id='menu'>
        <Link to='/'><button className='navBtn'>Home Page</button></Link>
        <Link to='/rooms'><button className='navBtn'>All Rooms</button></Link>
        <Link to='/add-room'><button className='navBtn'>Add New Room</button></Link>
    </div>
  )
}
