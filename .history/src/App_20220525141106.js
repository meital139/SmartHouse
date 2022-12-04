import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import AllRooms from './components/AllRooms';
import Room from './components/Room';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import RoomDetails from './components/RoomDetails';
import Menu from './components/Menu';


function App() {
  //hooks for room array and product array
  const [rooms,setRooms] =  useState([{roomType:'saloon', roomName: 'salon1' , roomColor: 'darkturquoise',roomProducts: ['boiler' , 'stereo']}]);
  // const [roomProducts,setProducts] =  useState('');
  const [chosenRoom,setChosenroom] = useState(''); //click to open room hook

  const addNewRoomToArr = (newRoomType,newRoomName,newRoomColor,newRoomProducts)=>{
    let tempRoom ={
      roomType: newRoomType,
      roomName: newRoomName,
      roomColor: newRoomColor,
      roomProducts: newRoomProducts
    }
    setRooms([...rooms,tempRoom])
    console.log(rooms);
  }

//פונקציה להוספת מוצרים
  const addNewProductToArr = (newRoomProducts)=>{
    // setProducts(rooms[chosenRoom].roomProducts.push(tempProduct));
    rooms[chosenRoom].roomProducts.push(newRoomProducts)
    console.log(rooms[chosenRoom].roomProducts);
  }
  //איך לקשר את המוצר לחדר עצמו.?
  
  const openRoomDetails = (index)=>{
    setChosenroom(index);
  }

  return (
    <div className="App">
      <Title/>
      <BrowserRouter> 
    {/* //האם פה לשים תפריט ניווט? לשאול את אוהד */}
      <Menu/>
        <Routes>
          <Route path = '/' element = {<HomePage arr={rooms} showRoom={openRoomDetails}/>} />         
          <Route path='/add-room' element={<AddRoom add={addNewRoomToArr}/>}/>
          <Route path='/rooms' element={<AllRooms showRoom={openRoomDetails} arr={rooms}/>}/>
          <Route path='/room' element={<Room index={rooms.index} roomName={rooms.roomName} roomType={rooms.roomType} roomColor={rooms.roomColor} roomProducts={rooms.roomProducts}/>}/>
          <Route path='/roomDetails' element={<RoomDetails temp={rooms[chosenRoom]} showRoom={openRoomDetails}  index={rooms.index} roomName={rooms.roomName} roomType={rooms.roomType} roomColor={rooms.roomColor} roomProducts={rooms.roomProducts}/>}/>
          
          {/* <Route path='/add-Product' element={<AddProduct addProds={addNewProductToArr} temp={rooms[chosenRoom]} roomType={rooms.roomType} products={rooms.roomProducts}/>}/> */}
          {/* <Route path='/add-Product' element={<AddProduct addProds={addNewProductToArr}/>}/> */}
          <Route path='/product' element={<Product products={rooms.roomProducts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// create class for products with method of adding products
// class Room{
//   roomName = '';
//   roomType = '';
//   roomColor= '';
//   products = [];

//   constructor(roomName,roomType,roomColor){
//     this.roomName = roomName;
//     this.roomType = roomType;
//     this.roomColor = roomColor;

//     this.addingProducts();
//   }

//   addingProducts(){
//     if(this.products.length < 5){
//       insertProduct();
//     }
//     else{
//       alert('error');
//       return false;
//     }
//   }
// }