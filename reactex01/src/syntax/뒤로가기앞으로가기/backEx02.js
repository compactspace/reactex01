import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { changeauthtoken } from '../../store/store'
import { useDispatch, useSelector } from "react-redux";
export const BackEx02 = () => {


    window.onpageshow = function (event) {
        if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
            console.log('캐쉬로부터나온 새로운페이지임');
            //  location.href='/main';
        } else {
            console.log('순수하게 링크타고온 새로운페이지임');
        }
    }

//개념이 좀 좆같은데
//navigate는 옵션을 주지 않으면  페이지를 변경하면서 이전 페이지의 상태를 유지 즉 이전 스테이트값을 유지
// 하면서도 윈도우 history 스택에 쌓이지 않음 아무튼 그럼 씨발..
// 그러면서도 뒤로가기는 활성화됨 ㅇ



    let dispatch = useDispatch();
    let autho = useSelector((state) => { return state.authtoken });


    let naviegate = useNavigate();
    useEffect(() => {
        console.log(autho)
    }, [autho])


    return (<>

        <button onClick={() => {
            dispatch(changeauthtoken(true));

        }}>상태바꾸기버튼</button>

        <button onClick={() => {

            naviegate('/main')

        }}>유즈네비게이동하기</button>




        <button onClick={() => {

            naviegate('/main', { replace: true })

        }}>유즈네비게 옵션 f리플레이스 주고 이동하기</button>





        <button onClick={() => {

            window.location.replace('/main')

        }}>윈도우객체로케이션리플레이스로이동하기</button>



        <button onClick={() => {

            window.location.href = '/main';

        }}>윈도우객체로케이션리href이동하기</button>



        <a href='/main'>a링크새로고침유발 로 이동하기</a>

    </>);
}
