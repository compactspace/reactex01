import { useState, useEffect } from "react";




export const UseEffectFncEx04 = () => {


    let [data, setData] = useState(0);


    //유즈 이펙트의 두번째 매개변수의 빈배열 [] 이 [ ] 안에 있는 값들이 변할때마다 실행된다는 말
    // 즉 빈배열로 두면!! 
    //컴포넌트가 최초 마운트 될때에만 딱한번 실행되는 결과를 얻을 수 있다.
    useEffect(() => {

        console.log("하핳");

    }, [])

    //계속 강조하지만 스테이트의 변화는 컴포넌트의 재랜더링을 유발하는건 맞는데
    //useEffect는 그거에 반응하여, 코드를 짜는거고


    //useEffect 밖의 일반 영역은 컴포넌트의 변경에 의해  다시 각종 함수 로그들이 작동함
    console.log("ㅇㅇㅇ")



    return (<>
        <button onClick={() => {

            data = data + 1;
            setData(data);


        }}>스테이트 변경</button>

    </>);
}