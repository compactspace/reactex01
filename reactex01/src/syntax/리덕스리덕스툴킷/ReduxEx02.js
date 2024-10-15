import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector ,useDispatch} from 'react-redux';

//store.js 에서 스테이트 변경 함수 가져오기
import {changeName} from '../../store/store'

import {changearr} from '../../store/store'

import {changeobj} from '../../store/store'
//store.js 에 있는 cart 의 초기값이 배열인 데 그걸 보고
// 반복문으로 출력해보세요오


export const ReduxEx02 = () => {


    
    
    
    let cart = useSelector((state) => { return state.cart });
    let user = useSelector((state) => { return state.user });
    let arr = useSelector((state) => { return state.arr });
    let obj = useSelector((state) => { return state.obj });
    let dispatch=useDispatch();
    
    // 키만 때와서 배열로 만든다.
    console.log(Object.keys(obj));

    Object.keys(obj).map((key)=>{
        // 자바스크립트 병신같이 객체도, 배열처럼 객체명[key] 형식이 가능하다.
        // 이 기법을 아래에서 적용할 것임
    //https://velog.io/@khy4018/React-%EA%B0%9D%EC%B2%B4-%EB%B0%98%EB%B3%B5%EB%AC%B8    
     console.log(obj[key])
    })



    return (<>



        <h1>그냥 스토어.js 에서 세팅한 스테이트 가져와 반복문으로</h1>
       {
cart.map((obj,index)=>{
return (
   <>
    <h3>고유번호:{obj.id}</h3>
<h3>상품이름:{obj.name}</h3>
<h3>상품수량:{obj.count}</h3>
   </>
);

})


       }
   <h1>그냥 스토어.js 에서 세팅한 스테이트 값을 변경시켜봅니다. </h1>
<button onClick={()=>{
dispatch(changeName())

}}>
    {user}
</button>

<h1>그냥 스토어.js 에서 세팅한 배열 스테이트 값을 변경시켜봅니다. </h1>
<button onClick={()=>{
dispatch(changearr())

}}>
    {arr.map((ob,i)=>{
return `${ob}`;
    })}
</button>


<h1>그냥 스토어.js 에서 세팅한 객체 스테이트 값을 변경시켜봅니다. </h1>
<button onClick={()=>{
dispatch(changeobj())

}}>
{Object.keys(obj).map((key,i)=>{

return `${obj[key]}`;

})}
</button>




<h1>그냥 스토어.js 에서 세팅한 객체 스테이트 값 변수를 넣어 변경시켜봅니다. </h1>
<button onClick={()=>{
dispatch(changeobj({x1:"하하",x2:"고구마"}))

}}>
{Object.keys(obj).map((key,i)=>{

return `${obj[key]}`;

})}
</button>



    </>)

}