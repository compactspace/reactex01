
import { useState
 } from "react";
import { PropsEx01 } from "./PropsEx01";


export  const Mom= ()=>{

let [momdata,SetMomData]=useState("마미가주는거란다.");





    return(

<>
{/* 주는곳에선 작명={state명} 

이제 전달받은곳인 PropsEx01.js로 가보자.
*/} 
<PropsEx01  mom={momdata}></PropsEx01>

</>

    );
}