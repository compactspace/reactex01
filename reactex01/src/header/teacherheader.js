import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
// import {changeauthtoken} from '../store/store'

import { useNavigate, useLocation } from 'react-router-dom';

export const HeaderWrapper = styled.div`

border-bottom:${(props) => {
        if (props.myinfobtn) {

            return '1px solid #ebebeb';
        } else {
            return 'none';
        }
    }};

    z-index: 92;
    position:${(props) => {


        if (props.myreservepage) { return 'relative'; }
        else {
            return 'fixed';
        }

    }};

    height: 75px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${props => {



        if (props.vmatch == "true") {
            return "white";
        } else {

            return '';
        }

    }
    };



    
    
    
`;



export const HeaderGrid = styled.div`

${(props) => props.match == "true" ? css`

width: 90%;
    margin: 0 auto;
display: grid;
     grid-template-rows: 100%;
    grid-template-columns: auto 180px;
    align-items: center;

`:
        css`

width: 90%;
    margin: 0 auto;
display: grid;
     grid-template-rows: 100%;
    grid-template-columns: 15% auto 180px;
    align-items: center;


`


    }

`;






export const LeftCol = styled.div`
height: 50px;
${(props) => props.match == "true" ? css`
background-color: yellow;
display: none;
`:
        css`
/* background-color: red; */
display: block;
`


    }

`;


export const CenterColNav = styled.div`
/* background-color: black; */




height: 50px;
`;

export const Navul = styled.ul`
width: 100%;
display:inline-block;



${(props) => props.match == "true" ? css`

padding: 0;

`:
        css`

`


    }






`;

export const Navulli = styled.li`

.findoutclass{
    background-image: linear-gradient(256deg, #8094ff 30%, #ff5862);

}
   

${(props) => props.vmatch == "true" ? css`
    
    &  a{
        color: black;
    padding-bottom: 3px;
    font-weight: 600;
    text-decoration: none;
    font-size: 18px;
}
    

        `: css``};





${(props) => props.vmatch == "true" ?
        css`
 display:inline-block;
margin-left: 30px;
 li{
    color :black; 
 
    padding-bottom: 3px;
    font-weight: 600;
    text-decoration: none;
    font-size: 18px;
  
}
 
 `
        :
        css`
 display:inline-block;
margin-left: 30px;
>a{
    color :rgb(255, 255, 255); 

    padding-bottom: 3px;
    font-weight: 600;
    text-decoration: none;
    font-size: 18px;
    
}
 `
    } 





`;






export const RightCol = styled.div`
/* 햄버거바 대체로, css 주석처리하자. */
/* ${(props) => props.vmatch ? css`

height: 50px;
  a{
    color :rgb(255, 255, 255); 
  

padding: 7px 25px;
font-weight: 600;
text-decoration: none;
font-size: 18px;    
    border: 1px solid #fff; 
    border-radius: 7px;
    background-color: #8094ff;

}


`
        :

        css`
height: 50px;
  a{
    color :rgb(255, 255, 255);   

padding: 7px 25px;
font-weight: 600;
text-decoration: none;
font-size: 18px;    
    border: 1px solid #fff; 
    border-radius: 7px;
}

`} */
height: 50px;
& .RigthNavul{

& .mypagewrapper{
    & .mypagearea{
        /* 버튼 클릭시에만 blockㅇ,로 바꾼다. */
        
        ${(props) => props.myinfobtn ? css`

display: block;

`:
        css`
        display: none;

`


    }

        max-width: 320px;
        position: absolute;
        //위치 확인용 강제 height 임
        //height: 100vh;
        
        background-color: white;

        width: 320px;
    right: 130px;
    border-radius: 4px 4px 4px 4px;





    }

//인포박스
    & .myinfoarea{
      
    width: 320px;
}


& .myinfobox{
    padding-top: 12px;
    padding-left: 16px;
    padding-right: 16px;
}

& .myreservearea{
    /* padding-top: 6px;
    padding-bottom: 6px;
    border-top-width: 1px;     */
    /* border-color: rgb(245 245 245 / var(--tw-border-opacity)); */

}

& a{
    display: flex;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0px;
    font-weight: 500;   
    }


& .mylist{
    padding: 12px 16px;
}

/* 주의! 스크롤 내릴씨 여기다가 프롭스로 폰트 컬러를 블랙으로 맞추어 줄것 */
& #myinfobtn{
    border:none;
    background-color: transparent;
    font-size: 18px;
    color:black;
    
   
}

& #myalertinfobtn{
    display: inline-block;
    position: relative;
}




& #actionSheet {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    transition: 1s;

    /* 서서히 나타나는 효과 */
    visibility: hidden;
    opacity: 0;
  }

  & #actionSheet.active {
    /* 서서히 나타나는 효과 */
    visibility: visible;
    opacity: 1;
  }

  & .action-options {
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* 세로 컨텐츠가 늘어나는 경우 스크롤이 생기도록 설정 */
    overflow: auto;

    max-height: 300px;
    /* 아래에서 위로 나타나는 효과, max-height과 동일하게 작성 */
    position: relative;
    bottom: -300px;

    transition: 1s;
  }
  & #actionSheet.active .action-options {
    /* 아래에서 위로 나타나는 효과, max-height과 동일하게 작성 */
    bottom: 0;
  }

  & .option {
    display:flex;
   justify-content:space-between; 
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    & .confirm{
        width: 100px;
        display: flex;
        justify-content: space-between;
    }

  }


  & .close {
    text-align: center;
    
  }

  &  .option:hover {
    background-color: #f2f2f2;
  }







}



}






`

    ;



export const Alert = styled.div`


    position: fixed;
    top: 75px;
    width: 50%;
    right: -1600px;
    z-index: 22;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: right 1s;    

    & h3{
        text-align: center;
        margin: 0px 0px;
    }

    &.aleropen{
        right: 0px;
    }
    


        & .alertarea{
        display:flex;
        flex-direction:column;
        padding:10px 10px;    


             & .alertlist{                 
                padding:10px 10px; 

            & .alerttarget{
            display:flex;
            width: 100%;
            justify-content:space-between;

                & .alertconfirm{
                display:flex;
                justify-content: space-between;
                width: 100px;
                    & div{

                    }
            }
        }

    }

}


`


export const TeaCherHeader = (props) => {

    // console.log(props);

    let teacher = window.localStorage.getItem("teacher")

    let [teachersocket, setTeachersocket] = useState();
    let [chatlist, setChatList] = useState(new Array());   
    useEffect(() => {
        let socket = io('http://localhost:5000/forteacheralter');
        setTeachersocket(socket);

    },
        [])

    //여기는 리랜더링이 이상하게 된다.
    // 콜백 속에서 setChaiList 때문에 리랜더링은 팩트이고, 한번 리랜더링 된다.
    //허나.. 콜백 속 자체에선 이상하게 로그가 클라이언트 쪽에서 요청한 횟수가 누적되어 찍힌다.
    //또 이상한건, 백단에서 socket 접속자 채크해도 그대로인디.. 암튼 우선 어려우니 넘기고 그냥 한다.
    if (teachersocket != undefined && teachersocket != null) {
        teachersocket.on('chatsubmit', (data) => {
            let newobj = new Object();
            let deep = [...chatlist];
          
            if (!data.connection) {
                console.log(data);
                let i = 0;              
                let key = "socketid"
                for (let obj of chatlist) {            
                    if (obj[key] == data.socketid) {
                        deep.splice(i, 1);
                        console.log(deep);
                    }
                    i++;
                }
                setChatList(deep);
                return;
            }


            console.log(data);
            newobj.id = data.id;
            newobj.onedayclass_num = data.onedayclass_num;
            newobj.connection = data.connection;
            newobj.socketid = data.socketid;
            

            deep.push(newobj);
            setChatList(deep);
        });
    }
    //process.evn 이 있는데 당황하지 말고
    //노션가서 dotenv 을 검색하라.
    //결론적으로 현재 프로젝트자체 ReactEX01 의 최하단의  .env 파일을 보라.

    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디

    const REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI // Callback URL

    const STATE = "flase";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=http://localhost:3000/LoginLoadingComponent`;
    const NaverLogin = () => {
        //어쩔수 없다. 우선 네이버 에이피아이 호출시 기록에 남기지 않도록 replace 로 하자 이는 캐쉬에 쌓이지 않는다.
        // 그다음 콜백 url이 LoginLoadingComponent 인데 거기서도 
        //replace 로 기록에 남기지 않을 것이다..
        //이게 뒤로가기 막기 최선임..
        window.location.replace(NAVER_AUTH_URL);

    };

    const location = useLocation();

 

    let naviegate = useNavigate();
    useEffect(() => {
    }, [location])
    const NaverLogOut = () => {
        localStorage.clear();      
        naviegate('/main')
    }
    //    let dispatch=useDispatch();    
    let authtoken = localStorage.getItem("token")
    return <>
        <HeaderWrapper vmatch={props.vmatch} myinfobtn={props.myinfobtn} myreservepage={props.myreservepage} className='HeaderWrapper'>
            < HeaderGrid match={props.match} className='HeaderGrid'>
                <LeftCol vmatch={props.vmatch} match={props.match} className='LeftCol'>
                    {authtoken == null ? <>
                        <Navul>
                            <Navulli vmatch={props.vmatch} className='Navulli'>
                                <a onClick={NaverLogin}>로그인하기</a>
                            </Navulli>
                            <Navulli vmatch={props.vmatch} className='Navulli'>
                                <a onClick={() => { naviegate('/testjoin') }}>테스트로그인</a>
                            </Navulli>

                        </Navul>
                    </> : <>
                        <Navul>
                            <Navulli vmatch={props.vmatch} className='Navulli' >
                                <a onClick={NaverLogOut}>로그아웃</a>

                            </Navulli>
                        </Navul>
                    </>}


                </LeftCol>
                <CenterColNav vmatch={props.vmatch} >
                    <Navul match={props.match} >
                        <Navulli vmatch={props.vmatch} className='Navulli' >
                            <a href='/'>서비스를소개해요</a>
                        </Navulli>
                        <Navulli vmatch={props.vmatch} className='Navulli' >
                            <a href='/'>새소식</a>
                        </Navulli>                       
                    </Navul>
                </CenterColNav>
                <RightCol vmatch={props.vmatch} myinfobtn={props.myinfobtn} className='RightCol'>
                    <Navul className='RigthNavul'>
                        <Navulli className='mypagewrapper'>
                          
                            <button id='myinfobtn' onClick={() => {
                                // naviegate('/mypage')
                                alert("원데이클래스 페이지 관리 아직 않만듬 ㅎ")

                            }}>예약관리하기</button>
                            {teacher != null ?
                                <>

                                    <button id='myinfobtn' onClick={() => {
                                        // document.getElementById("actionSheet").classList.add("active");
                                        document.getElementById("alert").classList.add("aleropen");
                                    }}>알림 </button>

                                    <div className="action-sheet" id="actionSheet" onClick={() => {
                                        document.getElementById("actionSheet").classList.remove("active");

                                    }}>
                                        <div className="action-options">
                                            <div className="close" onClick={() => {
                                                document.getElementById("actionSheet").classList.remove("active");
                                            }}><div>상담신청 접기</div>
                                                {chatlist != null ? <>

                                                    {chatlist.map((e) => {
                                                        return <div className="option" ><div>신청자: {e.id}</div>
                                                            <div className='confirm'>
                                                                <div onClick={() => {

                                                                    teachersocket.emit('confirm', 1);
                                                                    // 선생님 로그인은 백단의 설정과   pages/TestLogin.js  컴포에서
                                                                    //필요한걸 로컬스토리지에 저장해놨음
                                                                    let onedayclass_num = window.localStorage.getItem("onedayclass_num");
                                                                    let studentid = e.id;
                                                                    naviegate('/qna/' + onedayclass_num + "/" + studentid)
                                                                }}

                                                                >수락</div>
                                                                <div onClick={() => {
                                                                    teachersocket.emit('confirm', -1);
                                                                }}
                                                                >거절</div>
                                                            </div>

                                                        </div>

                                                    })}
                                                </> : <></>}
                                            </div>
                                        </div>
                                    </div>
                                </> : <></>}                       

                        </Navulli>
                    </Navul>

                </RightCol>
            </HeaderGrid>
        </HeaderWrapper>
        <Alert className='AlertWrapper' id='alert'>
            {teacher != null ?
                <>
                    <h3 onClick={() => {
                        document.getElementById("alert").classList.remove("aleropen");

                    }}>접기</h3>
                    <div className='alertarea'>

                        {chatlist.map((e) => {

                            return (
                                <>
                                    <div className='alertlist'>
                                        <div className="alerttarget">
                                            <div className='alertname'>
                                                이름:{e.id}
                                            </div>
                                            <div className='alertconfirm'>
                                                <div
                                                    onClick={() => {
                                                        teachersocket.emit('confirm', 1);
                                                        // 선생님 로그인은 백단의 설정과   pages/TestLogin.js  컴포에서
                                                        //필요한걸 로컬스토리지에 저장해놨음
                                                        let onedayclass_num = window.localStorage.getItem("onedayclass_num");
                                                        let studentid = e.id;
                                                        naviegate('/qna/' + onedayclass_num + "/" + studentid)
                                                    }}

                                                >수락</div>
                                                <div
                                                    onClick={() => {
                                                        teachersocket.emit('confirm', -1);
                                                    }}

                                                >거절</div>
                                            </div>
                                        </div>

                                    </div>




                                </>

                            );

                        })}


                    </div>




                </> : <></>}


        </Alert>
    </>;
}

