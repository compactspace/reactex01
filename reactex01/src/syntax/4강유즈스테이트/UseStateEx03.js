import { useState } from "react";


export const UseStateEx03 = () => {

    //주의 사항
    //useState 함수의 매개변수에는 배열이나, 객체가 들어갈 수 있는데
    //이런 참조 타입들은 아예 새로운 주소값을 부여 받은 놈들이여야만 변경해준다.

    let [index, setIndex] = useState(0);

    let [newarr, SetNewArr] = useState([1, 2, 3]);

    return (<>/

        <h1 onClick={() => {
            index = index + 1;
            setIndex(index);
        }}>일반타입은 state값 그냥 바뀌어도 ok:  {index} </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 onClick={() => {


// [...배열] : 아예 새로운 주소를 부여하는 연산이다.
//참조 타입급은  set함수가  기존의 스테이트 ==신규스테이트, 변경을 감지 하는 것이기 때문에 
//깊은 복사를 해야한다.
            let deepcopy=[...newarr];
            deepcopy[0]=100;
            SetNewArr(deepcopy);


//아래 주석 처럼 하면 주소 만 복사 한것으로 스테이트 변경이 되질 않는다.
/*
  let deepcopy=newarr;
            deepcopy[0]=100;
            SetNewArr(deepcopy);


*/

//자세한건 javascript reference data type이라고 검색

        }}>참조타입 새로운 원본을 만들면 변경됨:   {newarr[0]}</h1>



    </>);
}