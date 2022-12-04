import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState,useRef} from 'react';
import './App.css';
import Title from './components/Title';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import AllRooms from './components/AllRooms';
import Room from './components/Room';
import AddDevice from './components/AddDevice';
import Device from './components/Device';
import RoomDetails from './components/RoomDetails';
import Menu from './components/Menu';


function App() {
  //**hooks for room array and Device array**
  const [rooms,setRooms] =  useState([]); //**empty array**
  const [roomDevices,setDevices] =  useState('');
  const [chosenRoom,setChosenroom] = useState(''); //**click to open room hook**

//**adding room function**
  const addNewRoomToArr = (newRoomType,newRoomName,newRoomColor,newRoomDevices)=>{
    let tempRoom ={
      roomType: newRoomType,
      roomName: newRoomName,
      roomColor: newRoomColor,
      roomDevices: [newRoomDevices]
    }
    setRooms([...rooms,tempRoom])
    console.log(rooms);
  }

//פונקציה להוספת מוצרים
  const addNewDeviceToArr = (newRoomDevice,newRoomDeviceStatus)=>{
  var tempDevice ={
    roomDevice: newRoomDevice,
    roomDeviceStatus: false
  }
  let theRoom= rooms[chosenRoom];
  console.log(theRoom);
  console.log(newRoomDevice);

  if(theRoom.roomDevices[0] == undefined) {
    theRoom.roomDevices.splice(0);
    setDevices(theRoom.roomDevices.push(tempDevice));
  }
  else{
    setDevices(theRoom.roomDevices.push(tempDevice));
  }
  console.log(theRoom.roomDevices);
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
          <Route path='/roomDetails' element={<RoomDetails temp={rooms[chosenRoom]} showRoom={openRoomDetails} index={rooms.index} roomName={rooms.roomName} roomType={rooms.roomType} roomColor={rooms.roomColor} roomDevices={rooms.roomDevices}/>}/>
          <Route path='/add-Device' element={<AddDevice addDevices={addNewDeviceToArr} temp={rooms[chosenRoom]} roomType={rooms.roomType} roomDevices={rooms.roomDevices}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;