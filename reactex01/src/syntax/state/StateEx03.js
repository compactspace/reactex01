import React from "react";
import { useState } from "react";



export const StateEx03 = () => {

    // usestate 원소 속에는 단일원소 배열등 싹다 가능하다.
    let [글제목, 글제목수정] = useState(['map', '함수로..', '넣어봄..']);

    





    return (<>
    <button >그냥문법확인바꾸기</button>
 {/* map 함수를 이용하여 출력하여 봅니다. */}
 {
    글제목.map((obj)=>{
return <h1>{obj}</h1>

    })
 }


    </>);
}