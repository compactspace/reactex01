import React from "react";
import { useState } from "react";



export const StateEx01 = () => {

    // usestate 원소 속에는 단일원소 배열등 싹다 가능하다.
    let [글제목, 글제목수정] = useState(['바지추천', '배고파', '빵']);

    


const Change=()=>{
// 이건 자바로 치차면 얕은 복사로 주소만 복사해 데이터 공유가 일어난다.
//let x=[글제목];
// 따라서 state는 변해야 반응을 해야 하는데 복사한 배열 x와  원본 배열 글제목 이
//같아서 뭐 바뀌는게 없다.


//따라서 자바로 치자면 새로운 주소값을 부여받는 깊은 복사가 필요하며
// 그것이 spread 문법이다. 아래처럼 하면 된다.
let x=[...글제목];
   x[0]='여자바지 추천';
   글제목수정(x);

}


    return (<>
    <button onClick={Change}>그냥문법확인바꾸기</button>
    <h1>{글제목[0]}</h1>
    <h1>{글제목[1]}</h1>
    <h1>{글제목[2]}</h1>


    </>);
}