import React from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

//Modal이 되는 대상의 postion을 absolute로 설정하고, 화면 전체 공간을 차지할 수 있도록 width, height를 100%로 설정합니다. 
const Modalwarperr = styled.div`
display: ${(props) => props.openmodal ? "flex" : "none"};  
z-index: 1;
position: fixed;
top: 0;
left: 0;


justify-content: center;
top: 0;
left: 0;
width: 100%;
height: 100%;

background-color: rgba(0, 0, 0, 0.4);

    & .modalbox{
    position: absolute;
    top: 50%; //모달을 화면가운데 놓기위함. 


    width: 400px;  //모달의 가로크기 
    height: 600px; //모달의 세로크기 

    padding: 40px;

    text-align:center;

    background-color: rgb(255, 255, 255); //모달창 배경색 흰색
    border-radius: 10px; //테두리 
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자 

    transform: translateY(-50%); //모듈창열었을때 위치설정 가운데로 

    display: grid;
    grid-template-rows: 10% 90%;

    background-color: white;

}
    & h3{
    text-align: center;
}
    & .detaile{
    display: grid;
}

   & .detaileinfo{
    display: flex;
}

& .info{
    padding-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #797979;
}

& .titleinfo{
    color: #797979;
    font-size: 20px;
    font-weight: 600;
}


& .confirm{
        display: flex;
        justify-content: space-between;

    }


& .inputDefault{
    border:none;
    color: #797979;
    font-size: 20px;
    font-weight: 600;
}



`


export const ReservedModal = (props) => {


    //console.log(props);


    // snsuser.id='rQE_RsS0i5F8jxIgoh88swhDV1UZerijF96octiN2aM'  AND reserved.application_day='2024년 4월 7일' ;
    //필요한 변수는 현재 snsuser.id 과 reserved.application_day 임

   
    const [reserve_name, setReserve_name] = useState("예약자명을 입력해주세요");
    const [reserve_tell, setReserve_tell] = useState("연락처를 입력해주세요");

    /*
    infocheck1,
    infocheck2 는, 결제하기 버튼 누르기전, 이름과 핸드폰번호를 정확히 입력했는지 판단 해주는 state 로 Payment 메서드에서 맨처음 
    활용됨
    */
    const [infocheck1, setInfocheck1] = useState(false);
    const [infocheck2, setInfocheck2] = useState(false);

    

    var makeMerchantUid;
    useEffect(() => {
        let name = document.getElementById('reserve_name');

        let tell = document.getElementById('reserve_tell');

        name.addEventListener('click', (e) => {

            if (reserve_name != undefined) {
                e.currentTarget.value = '';
            }
            setInfocheck1(false);
        })

        tell.addEventListener('click', (e) => {

            if (reserve_name != undefined) {
                e.currentTarget.value = '';
            }


            setInfocheck2(false);
        })

        //주의할껀 change는 엔터를 해야 반영이 된다.
        name.addEventListener('change', (e) => {
            let names = e.currentTarget.value;
            setReserve_name(names);
            setInfocheck1(true);
        })


        //주의할껀 change는 엔터를 해야 반영이 된다.
        tell.addEventListener('change', (e) => {
            let tells = e.currentTarget.value;


            let result = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
            let isphon = result.test(tells);
            console.log("isphon:  "+isphon)
            if (!isphon) {
                alert("하이픈 - 없이 숫자만 입력해주세요");
                return;
            } else {

                let first = tells.substr(0, 3);
                let second = tells.substr(3, 4);
                let third = tells.substr(7, 4);
                tells = first + "-" + second + "-" + third;

                console.log(tells);
                setReserve_tell(tells);
                setInfocheck2(true);
            }

        }
        )
    }, [])

    var IMP = window.IMP;
    const IMPKEY = process.env.REACT_APP_IMPORT_KEY;

    let payforinfo;
    let infolist = document.getElementsByClassName("info");
  

//제발 읽고 코드 수정해라
//현재 코드 라인 189 부터 코드 237 까지는
// 코드라인 284의 석세스 함수의 조건문 속에 적당히 넣어야한다.
//지금 뭐..계산 보안 프로그램이 컴퓨터에 설치가 않되서 우선 지금은 백엔드 서버에서 테스트 형식으로만
//결제가 됬다는 가정하에 예약, 자리수 업데이트를 하고있다.

//더욱이 취소 로직도 짜놨는데 이건 실제로 결제 한적이 없어서 나중 보안프로그램 깔고 다시 해보자.


    const Payment = () => {
        //혹시몰라 여기서 한번더 체크
        if(props.choiceforforDB==null  || props.choiceforforDB==undefined){
            alert("날짜를 선택해주세요");
            return;
        }
        if(!infocheck1 && !infocheck2){
            alert("예약자명과 핸드폰번호 이입력은 필수입니다.");
            return;
        }

        let user_id = window.localStorage.getItem("userId");
        if(user_id==undefined || user_id==null){
            alert("로그인이 필요합니다.")
            return;
        }


       

        var today = new Date();
        var hours = today.getHours(); // 시
        var minutes = today.getMinutes();  // 분
        var seconds = today.getSeconds();  // 초
        var milliseconds = today.getMilliseconds();
        makeMerchantUid =`${process.env.REACT_APP_IMPORT_KEY}`+hours + minutes + seconds + milliseconds;

        let reserveinfodata = {
            //결제전 테스트라 그냥 asx123으로 하드코딩
            "merchant_uid": makeMerchantUid,
            //전달받은 프롭스 스테이트에서 빼와라
            "onedayclass_num": props.fordbobj.onedayclass_num,
            // 전달받은 프롭스 스테이트에서 빼와라
            "openday": props.choiceforforDB,
            //윈도우 로컬스토리지 에서 빼와라
            "id": user_id,
            // 현재의 컴포넌트 스테이트에서 빼와라
            "reserve_name": reserve_name,
            // 현재의 컴포넌트 스테이트에서 빼와라
            "reserve_tell": reserve_tell
        }

              console.log(reserveinfodata);
              IMP.init("imp77544746");  
        //로직을 이렇다. 결제자체가 성공후  결제 석세스함수에서 axios로  -> db를 수정하는 백엔드 서버
        IMP.request_pay({

            pg: 'danal_tpay',
            pay_method: 'card',
            merchant_uid:makeMerchantUid,
            name: reserve_name,
            //나중에 테스트 끝나면
            //payforinfo.openclass_price 으로 바꿀것
            amount: 100,
            buyer_name: reserve_name,
            buyer_tel: reserve_tell,
            display: {
                card_quota: [3]  // 할부개월 3개월까지 활성화
            }
        },
            // 결제 성공후 호출될 함수이다. callback
          async  function (rsp) {
                if (rsp.success) {  

                 await   axios.post("http://localhost:4000/user/payment", reserveinfodata)
                    .then((result) => {
                        let statusNum = result.data.StatusCode;                   
                        let access_token=result.data.ImportAccessToken;
                        console.log("statusNum:  "+statusNum+" access_token: "+access_token);
                        if (statusNum==1) {
                  
                            alert("결제완료 ")
                            window.localStorage.setItem('access_token',access_token);
                            window.location.replace('/main2')
                        }
                        if (statusNum==-1) {               
                           // console.log(`결제 완료후 업데이트 실패시는 -1? ${confirm}`)
                           alert("예약 마감으로 환불처리 되었습니다. 다른 날짜를 선택하여주세요");
                             return; 

                        }
                       
                    })
                    .catch(() => {
                        console.log("뭔가 에러");
                    })
            
                   
                } else {

                    console.log(rsp);

                }
            });         
       

    }



    return (<>
        <Modalwarperr openmodal={props.openmodal}>
            <div className="modalbox">
                <h3>예약정보</h3>
                <div className="detaile">
                    <div className="detaileinfo">
                        <span className="titleinfo">예약자명</span>
                        <span className="info">
                            <input id="reserve_name" className="inputDefault" type="text" defaultValue="예약자명을 입력해주세요">

                            </input>
                        </span>
                    </div>
                    <div className="detaileinfo"><span className="titleinfo">예약연락쳐</span>
                        <span className="info">
                            <input id="reserve_tell" className="inputDefault" type="text" defaultValue="연락처를 입력해주세요">

                            </input>
                        </span>

                    </div>
                    <div className="detaileinfo">
                        <span className="titleinfo">신청클래스명</span>
                        <span className="info">{props.fordbobj.onedayclass_name}</span>
                    </div>
                    <div className="detaileinfo">
                        <span className="titleinfo">클래스이용시간</span>
                        <span className="info">
                        {props.fordbobj.onedayclass_useTime}
                            </span></div>
                    <div className="detaileinfo">
                        <span className="titleinfo">클래스이용비용</span>
                        <span className="info">
                        {props.fordbobj.onedayclass_price}
                            </span></div>
                    <div className="confirm">
                        <span onClick={() => {
                            window.location.replace('/main')
                        }}>확인</span>
                        <span onClick={Payment}>결제하기</span>
                     
                        </div>
                </div>
            </div>

        </Modalwarperr>
    </>)
}