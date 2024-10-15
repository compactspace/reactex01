import React, { useState, useEffect } from "react";




//컴포넌트가 장착 될때
//컴포턴트가 업데이트될때:state 같은거, 자바스크립트값 변경은 X
//컴포넌트가 사라질때

//=> 저런 상황에 맞추어 사용자가 원하는 코드를 실행하고 싶은경우 useEffect메서드를 사용한다.


//핵심: useEffect 안에 적은 코드는 html 렌더링 이후에 동작한다.
//오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거 이런건 useEffect 안에 많이 적으면 좋다.
// 이런걸 사이드 이펙트라한다.

//어쨋뜬 본질로 중요한건 HTML렌더링이니, 렌더링을 먼저 완료한후, 위의 사이드이펙트를 처리하는게 관례라하네
export const UseEffectFnc = () => {


    //가장 기본형은 컴포넌트가 장착 될때 무조건 실행된다.
    //또한, 스테이트값이 업데이트 되어도 반응한다.
    useEffect(() => {
        console.log("안녕하십니까");
    });

    let [data, setData] = useState(0);













    //자바스크립트값을 변경하면 당연히 컴포넌트가 변경된게 없어, 위 유즈이펙트는 반응하지 않는다.
    let x = 1;

    return (
        <>
            <button style={{ width: "100px", height: "100px" }} onClick={() => {

                data = data + 1;
                setData(data);


            }}>스테이트 변경 버튼</button>
            <br></br>
            <button style={{ width: "100px", height: "100px" }}

                onClick={() => {
                    x++;
                    console.log(x);
                }}

            >자바스크립트 값 변경버튼</button>
        </>
    );
}