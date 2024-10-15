import { MyPage } from '../body/mypage'
import { Header } from '../header/header'
import axios from 'axios';
import React, { useState, useEffect } from "react";

export const MainMyPage = () => {

    let [myinfobtn, setMyinfobtn] = useState(true);
    let [myreservepage, setMyreservepage] = useState(true);
    let [reservelist,setReserveList]=useState(null);
  

    useEffect(()=>{

        let id=window.localStorage.getItem('userId');
        let data={"id":id};
        let headers={'Content-Type': 'application/json'}

        axios.post('http://localhost:4000/user/mypage',data,headers).then((res)=>{
        console.log(res.data);

        setReserveList(res.data);

        }).catch((err)=>{console.log("뭔가망")})

    },[])



    return (<>
    {/* 여기선 스크롤바 이벤트가 필요없기에, 헤더 색깔 결정하는 vmatch를 그냥 "true로 보낸거임" */}
        <Header  vmatch={"true"} myinfobtn={myinfobtn} myreservepage={myreservepage}>            
        </Header>

        <MyPage reservelist={reservelist}>

        </MyPage>
    </>)

}