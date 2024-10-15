import { io } from 'socket.io-client';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'



const QuestionAllWrapper = styled.div`
margin: 0 auto;
max-width: 720px;
max-height: 990px;
height: 890px;

display: flex;
flex-direction: column;

  & .header{
    background: #5988FE;
   // background: #FFF0F1;
    border-radius: 7px;
    padding: 20px 41px;
    font-style: normal;
    text-align: left;
    color: #FFFFFF !important;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
   // color: #FF5862;
  }


  & .chatarea{

    overflow: auto;
    height: 80%;
    background: #E9F1FE;
    /* background-color: red; */

    & .chatinfo{
      height: 100%;
      padding: 20px 20px;
      /* background-color: black; */



      & .me{
    display:flex;
    justify-content: end;
  
    & .massageconten{   
  
  background:white !important;
  color: black !important;
}


      }  
     
      & .other{
        display:flex;
        justify-content:start;
  
        & .massageconten{   
  
   background:#306afe !important;
   color: #FFFFFF !important;
}



        }  

    & .messagearea{
      display: flex;
      flex-direction: column;

  & .massageconten{
   
      margin-bottom: 5px;
      max-width: 120px;
     
    border-radius: 7px;
    padding: 20px 50px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;   
    

  }

    } 
        
    }


  }

  & .chatarea::-webkit-scrollbar{
    width: 10px;
  }
  & .chatarea::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }

  & .chatarea::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }


  & .submitarea{
    height: 20%;
   
    display: flex;
    flex-direction: column;

    & .textareaarea{
        
        height:80%;

        & .textarea{
    
            width: 100%;
            border: none;
            height: 100%;
                padding: 5px;
                box-sizing: border-box;
                /* border: solid 2px #1E90FF; */
                /* border-radius: 5px; */
                font-size: 16px;
                resize: both;
        }
    }


  & .submitbtnarea{
    justify-content: end;
    display: flex;
    height: 20%;
    align-items: center;


    & #toserver{
        border: none;
    font-size: 15px;
    background: #306afe !important;
    color: #FFFFFF !important;
    width: 70px;
    height: 30px;
    }

  }



  }


`
export const SmartPhoneQnABody = () => {


    let SmartPhoneIP=process.env.REACT_APP_SMARTPHONE_IP;


    let testid = window.localStorage.getItem("id");
    console.log("testid:  " + testid);

    let { onedayclass_num, id } = useParams();
    let [myvalue, setMyValue] = useState(null);
    let [othervalue, setOthervalue] = useState(null);


    let [allmessage, setAllmessage] = useState([]);

    let [cntcheck, setCntcheck] = useState(false);
    let [mysocket, setMysocket] = useState(null);
    let [room_num, setRoom_num] = useState(null);
    // let [chatlist, setchatlist] = useState(new Array());
    // let [mychatlist, setmychatlist] = useState(new Array());


    let navi = useNavigate();

    var value;

    //   let socket;

    useEffect(() => {
        let socket = io('http://172.30.1.24:5000/enterance');
        let newarr;
        let newobj;
        socket.emit("enterancedata", { "id": "신원찬", "onedayclass_num": 3 })
        socket.on("enterancedata", (data) => {
            console.log(data)
            setRoom_num(data.room_num);
            newarr = new Array();
            data.excute.map((content) => {
                newobj = new Object();
                if (content.writer == `${testid}`) {
                    newobj.writerMe = content.writer;
                    newobj.contentMe = content.content;
                    newobj.createdAt = content.dialogue_createdAt;
                } else {
                    newobj.writerOther = content.writer;
                    newobj.contentOther = content.content;
                    newobj.createdAt = content.dialogue_createdAt;
                }
                newarr.push(newobj);
                newobj = null;
            })
            console.log("socket.connected:  " + socket.connected);
            console.log(socket);
            if (socket.connected) {
                setCntcheck(true);
                setMysocket(socket);
            }
            // setAllmessage(newarr);
            console.log(newarr);
            setAllmessage(newarr);

        })
    }, [])

    const TextChange = () => {
        value = document.getElementById('text').value;
    }

    // const IdChange = () => {
    //     id = document.getElementById('id').value;

    // }

    //웹소켓으로 서버로 채팅내역을 보낸다.
    const ToServer = () => {
        mysocket.emit('chatstart', { value, testid, room_num });
        let newobj = new Object();
        newobj.writerMe = testid
        newobj.contentMe = value
        //  newobj.createdAt=content.dialogue_createdAt;
        let deep = [...allmessage];
        deep.push(newobj)
        setAllmessage(deep);
    }



    //클라이언트 쪽의 웹소캣으로 서버가 주는 데이터를 듣고 상데방의 채팅내역을 받는다.
    if (mysocket != undefined && mysocket != null) {
        mysocket.on('chatstart', (res) => {
            console.log(res);
            let newobj = new Object();
            newobj.writerOther = res.writerOther
            newobj.contentOther = res.contentOther
            newobj.createdAt = res.createdAt;
            let deep = [...allmessage];
            deep.push(newobj)
            setAllmessage(deep);
        })
    }

    const ToJoinOnedayclass = () => {
        alert("선생님이 상담중입니다 잠시만 기다려주세용");
    }



    //   if (allmessage != undefined && allmessage != undefined) {
    //     allmessage.map((e) => {
    //       console.log(e);
    //     })
    //   }


    //밑 컴포넌트의 리턴부의 map에서 반복적으로 호출할 채팅내역을 담는 함수
    let Showlist = (e) => {

        let chatlist = new Array();

        // console.log((e.me!=undefined)+ " "+(e.other!=''))

        for (let key of Object.keys(e)) {
            //   console.log("key:  "+key)

            if (key == 'writerMe') {

                if (e[key] == null) { }
                else {
                    let today = new Date();
                    chatlist.push(
                        <div className='me'>
                            <div className='messagearea'>
                                <div className='messageheader'>{e.writerMe}</div>
                                <div className='massageconten'> {e.contentMe}</div>
                                <div className='time'>{e.createdAt}</div>

                            </div>
                        </div>);
                }



            } else if (key == 'writerOther') {

                if (e[key] == '' || e[key] == '') {

                } else {



                    let today = new Date();
                    chatlist.push(
                        <div className='other'>
                            <div className='messagearea'>
                                <div className='messageheader'>{e.writerOther}</div>
                                <div className='massageconten'> {e.contentOther}</div>
                                <div className='time'>{e.createdAt}</div>

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
                <div className='header'>선생님질문방</div>
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
                            {/* <input id='text' onChange={TextChange}></input> */}
                            <div className='textareaarea'>
                                <textarea className='textarea' id='text' onChange={TextChange}>
                                </textarea>
                            </div>
                            <div className='submitbtnarea'>
                                <button id='toserver' onClick={ToServer}>전송</button>
                            </div>

                            <input id='id' type='hidden' value={testid}></input>
                            {/* <input id='id'   value={testid} onChange={IdChange}></input> */}
                        </div>
                    </>

                    : <>
                        <button onClick={ToJoinOnedayclass}>연결지연중입니다.</button>
                    </>}

            </QuestionAllWrapper>
        </>
    );
}