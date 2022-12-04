import React,{useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function AddDevice(props) {
  const [roomDevice,setRoomDevice] = useState('');

  const validDevice=()=>{
      // Adding Devices validations
      if(props.temp.roomDevices.length == 5){
        alert ('ERROR');
        return false;}
      else if(props.temp.roomType != ('BathroomToilet') && roomDevice ==('Boiler')){
        alert ('ERROR');
        return false;}

      else if(roomDevice == 'StereoSystem' && props.temp.roomDevices.includes('StereoSystem')==true){
        alert ('ERROR');
        return false;}

      else{    
        props.addDevices(roomDevice);
        return true
      }
    }
    
  return (
    <div id='addingDvs'>
        <h1>Add Device to Your Room</h1>
          <form>
            <select onChange={(element)=>{setRoomProduct(element.target.value)}} className='selectproduct' id='productTypeSelect' name='product-type-select'>
              <option value="select">Please Select Device Type</option>
              <option value="ac">A/C</option>
              <option value="Boiler">Boiler</option>
              <option value="StereoSystem">Stereo System</option>
              <option value="Lamp">Lamp</option>
            </select>
            <Link to='/roomDetails'><input type="submit" onClick={validProduct}></input></Link>
          </form >
    </div>
  )
}