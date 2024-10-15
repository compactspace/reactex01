import { useState } from "react";



export const ButtonEx01 =()=>{

    //useState 함수를 이용하여 좋아요 기능을 만들어보자.

let [따봉,셋따봉]=useState(0);

console.log(따봉);






    return(<>
<h4>

<button

onClick={()=>{

     따봉=따봉+1;
     셋따봉(따봉);

}}

><span>👍</span></button>


</h4>
<h3>좋아요수:{따봉}</h3>    
    </>);
}