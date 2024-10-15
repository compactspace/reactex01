import React from "react";
import styled, { css } from 'styled-components'
import { useState } from "react";


const  ModalWrapper= styled.div`
display: grid;
grid-template-rows: 30% 60%;
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



export const PropsModalEx01 = (props) => {

    const [모달제목, 모달제목수정]=useState("기본제목");

    


    return (<>
    < ModalWrapper>
        <div className="modal">
            <div className="title">
            <h1>{props.titlenum[props.index]}</h1>
            </div>
        
            <br></br>
            <div className="infoarea">
            <h3>{props.titlenum[props.index]}</h3>
                <h3>감사링</h3>
            </div>
        </div>
        <button onClick={()=>{

            let deep=[...props.title];
            deep[0]='모텔추천';
            props.setTitle(deep);
        }}>제목수정</button>
        </ModalWrapper>
      
    </>);
}