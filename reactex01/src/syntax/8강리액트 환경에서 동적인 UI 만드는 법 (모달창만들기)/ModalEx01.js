


import { useState } from "react";




export const ModalEx01 = () => {

    //스테이트 를 불린으로 주어 클릭시 마다 투르 펠스를 변경하여 보자.
    // 그리고 그 값을 활용하여 삼항 연산자로 특정 html태그를 보여주고 닫고 하자.


    let [flage, SetFlag] = useState(false);

    return (<>

        <button onClick={() => {

            if (flage) {

                flage = false;

            } else {
                flage = true;
            }

            SetFlag(flage)

        }}>스테이트값을 변경</button>


{flage?<h3>플래그 투르</h3>: <h3>플래그 펠스</h3>}






    </>);
}