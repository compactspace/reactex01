import { useState } from "react";




// Component 많이 만들때 단점
// state 쓸때 복잡해진다(상위 component에서 만든 state 쓰려면 props 문법을 써야된다)
//props 문법은 추후 배우고 그렇구나 하면됨 지금은


//함수형 컴포넌트로 한다.

//만들기, 말그대로 만든다.
//사용법 : 원하는 곳에서 함수형컴포넌트 이름 을 사용하여 <함수형컴포넌트이름/> 로 사용한다.
// 지금의 사용처는 CompoExcute 파일이다.




export const CompoEx01=()=>{


    return(<>
    <h1>난 CompoEx01 컴포넌트임</h1>
    
    </>);

}

export const CompoEx02=()=>{


    return(<>
    <h1>난 CompoEx02 컴포넌트임</h1>
    
    </>);

}



