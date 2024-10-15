import { useState } from "react";




// 자바스크립트의 구조분해 할당
//이것도 만만찮은 문법이니 기초만 가져간다.

//=> 배열의 인덱스, 와 값을 분리(해체)

//=> 그리고 자바스크립트 오브젝트의  key  와 value 를  분리(해체)


// 분리(해체) 한뒤 변수에 값/value 를 할당(복사) 한다고 생각하자.

//한뒤 할당한다 정도로 암기.

export const UseStateEx01 = () => {

//먼저 배열의 구조분해 할당

const idx2fnc=(x)=>{

return 1+x;

}

let [idx1,idx2]=[1,idx2fnc];


console.log(idx1);

console.log(idx2(2));


//자바스크립트 객체의 구조분해할당
//단 배열과 다르게, 원래의 객체의 key로 담아야한다.

let javaScriptObj={key1:"value1",key2:"value2",key3:"value3"};

let {key1,key2,key3}=javaScriptObj

console.log("key1:  "+key1+" key2: "+key2+" key3: "+key3);

//유즈스테이트 펑션은 결국, 배열의 구조분해 할당이다.
    let [a, b] = useState("맛집");

//그리고 위 관찰로 보면 a는 값이고 b는 함수로써 setter 함수이다. 제발  내가  바로위 만든 예시좀 천천히 봐라
  
//역시 콘솔로그 찍으면 함수 자체가 뜬다, 추론이 맞는듯
//console.log(b);


    return (

        <>
            <h1 onClick={() => {

                b('노맛집')

            }}>{a}</h1>
        </>

    );


}