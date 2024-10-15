import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Loding = styled.div`
position: fixed;
top:600px;
left:300px;
background-color: red;
height: 600px;

`
export const AxiosEx05 = () => {

    let [prosobj, setProsobj] = useState([])
    let [prosopen, setProsopen] = useState(false)
    let [list, setList] = useState(1);
    let [loding, setLoding] = useState(false);

    //숙제 
    // 특정 페이지 들어가자마자 바로 악시오스 실행하기
    // 그냥 useEffect 속에 집어 넣거나 그냥 외부에 적어도된다.


    useEffect(() => {


        axios("http://localhost:4000/data2.json").then((result) => { 

result.data.map((obj,index)=>{
    console.log(obj)
})

        
        }).catch(() => { 

        })




    }, []);



    return (<>

        <h1>그냥 접속하자마자 악시오스실행하기</h1>
        <h1>개발자도구 콘솔창확인 ㄱ</h1>

    </>)

}