import React, { useEffect, useState } from "react";

import styled from "styled-components";
import oneday42 from '../img2/oneday41.jpg'
import axios from "axios";
// 리랜더링 테스트 용도임
import { DetailMypage } from '../body/detailmypage'

import { useNavigate } from "react-router-dom";



const MyPageAllWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin: 20px auto 0;
    max-width: 1200px;
//css
 & .LeftAllwrapper{

    border: 1px solid #ebebeb;
    border-radius: 12px;
    flex: 0 0 282px;
    height: fit-content;
    margin-top: 12px;

 & ul{
    padding: 0 0;
    margin: 0 0;
 }
    & #last{
        border-bottom:none !important;
    }
    & li{
        border-bottom: 1px solid #ebebeb;
    height: 60px;
    line-height: 24px;
    list-style: none;
    padding: 0 24px;

  & a{   
    color: #333;
    display: flex;
    height: inherit;
    justify-content: space-between;
    text-decoration: none;
/* 주의 하라, 텍스트의 align-items: center; 를 쓰러면 해당 태그를 grid나, flex로 선언해야한다고한다. */
    align-items: center;
  }

    }
 }

& .RightAllwrapper{
    width: 100%;


    & .Rightwrapper{
        margin-left: 24px;
    }

    & h1{
        -webkit-line-clamp: 2;
    
    color: #333;    
    line-height: 29px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    word-break: keep-all;

    }

    & .pageheader{

        line-height: 21px;
    padding: 16px 0;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    }


 & .reserveul{

    margin-bottom: 24px;

& .reservelist{
    display: flex;
    flex-direction: row;
    padding: 16px 0;
    position: relative;

& .reserveimg{

    background-color: #eee;
    border: none;
    border-radius: 8px;   
    flex-shrink: 0;
    height: 120px;
    margin-right: 16px;
    padding: 0;
    width: 120px;
    background-color: #f5f7fa;
    background-position: 50%;
    background-size: cover;
  
    
}

& .infobox{
    display: flex;
    flex-direction: column;

    & .reservestatus{

        align-items: center;
    display: flex;
    flex-direction: row;
    }

    & .detail{

        display: flex;
    flex-direction: row;
    margin-top: 16px;

        & a{
            align-items: center;
    background: #ebebeb;
    border-radius: 8px;
    color: #333;
    display: flex;
    height: 32px;
    justify-content: center;
    line-height: 14px;
    width: 80px;
        }

    }


}


}

 }


}



`





export const MyPage = (props) => {



    let [showdetail, setShowdetail] = useState(false);


    let [choicedetail, setChoiceDetail] = useState(null);

    let infolist = props.reservelist;
    console.log(props)
    let navi=useNavigate();
    let btn;
    return (<>
        <MyPageAllWrapper className="MyPageAllWrapper">
            <div className="LeftAllwrapper">
                <ul>
                    <li><a>이용내역</a></li>
                    <li><a>개인정보</a></li>
                    <li id='last'><a>기타알림</a></li>
                </ul>

            </div>


            {/* 여기서 갈아 끼우면 될까 싶었는디...  실패했댱 ..ㅎ 아니 가능할듯.! */}

            {showdetail ? <>


                <DetailMypage showdetail={showdetail} choicedetail={choicedetail}></DetailMypage>
                {/* <DetailMypage infolist={infolist} choicedetail={choicedetail}></DetailMypage>    */}
            </>




                : <>

                    <div className="RightAllwrapper">

                        <div className="Rightwrapper">

                            <div className="pagetitle" id='pagetitle'>
                                <h1>예약내역</h1>

                            </div>
                            <div className="pagecontent">
                                <div className="pageheader">
                                    이용완료 및 예약취소
                                </div>

                                <ul className="reserveul">
                                    {infolist != null ? infolist.map((obj, idx) => {
                                        return (<>
                                            <li className="reservelist">
                                                <div className="reserveimg" style={{ backgroundImage: `url(${obj.reserve_img})` }}>

                                                </div>

                                                <div className="infobox">
                                                    <div className="reservestatus">
                                                        <span>
                                                        {
                                                        obj.reservestatus == 'payment' && obj.reserve_using == 'true' ? '이용완료'
                                                         : obj.reservestatus == 'payment'  ? '결제완료' : '환불완료'
                                                        }
                                                        </span>
                                                    </div>
                                                    <div className="onedayname">
                                                        <h4>{obj.onedayclass_name}</h4>
                                                    </div>
                                                    <div className="detail">
                                                        <a>{obj.reservestatus == 'payment' ? '결제완료' : '환불완료'}</a>
                                                        {
                                                            obj.reservestatus == 'paycancle' ? 
                                                            <a  onClick={()=>{
                                                                navi(`/onedayclass/${obj.onedayclass_num}`)
                                                            }}>다시예약</a>
                                                           :
                                                                
                                                                    obj.reserve_using == 'false' ?

                                                                    <a onClick={async () => {

                                                                        let 취소를위한JSON정보 = obj;


                                                                        let url = "http://localhost:4000/user/paycancle"

                                                                        await axios.post(url, 취소를위한JSON정보)

                                                                            .then((res) => {
                                                                                console.log(res.data);
                                                                                console.log("환불성공코드는 1: " + res.data.statusCode);
                                                                                if (res.data.statusCode == 1) {
                                                                                    alert("환불하였습니다.")
                                                                                    window.location.href='/mypage';    
                                                                                }


                                                                            }).catch((err) => {

                                                                                console.log(err);
                                                                            })
                                                                    }}>환불하기</a>


                                                                    :
                                                                    <a onClick={() => {

                                                                        if (!showdetail) {
                                                                            setShowdetail(true);
                                                                            setChoiceDetail(obj);

                                                                        } else {
                                                                            setShowdetail(false)
                                                                        }
                                                                    }}>예약상세</a>

                                                                




                                                        }


                                                    </div>



                                                </div>


                                            </li>
                                        </>);

                                    }) : <h3>불러오는중</h3>}

                                    {/* {infolist.map(() => {
                return (<>
                    <li className="reservelist">
                        <div className="reserveimg">

                        </div>

                        <div className="infobox">
                        <div className="reservestatus">
                            <span>이용완료</span>
                        </div>
                        <div className="onedayname">
                        <h4>그림교실</h4>
                        </div>
                            <div className="detail">
                            <a>다시예약</a>
                    <a  onClick={()=>{

if(!showdetail){
    setShowdetail(true);
}else{
    setShowdetail(false)
}


            }}>예약상세</a>
                  
                            </div>



                        </div>


                    </li>
                </>);

            })} */}
                                </ul>


                            </div>
                        </div>

                    </div>
                </>}



        </MyPageAllWrapper>

    </>);
}