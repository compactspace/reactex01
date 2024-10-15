import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { changeauthtoken } from '../../store/store'
import { useDispatch, useSelector } from "react-redux";
export const BackEx01 = () => {

    let dispatch = useDispatch();
    let autho = useSelector((state) => { return state.authtoken });
    // useNavigate() 의 리턴값 역시 함수이다.

    let naviegate = useNavigate();
    // 따라서 naviegate 도 함수인데

    // 매개변수로 '경로'
    // 매개변수로 '음수' -> 이전페이지로
    // 매개변수로 '양의정수' -> 다음페이지로 뭐 이런게 가능하다.
    //역시 새로고침 없이 이동이다.
    // navigate() 써서 이동했으면 뒤로가기 눌러도 state는 유지될걸요 

    //새로고침만 안되면 컴포넌트 안의 state는 남아있슴

    // a태그 쓰거나 그러면 리셋됩니다

    //아래 예제에서 확인함 ㅇㅇ...



    //리엑트의 상태 유지와 상반되네..
    //navigate()




    useEffect(() => {
        console.log(autho)
    }, [autho])


    return (<>
    {/* state가 유지 됨 */}
        <button onClick={() => {
            dispatch(changeauthtoken(true));

        }}>상태바꾸기버튼</button>
        <button onClick={() => {

            naviegate('/main')

        }}>유즈네비게이터로이동하기</button>
 {/* state가 유지 됨 */}


 {/* 페이지 자체를 갈아 끼워 넣는거임 뒤로가기 조차 안됨 */}

        <button onClick={() => {

            window.location.replace('/main')

        }}>윈도우객체로케이션리플레이스로이동하기</button>

 {/* 페이지 자체를 갈아 끼워 넣는거임 뒤로가기 조차 안됨 */}





{/* state가 유지 않됨 */}

        <button onClick={() => {

            window.location.href='/main';

        }}>윈도우객체로케이션리href이동하기</button>



        <a href='/main'>a링크새로고침유발 로 이동하기</a>
        {/* state가 유지 않됨 */}
    </>);

    
}
