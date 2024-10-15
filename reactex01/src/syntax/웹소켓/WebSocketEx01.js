import { io } from 'socket.io-client';
import styled from 'styled-components';
import { useState, useEffect } from 'react';



const QuestionAllWrapper = styled.div`
margin: 0 auto;
max-width: 720px;
max-height: 990px;
height: 990px;

display: flex;
flex-direction: column;

  & .header{
    background: #FFF0F1;
    border-radius: 7px;
    padding: 20px 41px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #FF5862;
  }


  & .chatarea{

    overflow: auto;
    height: 85%;
    /* background-color: red; */

    & .chatinfo{
      height: 100%;
      padding: 20px 20px;
      /* background-color: black; */



      & .me{
    display:flex;
    justify-content: end;
  
      }  
     
      & .other{
        display:flex;
        justify-content:start;
  
        }  

    & .messagearea{
      display: flex;
      flex-direction: column;

  & .massageconten{
   
      margin-bottom: 5px;
      max-width: 120px;
      background: #FF5862;
    border-radius: 7px;
    padding: 20px 50px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;   
    color: #FFFFFF;

  }

    } 
        
    }


  }

  & .submitarea{
    height: 15%;
    background-color: yellow;

  }


`





export const WebSocketEx01 = () => {

  let [myvalue, setMyValue] = useState(null);
  let [othervalue, setOthervalue] = useState(null);


  let [allmessage, setAllmessage] = useState([]);

  let [cntcheck, setCntcheck] = useState(false);
  let [mysocket, setMysocket] = useState(null);

  // let [chatlist, setchatlist] = useState(new Array());
  // let [mychatlist, setmychatlist] = useState(new Array());

  var value;

  useEffect(() => {
    let socket = io.connect('http://localhost:4000');

    socket.on('message', (data) => {

      if (socket.connected) {
        setCntcheck(true);
        setMysocket(socket);
      }

    });
  },
    [])





  const TextChange = () => {
    value = document.getElementById('text').value;
  }

  //웹소켓으로 서버로 채팅내역을 보낸다.
  const ToServer = () => {
     console.log("value: " + value);
    value = document.getElementById('text').value;
    mysocket.emit('message', value);
   /// setMyValue(value);
      let newojb = new Object();
      let deep = [...allmessage];
      newojb.mee = value;      
      newojb.other = '';     
      deep.push(newojb)
      setAllmessage(deep);
  }



  //클라이언트 쪽의 웹소캣으로 서버가 주는 데이터를 듣고 상데방의 채팅내역을 받는다.
  if (mysocket != undefined && mysocket != null) {
    mysocket.on('message', (data) => {
      // console.log(data); 
      setOthervalue(data);
      let newojb = new Object();
      let deep = [...allmessage];
      newojb.mee =null;
      //위에 스테이트 set 함수가 있지만 if문 자체가 끝나야 리랜더링 되는듯
      //따라서 지금은 data로 담자.
      newojb.other = data;
     // console.log("myvalue::  " + myvalue + " othervalue: " + othervalue)
      deep.push(newojb)
      setAllmessage(deep);
      console.log(allmessage)

    })
  }

  const ToJoinOnedayclass = () => {
    alert("선생님이 상담중입니다 잠시만 기다려주세용");
  }



  if (allmessage != undefined && allmessage != undefined) {
    allmessage.map((e) => {
      console.log(e);
    })
  }


  //밑 컴포넌트의 리턴부의 map에서 반복적으로 호출할 채팅내역을 담는 함수
  let Showlist = (e) => {

    let chatlist = new Array();

    // console.log((e.me!=undefined)+ " "+(e.other!=''))

    for (let key of Object.keys(e)) {
      // console.log('other:  ' + key);

      if (key == 'mee') {

        if (e[key] == null) { }
        else {
          let today = new Date(); 
          chatlist.push(
            <div className='me'>
              <div className='messagearea'>
                <div className='messageheader'>나</div>
                <div className='massageconten'> {e[key]}</div>
                <div className='time'>{today.toLocaleTimeString()}</div>

              </div>
            </div>);
        }



      } else if (key == 'other') {

        if (e[key] == '' || e[key] == '') {

        } else {



let today = new Date(); 
          chatlist.push(
            <div className='other'>
             <div className='messagearea'>
                <div className='messageheader'>상대방</div>
                <div className='massageconten'> {e[key]}</div>
                <div className='time'>{today.toLocaleTimeString()}</div>

              </div>
            </div>);
        }

      }


    }
    return chatlist;

  }




  return (
    <>
      <QuestionAllWrapper className='QuestionAllWrapper'>
        <div className='header'><h2>선생님질문방</h2></div>
        <div className='chatarea'>

          <div className='chatinfo'>

            {allmessage.map((e, idx) => {
              return Showlist(e);
            })}
            
          </div>

        </div>

        {cntcheck ?
          <>
            <div className='submitarea'>
              <button id='toserver' onClick={ToServer}>서버로전송</button>
              <input id='text' onChange={TextChange}></input>
            </div>
          </>

          : <>
            <button onClick={ToJoinOnedayclass}>연결지연중입니다.</button>
          </>}

      </QuestionAllWrapper>









    </>
  );
}