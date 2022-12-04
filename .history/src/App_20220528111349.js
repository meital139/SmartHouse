import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState,useRef} from 'react';
import './App.css';
import Title from './components/Title';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import AllRooms from './components/AllRooms';
import Room from './components/Room';
import AddProduct from './components/AddDevice';
import Product from './components/Product';
import RoomDetails from './components/RoomDetails';
import Menu from './components/Menu';


function App() {
  //hooks for room array and product array
  // const [rooms,setRooms] =  useState([{roomType:'saloon', roomName: 'salon1' , roomColor: 'darkturquoise',roomProducts: [{roomProduct:'Lamp'}]}]);
  const [rooms,setRooms] =  useState([]); //empty array
  const [roomProducts,setProducts] =  useState('');
  const [chosenRoom,setChosenroom] = useState(''); //click to open room hook

//פונקציה להוספת חדרים
  const addNewRoomToArr = (newRoomType,newRoomName,newRoomColor,newRoomProducts)=>{
    let tempRoom ={
      roomType: newRoomType,
      roomName: newRoomName,
      roomColor: newRoomColor,
      roomProducts: [newRoomProducts]
    }
    setRooms([...rooms,tempRoom])
    console.log(rooms);
  }

//פונקציה להוספת מוצרים
  const addNewProductToArr = (newRoomProduct)=>{
  var tempProduct ={
    roomProduct: newRoomProduct
  }
  let theRoom= rooms[chosenRoom];
  console.log(theRoom);
  console.log(newRoomProduct);

  if(theRoom.roomProducts[0] == undefined) {
    theRoom.roomProducts.splice(0);
    setProducts(theRoom.roomProducts.push(tempProduct));
  }
  else{
    setProducts(theRoom.roomProducts.push(tempProduct));
  }
  console.log(theRoom.roomProducts);
}

//פתיחת חדר בבלחיצה בהתאם לאינדקס שלו
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
          <Route path='/roomDetails' element={<RoomDetails temp={rooms[chosenRoom]} showRoom={openRoomDetails} index={rooms.index} roomName={rooms.roomName} roomType={rooms.roomType} roomColor={rooms.roomColor} roomProducts={rooms.roomProducts}/>}/>
          <Route path='/add-Product' element={<AddProduct addProds={addNewProductToArr} temp={rooms[chosenRoom]} roomType={rooms.roomType} roomProducts={rooms.roomProducts}/>}/>
          {/* <Route path='/product' element={<Product product={roomProducts} temp={rooms[chosenRoom]}/>}/> */}
          {/* <Route path='/room' element={<Room index={rooms.index} roomName={rooms.roomName} roomType={rooms.roomType} roomColor={rooms.roomColor} roomProducts={rooms.roomProducts}/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;