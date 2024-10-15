
import React, { useEffect, useState } from "react";


//하.. 씨발 뭐라 해야햐냐
//url 파라미터 문법 :id, useParams 훅 사용


//=> router2.js에서 

//=> Router 에서 /:이름 
//=> Router가 가르키는 컴포넌트에서 useParams훅을 사용 한다 아래처럼


import { useParams } from "react-router-dom";



//숙제란다
//상세페이지에 들어가면 
//현재 페이지에 있는 상품 id를 localStorage에 저장되게 만들기
// 단, 하나의 key에 값은 배열에 추가하는 형식으로
// watched [1,2,3,....] 이렇게




export const LocalStroeProduct = () => {

    //대충 까보면 결국은 리턴값이 {} 형식인데 즉 구조분해 할당인듯
    //딱 이정도 까지만 받아드리자.

    let { id } = useParams();

    useEffect(() => {

        if (localStorage.getItem(`watched`) == null) {
    
            localStorage.setItem(`watched`, JSON.stringify([]))

            let watched = JSON.parse(localStorage.getItem(`watched`));
            watched.push(id);
            localStorage.setItem(`watched`, JSON.stringify(watched))
        } else {

            let watched = JSON.parse(localStorage.getItem(`watched`));
            watched.indexOf(id);
    
            if (watched.indexOf(id) < 0) {
                watched.push(id)
                localStorage.setItem(`watched`, JSON.stringify(watched));
            } 
        }

    }, [])
    return (<>
        <h1>개별 상품 상세페이지 입니다 url 마지막의 숫자만 바꾸어 보세요</h1>
        <h1>상품아이디 : {`${id}`}</h1>

    </>);
}