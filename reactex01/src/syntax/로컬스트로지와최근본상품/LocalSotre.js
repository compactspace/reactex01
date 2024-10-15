
import React, {useEffect, useState} from "react";



//로컬스토리지
//별도의 라이브러나 뭐 훅 등을 필요가 없다.

// 브라우저를 닫았다 열어도 데이터가 남아있습니다.
// 유효기간 없이 데이터를 저장하고, 
// js를 사용하거나 브라우저 캐시 or 로컬 저장 데이터를 지워야만 사라집니다.


//그냥 자바스크립트 객체 localStoreage 를 가져오고
// setItem ("key","value") 형식
// getItem("key") 로 가져오자.

export const LocalStroe= ()=>{


useEffect(()=>{

localStorage.setItem("key1","하하하");



console.log(localStorage.getItem("key1"));

},[])
    return (<>
    <h1>로컬스토리지 문법</h1>
    <h1>개발자도구 application 탭 클릭  좌측 storeage 탭에서  localStorage 탭클릭후 확인 </h1>
    </>);
}