import React from "react";


export const LiteralEx01 = () => {

    //자바스크립트 리터널이란 선언과 동시에 값을 대입해주는것

    let x = 1;

    let obj = { "s": "d" };

    //그냥함수
    function literalfnc() {

        return "함수의리턴값";

    }





    //자바스크립트의 값을 리턴부에 기술시는 {} 속에 반드시기술
    return (<>
        <h1>하하하하ㅏ{x}</h1>
        <br></br>
        <h1>{obj.s}</h1>
        <br></br>
        <h1>
            {literalfnc()}

        </h1>
        <br></br>
        {`${x=1}`}


    </>);






}