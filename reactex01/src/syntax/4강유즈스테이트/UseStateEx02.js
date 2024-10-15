import { useState } from "react";


export const UseStateEx02=()=>{

    //useState로 값이 변경되면 재렌(리렌)더링이 일어난다 확인만 해보자.

    const [data,SetData]=useState("DefaultValue");


    ///useState 함수의 매개변수는! 배열이 와도 된다.!!
    const [list,SetList]=useState(["초밥집","고기집","분식집"]);




    return(
        <>
        <h1 onClick={()=>{
            
            SetData("ChangeValue!!")

        }}>
{data}

        </h1>

<br></br>
        <h1>
     {list[0]},
     {list[1]},
     {list[2]},

        </h1>




        </>
    );
}