import React from "react";
import { useState } from "react";



export const StateEx02 = () => {

    // usestate 원소 속에는 단일원소 배열등 싹다 가능하다.
    let [글제목, 글제목수정] = useState(['차자랑', '음믹사진', '맛집후기']);

    


const Change=()=>{
   let copy = 글제목.sort();
    let deepcopy=[...copy];
    for(let k=0; k<deepcopy.length; k++){
        deepcopy[k]=copy[k];
        글제목수정(deepcopy);
    }
}


    return (<>
    <button onClick={Change}>그냥문법확인바꾸기</button>
    <h1>{글제목[0]}</h1>
    <h1>{글제목[1]}</h1>
    <h1>{글제목[2]}</h1>


    </>);
}