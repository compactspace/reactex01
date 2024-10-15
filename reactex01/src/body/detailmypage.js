import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import backicon from '../img2/backicon2.jpg'

import oneday17 from '../img2/oneday17.jpg'
const DetailMypageAllwrapper = styled.div`
    ul {
        padding: 0 0;
        margin:  0 0;
    }

    flex: 1 1 auto;
    margin-bottom: 96px;

    & .detailpagearea{
        margin-left: 24px;

        & .detailheader{
            display: flex;
            gap: 12px;

            & .back{
                align-items: center;
    background-color: transparent;
    border: none;   
    display: flex;
    height: 29px;
    justify-content: center;
    margin: 16px 0 20px;
    width: 29px;

                & img{

                    width: 100%;
                    height: 100%;
                }

            }

            & .headername{
                line-height: 1px;
                display: flex;
                 height: 29px;
  
                 margin: 16px 0 20px;
                & h1{
                    font-size: 24px;
                    font-weight: 700;
                }

            }
        }

        & .detailreceipt{
            display: flex;
            border-color: #ebebeb;
    border-style: solid;
    border-width: 1px 0;    
    margin-top: 8px;

    &  .noprice{
        display: flex;
    flex: 1;
    flex-direction: column;
    padding: 16px 20px;
    background-color: #f5f7fa;

        & p{
            display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 16px;
     & span{

        align-items: center;
    color: #999;
    display: flex;
    flex-shrink: 0;
    margin-right: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
     }            

    } 
    }
  
     & .price{
        display: flex;
    flex: 1;
    flex-direction: column;
    padding: 16px 20px;
    & p{
            display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 16px;
     & span{

        align-items: center;
    color: #999;
    display: flex;
    flex-shrink: 0;
    margin-right: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
     }            

    } 

        } 

    }
}
    & .detailstatusarea{
        align-items: center;
    display: flex;
    justify-content: space-between;
        & .statusname{
            & h1{
                margin: 0 0;
    padding-bottom: 10px;
            }
        }

        & .reservebtn{
            background: #ebebeb;
    color: #333;
    border-radius: 8px;
    height: 32px;
    line-height: 14px;
    padding: 0 12px;
    border: none;
        }

    }

    & .detailproductinfoarea{
        margin-bottom: 29px;
    padding-bottom: 16px;
    position: relative;

        & .inforow1{
            display: flex;
    gap: 16px;
    margin-top: 20px;

            & .infoimg{
                border: none;
    border-radius: 8px;
   
    flex-shrink: 0;
    height: 160px;
    overflow: hidden;
    padding: 0;
    width: 160px;
    background-image:url();
    background-size: 100% 100%;
            }

            & .shortinfo{
                padding-top: 5.5px;
    width: 100%;
                & .productname{
                    align-items: center;
    display: flex;
    justify-content: space-between;
                }

            }

        }
        & .inforow2{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-top: 20px;

            & li{
                display: flex;
    flex-direction: row;
    gap: 16px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;

                & .inforw2header{
                    color: #999;
                    flex-shrink: 0;
                    width: 72px;
                }

                & .inforw2data{
                    display: flex;
    flex-direction: row;
    gap: 4px;
    color: #333;
    font-weight: 400;
                }
            }

        }

    }

    & .cutline{
        background: #f5f5f5;
        height: 2px;
    }

`;

export const DetailMypage = (props) => {

    // console.log(props)
    let choicedetail = props.choicedetail;

    console.log(choicedetail.reserve_img);
    let navi = useNavigate();
    return (<>
        <DetailMypageAllwrapper>
            <div className="detailpagearea">
                <div className="detailheader">
                    <div className="back">
                        <img src={backicon}
                            onClick={() => {
                                //  navi는 스테이트가 유지된채 이동하는듯 따라서 지금은 상세페이지에서 뒤로가기
                                // 아이콘 누를시 새로고침 유발하는 hef로 이동한다. 
                                //   navi('/mypage');
                                window.location.href = '/mypage';
                            }}
                        ></img>
                    </div>
                    <div className="headername">
                        <h1>예약내역 상세</h1>
                    </div>
                </div>
                <div className="detailstatusarea">
                    <div className="statusname">
                        <h1>이용완료</h1>
                    </div>
                    <button className="reservebtn">
                        다시예약
                    </button>

                </div>
                <div className="detailproductinfoarea">
                    <div className="inforow1">
                        <div className="infoimg" style={{ backgroundImage: `url(${choicedetail.reserve_img})` }}></div>
                        <div className="shortinfo">
                            <div className="productname">
                                쿠키만들기
                            </div>
                        </div>
                    </div>
                    <ul className="inforow2">
                        <li>
                            <div className="inforw2header">
                             사용일시
                            </div>
                            <div className="inforw2data">
                            <span>{choicedetail.openday}</span>
                            </div>
                        </li>
                        <li></li>

                    </ul>
                </div>
                <div className="cutline"></div>            

            </div>
  <div className="detailpagearea">               
                <div className="detailstatusarea">
                    <div className="statusname">
                        <h1>예약정보</h1>
                    </div>            

                </div>
                <div className="detailproductinfoarea">
                   
                    <ul className="inforow2">
                        <li>
                            <div className="inforw2header">
                             결제번호
                            </div>
                            <div className="inforw2data">
                            <span>{choicedetail.openday}</span>
                            </div>
                        </li>
                        <li>
                         <div className="inforw2header">
                             예약자명
                            </div>
                            <div className="inforw2data">
                            <span>{choicedetail.reserve_name}</span>
                            </div>
                        </li>
                          <li>
                         <div className="inforw2header">
                             예약자연락쳐
                            </div>
                            <div className="inforw2data">
                            <span>{choicedetail.reserve_tell}</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="cutline"></div>            

            </div>

    <div className="detailpagearea">               
                <div className="detailstatusarea">
                    <div className="statusname">
                        <h1>결제정보</h1>
                    </div>            

                </div>
                <div className="detailreceipt">
                        <div className="noprice">
                            <p><span>결제일시</span><span>현재다날망가짐</span></p>
                            <p><span>결제수단</span><span>신용카드</span></p>
                        </div> 
                         <div className="price">
                         <p><span>결제금액</span><span>현재다날망가짐</span></p>
                         <p><span>적용쿠폰</span><span>0</span></p>
                        </div>       



                   
                </div>
                <div className="cutline"></div>            

            </div>

        </DetailMypageAllwrapper>

    </>);
}