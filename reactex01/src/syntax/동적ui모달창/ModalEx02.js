import React from "react";
import styled, { css } from 'styled-components'
import { useState } from "react";


const  ModalWrapper= styled.div`
display: grid;
grid-template-rows: 30% 60% 10%;
background-color: aliceblue;

&>.title{
padding: 30px 10px;
font-size: 10px;
font-weight: 500;

}

&>.infoarea{
    display: grid;
grid-template-rows: 50% 50%;
padding: 30px 10px;
font-size: 20px;
font-weight: 500;

}

`



export const ModalEx02 = () => {

    const [모달제목, 모달제목수정]=useState("기본제목");

    

const Change=()=>{

    모달제목수정('여자옷추천');
}

    return (<>
    < ModalWrapper>
        <div className="modal">
            <div className="title">
            <h1>{모달제목 =="여자옷추천"? <>{모달제목}</>: <>{모달제목}</>}</h1>
            </div>
        
            <br></br>
            <div className="infoarea">
                <h3>내용물</h3>
                <h3>감사링</h3>
            </div>
        </div>
        <button onClick={Change}>제목수정</button>
        </ModalWrapper>
      
    </>);
}