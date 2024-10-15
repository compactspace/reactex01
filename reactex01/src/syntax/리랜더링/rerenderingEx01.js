import React from "react";
import {RerenderingEx02} from '../리랜더링/RerenderingEx02'

import { useState } from "react";

import { useEffect } from "react";


// 자식컴포넌트의 태그를 상위(지금파일) 에서 document.getElementById
//로 가져와 이벤트를 걸고, 상태를 변화시키면 리랜더링이 기하급수로 증가함. 즉 잘못설계한듯..ㅠ


export const RerenderingEx01 = () => {

    let [state, setState] = useState(false);
    let [hbtns, setHbtns] = useState(false);  

    let btn
    useEffect(()=>{

        if((btn=document.getElementById("hbtn"))!=undefined){

            btn.addEventListener('click',()=>{
    
                if (!hbtns) {
                  setHbtns(true);
                } else {
                  setHbtns(false)
                }
    
            })
    
    
        }

    },[hbtns])


    // if (htbn !=null || hbtn!=undefined ) {
  
  
    // }






    return (<>

        <h1 onClick={() => {

            if (!state) {
                setState(true);
            } else {
                setState(false);
            }


        }}>내부에서 상태 바꾸기 버튼</h1>

{/*  이짖거리해도 더블랜더링*/}
         <RerenderingEx02 onClick={()=>{

if (!hbtns) {
    setHbtns(true);
  } else {
    setHbtns(false)
  }


         }}  hbtns={hbtns}>

        </RerenderingEx02> 



    </>);

}