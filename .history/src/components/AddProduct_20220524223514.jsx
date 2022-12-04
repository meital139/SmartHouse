import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './Style.css';


export default function AddProduct(props) {

  const [roomProduct,setRoomProduct] = useState('');

  const validProduct=()=>{
    {props.addProds(roomProduct)}
    // if(roomProduct.length == 5){
    // alert('ERROR')
    // }

    // else{
    //   {props.addProds(tempProduct)};

    //   return true   
    // }
  }

  return (
    <div>
        <h1>Add Product to Your Room</h1>
            <select onChange={(element)=>{setRoomProduct(element.target.value)}}className='selectproduct' id='productTypeSelect' name='product-type-select'>
              <option value="select">Please Select Product Type</option>
              <option value="ac">A/C</option>
              <option value="Boiler">Boiler</option>
              <option value="Stereo System">Stereo System</option>
              <option value="Lamp">Lamp</option>
            </select>
            <button onClick={validProduct} id='prodBtn'>Add Product</button>
    </div>
  )
}
