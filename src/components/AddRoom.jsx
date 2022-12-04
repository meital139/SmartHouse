import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

export default function AddRoom(props) {
  //hooks for the rooms //
  const[roomType,setRoomType] = useState('');
  const[roomName,setRoomName] = useState('');
  const[roomColor,setRoomColor] = useState('');

  const validRoom=()=>{
  if(roomName.length > 5 || roomName.length==0){
    alert ('ERROR');
  }
  else if(roomType.length == 0){
    alert ('ERROR');
  }

  else{
    console.log('ok');
    {props.add(roomType,roomName,roomColor)};
    return true
  }
}

  return (
    <div>
      <h1>Add new room to your Smart House!</h1>
          <form>
            <select onChange={(element)=>{setRoomType(element.target.value)}} className='selectRoom' id='roomTypeSelect' name='room-type-select'>
              <option value="selectRoom">Please  Choose Room Type</option>
              <option value="Bedroom">Bedroom</option>
              <option value="BathroomToilet">Bathroom\Toilet</option>
              <option value="kitchen">kitchen</option>
            </select> <br/>

            <input onChange={(element)=>{setRoomName(element.target.value)}} type='text' className='inpt' id='roomNameInpt' placeholder='Please Insert Room Name'/><br/>
            <div id='pickColor'style={{color: 'rgb(5, 5, 82)',fontWeight: 'bold', fontSize:'20px'}}>Please Choose Room Color</div>
            <input onChange={(element)=>{setRoomColor(element.target.value)}} type='color' className='inpt' id='roomColorInpt'placeholder='Please Choose Room Color'/><br/>
            <Link to='/'><input type="submit" onClick={validRoom} id='AddRoomBtn'value="Add Room"/></Link>
          </form>
    </div>
  )
}

