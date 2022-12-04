import React,{useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function AddProduct(props) {
  const [roomProduct,setRoomProduct] = useState('');

  const validProduct=()=>{
      // Adding products validations
      if(props.temp.roomProducts.length == 5){
        alert ('ERROR');
        return false;}
      else if(props.temp.roomType != ('BathroomToilet') && roomProduct ==('Boiler')){
        alert ('ERROR');
        return false;}
        
      else if(roomProduct == 'StereoSystem' && props.temp.roomProducts.includes('StereoSystem')==true){
        alert ('ERROR');
        return false;}

      else{    
        props.addProds(roomProduct);
        return true
      }
    }
    
  return (
    <div id='addingProd'>
        <h1>Add Product to Your Room</h1>
          <form>
            <select onChange={(element)=>{setRoomProduct(element.target.value)}} className='selectproduct' id='productTypeSelect' name='product-type-select'>
              <option value="select">Please Select Product Type</option>
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