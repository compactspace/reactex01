
import React, {useEffect, useState} from "react";



//로컬스토리지
//별도의 라이브러나 뭐 훅 등을 필요가 없다.

// 또한 저장 시킨 것을
//localStorage.removeItem("key") 로 삭제 가능

//localStorage는 문자만 저장할 수 있는 공간이라 
//array/object를 바로 저장할 수는 없음

// 따라서 직렬화가 필요하다.
//JSON.stringify 으로

//그리고 만약 로컬 스토리지에 있는걸 빼올시는 역직렬화
//JSON.parse





export const LocalStroe2= ()=>{


let arra=[1,2,3,];

let obj={x1:"고구마x1",x2:"고구마x2"}

useEffect(()=>{

localStorage.setItem("key1",JSON.stringify(arra))
localStorage.setItem("key2",JSON.stringify(obj))

//삭제
//localStorage.removeItem("key1")


},[])
    return (<>
    <h1>로컬스토리지 문법</h1>
    <h1>개발자도구 application 탭 클릭  좌측 storeage 탭에서  localStorage 탭클릭후 확인 </h1>
    </>);
}