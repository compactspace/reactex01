import React from "react";


export const ExpressionEx01 = () => {
    
    //자바스크립트 표현식 이란?
    //값을 반환 대입하는 식이다. 다음과 같다
    
    // 표현식
    let x = 1;
    
    //표현식
    let obj = { "s": "d" };
    
    //리턴값이 있음으로 표현식
    function literalfnc() {
        
        return "함수의리턴값";
        
    }

      // html 태그를 리턴값으로 하는 리턴값이 있음으로 표현식
      function literalfnc2() {
        
        return <h1>하하</h1>;
        
    }


// 표현식을 삽입 하기 위해서는 ${} 의 기호와
//  템플릿 리터럴 기호인 뱁틱 기호가 필요하다.
// `` 는 자동 문자열 스페이스바 더하기 등을 인식하고
// ${} 는 템플릿 리터럴 속에 표현식을 삽입한다는 뜻
//`${}` 의 리턴값은 스트링이고.

console.log(`${x=1}`);



//리엑트에서의 범주
var expression;



//자바스크립트의 값을 리턴부에 기술시는 {} 속에 반드시기술
    return (<>
        <h1>하하하하ㅏ{x}</h1>
        <br></br>
        <h1>{obj.s}</h1>
        <br></br>
        <h1>
            {literalfnc()}

        </h1>
        <br></br>
        {`${x=1}`}
        <br></br>
        {`${expression="expression"}`}
        <br></br>
        {literalfnc2()}

    </>);






}