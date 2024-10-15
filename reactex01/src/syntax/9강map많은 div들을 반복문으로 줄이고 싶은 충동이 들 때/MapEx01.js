
import { useState } from "react";



export const MapEx01 = () => {
    // for 문법은 JSX 안에서 사용할 수 없어서 저렇게 바깥에서 쓰고,

    // 또 귀찮게 담아준다음 써야한다.

    // 자바스크립트의  배열의  map함수를 사용

    let [divs, SetDivs] = useState(["제목1", "제목2", "제목3"])



    let arr=[1,2,3,4,5,6,7,8]


    function test(){

        arr.map((a)=>{
            console.log(a);
        });



    };
    


test();


    return (<>

{/* map함수는 반드시 리턴 구문을 적어준다 또 jsx의 뭔가의 예외가 있는듯 하다. */}
        <div>
            {divs.map((a) => {
              return  <div className="divsss">{a}</div>                

            })}

        </div>

      

    </>);

}