import React from "react";
import styled, { css } from 'styled-components'


const  ModalWrapper= styled.div`
display: grid;
grid-template-rows: 30% 70%;
background-color:  #222322;

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



export const Modal = () => {


    

    return (<>
    < ModalWrapper>
        <div className="modal">
            <div className="title">
            <h1 >모달창제목</h1>
            </div>
        
            <br></br>
            <div className="infoarea">
                <h3>내용물</h3>
                <h3>감사링</h3>
            </div>
        </div>
        </ModalWrapper>
    </>);
}