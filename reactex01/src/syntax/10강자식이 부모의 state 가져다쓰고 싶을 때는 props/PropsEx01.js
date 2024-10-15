import { useState } from "react";




//프롭스는 어렵게 생각말고, 다른 함수를 호출시 매개변수를 넘겨 준다고 생각하자.
// 즉, f의 구현부에 매개변수가 있는 g 호출 식이 있는데  저렇게 파라미터를 넘겨준다고

// fucntion (){

// g(x)

// }


//현재 자식컴포넌트인 PropsEx01 데, 부모의 state를 받으려면 그저 함수 매개변수 자리에 props 키워드를 적는다.

//그리고 사용시에는 부모컴포에서 전달시에 사용한 작명을 적어준다.
// props.이름
export const PropsEx01 =(props)=>{


let fromMom=props.mom;






    return (<>
    <h1>마미로부터 받은 값:{fromMom}</h1>
    
    </>);
}