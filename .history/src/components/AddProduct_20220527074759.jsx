import React,{useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function AddProduct(props) {

  const [roomProduct,setRoomProduct] = useState('');
  // const roomProduct = useRef('');

  const validProduct=()=>{
    setRoomProduct(roomProduct);
    props.addProds(roomProduct);
    // props.theRoom.roomProducts.addProds(roomProduct);
    return true
    }

  return (
    <div>
        <h1>Add Product to Your Room</h1>
        {/* <select ref={roomProduct} className='selectproduct' id='productTypeSelect' name='product-type-select'> */}
            <select onChange={(element)=>{setRoomProduct(element.target.value)}}className='selectproduct' id='productTypeSelect' name='product-type-select'>
              <option value="select">Please Select Product Type</option>
              <option value="ac">A/C</option>
              <option value="Boiler">Boiler</option>
              <option value="Stereo System">Stereo System</option>
              <option value="Lamp">Lamp</option>
            </select>
            <Link to='/roomDetails'><button onClick={validProduct} id='prodBtn'>Add Product</button></Link>
    </div>
  )
}

//save validation for later
      // if(
      //   props.temp.products.indexOf('StereoSystem') > 0){
      // alert ('ERROR');
      // }
      // else if(props.temp.roomType != ('BathroomToilet') && props.temp.products==('Boiler')){
      //   alert ('ERROR');
      // }
      // else if(props.temp.products.length == 5){
      //   alert ('ERROR');
      // }
      // else{    
      //   {props.temp.products.addProds(roomProduct)};
      //   return true
      // }