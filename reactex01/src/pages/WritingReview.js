import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";


import receipticon from '../icon/receipt.png'


const AllWrapper = styled.div`

/* 테스트용 높이 관찰로 나중에 삭제 */
height: 100vh;
width: 480px;
margin-left: auto;
margin-right: auto;
box-shadow: 0 0 17px 3px rgb(171 171 171 / 50%);
    position: relative;
    
   background-color: rgba(26, 112, 220, .2117647059);

   & .steponename{
text-align: center;
padding: 50px 0px;
    
    & h3{
        padding: 50px 0px;
    background: white;
    }
}

    `


const SteponeAllWrapper = styled.div`
background-color: #FFF !important;
display: flex;
flex-direction: column;
margin-top: 10px;

border-radius: 20px 20px 20px 20px;


 & .steponeheader{
    /* margin-top: 50px; */
  & .steponeauth{
    display: grid;
    grid-template-columns: 130px 130px;
    margin: 0 auto;
    width: 80%;
    grid-gap: 100px;
    grid-template-rows: 150px;


    & .contentgrid{
        height: 100%;
        display: grid;
        grid-template-rows: 50% 40%;
        text-align: center;
        & .iconcontent{
            height: 100%;
           
            & .iconimg{
                height: 100%;
                
            }

        }
        
        & .authobtn{


        }

    }


  }

 }


`

const SteptwoAllWrapper = styled.div`
  
  height: 320px;
  background-color: #FFF !important;
    border-radius: 20px 20px 20px 20px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    padding: 10px 10px;


    & .reviewarea{
        width: 90%;
        height: 90%;
        /* padding: 20px 20px; */

        & textarea{
            font-size: 30px;
            border: none;
            width: 100%;
            height: 100%;
        }

    }


    `

const StepThreeAllWrapper = styled.div`


position: fixed;
    bottom: 0px;
    height: 50px;
    width: 480px;   
    
    & .confirmarea{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    & .writerconfirm{
        align-items: center;
    display: flex;

    & button{
        border: none;
        border-radius: 10px 10px 10px 10px;
        height: 40px;
        width: 100px;
        color: white;
        background-color: rgb(59 130 246 / 0.5);

    }
    }


    }


   


`;



export const WritingReview = (props) => {


    let [payautho, setPayautho] = useState(false);



    let navi = useNavigate();

    let {id}= useParams();

   


    const Receipt = () => {



        if (dealnum != undefined && dealnum != null) {

            axios.get('http://localhost:4000/user/checkreceipt?reserveinfo_num=' + dealnum).
                then((res) => {
                    let statuscod = res.data;

                    if (statuscod == 1) {

                        console.log(res.data)
                        console.log("고객님의 실제 결제가 인증되었습니다.")
                        setPayautho(true);
                        return;

                    }
                    else if (statuscod == -1) {

                        alert("결제시 받은 거래번호를 입력해주세요");
                        return;
                    }
                })
                .catch((err) => {

                })
        }
        else {
            alert("결제시 받은 거래번호를 입력해주세요");
            return;
        }


    }

    let dealnum
    const ValueChange = () => {
        dealnum = document.getElementById("dealnum").value;

    }

    let textarea;
    const WriterValueChange = () => {
        textarea = document.getElementById("textarea").value;

    }

    let nickname;
    const NickName = () =>{
        nickname=document.getElementById("nickname").value;
        
    }


    const Writer = ()=>{

        if(!payautho){
            alert("리뷰 작성을 위해 먼저 영수증 인증을해주세요")
            return;
        }

        if(textarea==undefined || textarea==null){
            alert("후기를 작성해주세요");
            return;
        }

        if(nickname==undefined || nickname==null){
            alert("리뷰작성 닉네임을 설정해주세요");
            return;
        }


        let userId=window.localStorage.getItem("userId");
        console.log(userId);
        let data ={
        "id":userId,
        "onedayclass_num":id,
        "review_name":nickname,
        "review_comment":textarea
        };

        let  headers={
            "content-type":"application/json"
        }

        axios.post("http://localhost:4000/user/writingreview",data,{headers})
        .then(
            (res)=>{
                let statuscod=res.data;

                console.log(res);

                if(statuscod==1){
                    alert("후기가 등록되었습니다.홈으로 이동합니다.")
                    window.location.replace("/main2");

                }


            }
        )
        .catch(
            (err)=>{console.log(err)}
        )




    }

    return (<>

        <AllWrapper className="AllWrapper">

            <div className="steponename">
                <h3>이용한 클래스 확인</h3>
            </div>
            <SteponeAllWrapper className="SteponeAllWrapper">


                <div className="steponeheader">
                    <h3>이용한 클래스 후기를 작성해주세요!!</h3>
                    <div className="steponeauth">
                        <div className="contentgrid" >
                            <div className="iconcontent">
                                <img className="iconimg" src={receipticon} onClick={Receipt} ></img>
                            </div>
                            <div className="authobtn">
                                <span>영수증[결제시받은예약번호입력]</span>
                                <input type="text" onChange={ValueChange} id="dealnum"></input>
                            </div>
                        </div>
                        <div className="contentgrid">
                            <div className="iconcontent">
                                <img className="iconimg" src={receipticon} ></img>
                            </div>
                            <div className="authobtn">
                                <span>영수증</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="steponeinfo">

                </div>
            </SteponeAllWrapper>
            <SteptwoAllWrapper className="SteptwoAllWrapper">
                <div className="reviewarea">
                    <textarea onChange={WriterValueChange} id="textarea">
                    </textarea>
                <div>리뷰 등록 닉네임: <input type="text" id="nickname" onChange={NickName}></input></div>

                </div>
            </SteptwoAllWrapper>



            <StepThreeAllWrapper>
                <div className="confirmarea">
                    <div className="writerconfirm">
                        <button onClick={() => {
                            navi('/onedayclass/'+id)
                        }}>뒤로</button>
                    </div>
                    <div className="writerconfirm">
                        <button   onClick={Writer}   
                        
                        >등록</button>
                    </div>

                </div>
            </StepThreeAllWrapper>

        </AllWrapper>





    </>);

}