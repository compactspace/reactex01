import React, { useState } from "react";
import styled, { css } from 'styled-components'
import { PropsModalEx01 } from './propsModalEx01'





export const PropsEx01 = () => {

    const [index, setIndex] = useState(0);
    const [병신좋아요, 좋아요구걸] = useState([0, 0, 0])
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(["안양맛집", "영등포맛집", "민지맛집"]);


    const Show = () => {
     


    }





    const Titles = title.map((obj, index) => {

        return (<>
            <div className="title" key={index}>
                <h1 onClick={()=>{
                    
   setIndex(index);
   if (modal == false) {
       setModal(true)
   } else {
       setModal(false)
   }

                }}>제목 :{`${obj}`}</h1>
                <h1 onClick={() => {
                    
                    let deep = [...병신좋아요];
                    deep[index] += 1;
                    좋아요구걸(deep);
                }}>좋아요 구걸해라 병신아 :{`${병신좋아요[index]}`}</h1>
            </div>

        </>);
    })

    return (<>
        {Titles}
        {/* 씨발 set함수도 프롭스로 넘길수있네?? */}
        {modal ? <PropsModalEx01 index={index} titlenum={title} title={title} setTitle={setTitle}></PropsModalEx01> : null}

    </>);

}





export const PropsEx02= ()=>{


    return(<><h1>게씨발</h1></>)


}