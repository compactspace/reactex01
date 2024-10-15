import React, { useState, useEffect } from "react";
import styled from 'styled-components';




const Box = styled.div`

width: 400px;
height: 400px;
background-color: yellow;
`


//인풋창에서  숫자말고 다른거 입력시  그러지 말라는 창 띄어보기
//Javascript의 문자열이 숫자인지 체크하는 방법

//Javascript의 문자열이 숫자인지 체크하기 위해서는
//isNaN(value) 함수를 사용합니다.

//=> 말그대로 숫자가 아니다 의 약자로
// 숫자가 아니면 투르
//숫자이면 펠스

// 출처: https://hianna.tistory.com/385 [어제 오늘 내일:티스토리]



export const UseEffectEx03 = () => {

    const [alerts, setAlert] = useState(false);


    //     useEffect(() => {
    // //isNaN 함수가 병신이라 언디파인 받으면 투르로 인식하는듯
    // // 따라서 처음 useState 값의 초기 값을 빈무자열 이나 false로 적절히 주자
    //         if (isNaN(alerts) === true) {
    //             alert("숫자만 입력하라고 ㄷㄷ")
    //         }
    //     }, [alerts])



    useEffect(() => {
        if (alerts) {
            alert('숫자만입력하록 ㅂㄷㅂㄷ');
            setAlert(false)
        }
    
    }, [alerts])



    return (<>
        <h1>숫자만 입력해보세요 않그러면 경고창이 뜰거에요</h1>

        <input placeholder='수량' onChange={(e) => {
console.log()
            if (isNaN(e.target.value.charAt(e.target.value.length-1))) {
              
                setAlert(true) }
            else {
                setAlert(false)
            }


        }}>
        </input>

    </>)



}