import { useState, useEffect } from "react";


import { useNavigate } from "react-router-dom";



export const UseEffectFncEx03 = () => {

    //클린업 함수
    //useEffect 함수의 구현부속  return ()=>{} 이거 자체를 클린업 함수라한다.


    // 클린업 함수는 컴포넌트가 삭제=뒤져버릴때 발동을 하는데

    //컴포넌트의 삭제=뒤져 버린 경우는 초보자 수준에선 2개

    // 1. 페이지이동 2.컴포넌트의 업데이트로 이전 컴포넌트의 삭제를 인지함.





    //  문제는 컴포넌트가 업데이트 될때 업데이트전 컴포넌트가 죽는걸 인지하는 것임.
    // 혹은 페이지 이동


    let naviegate = useNavigate(); 




    useEffect(() => {

        console.log("난, 마운트 또는 업데이트");
        return () => {

            console.log("뒤져버렸습니다.. 클린업처리 합니다.")
        }
    })



    //실제로 페이지 이동이 된뒤 클린업 함수가 콘솔로그를 찍음을 제발 눈으로 확인해라
    return (<>
        <h1>df</h1>
        <button onClick={() => {

            { naviegate('/openclass') }


        }}>클릭시에 네비게이터로 오픈를래스페이지로이동</button>

    </>)
}