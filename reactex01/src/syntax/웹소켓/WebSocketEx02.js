import { io } from 'socket.io-client';

import axios from 'axios';



import { useState, useEffect } from 'react';
export const WebSocketEx02 = () => {

let [cntcheck,setCntcheck]=useState(false);


  const GetSocket1 = () => {
    let socket = io.connect('http://localhost:4000');

    socket.on('message', (data) => {      
      console.log(data);
      console.log(socket);
    })


    socket.emit('message', '메세지 받아라');
  }

  const GetSocket2 = () => {
  axios.get('http://localhost:4000/fulllist');

  }


  const GetSocket3 = () => {
    let socketIORoom0 = io("http://localhost:4000/name1");

  }

  const GetSocket4 = () => {
    let socketIORoom0 = io("http://localhost:4000/name1");
  }




  return (
    <>
      <h1 onClick={GetSocket1} style={{ backgroundColor: 'red' }}>서버 소켓연결 1</h1>


      <h1 onClick={GetSocket2}>연결소켓확인</h1>

      <h1 onClick={GetSocket3}>서버 소켓연결 3</h1>
      <h1 onClick={GetSocket3}>서버 소켓연결 4</h1>
    </>
  );
}