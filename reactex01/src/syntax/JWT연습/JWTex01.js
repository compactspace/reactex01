import React, { useState } from "react";
import axios from "axios";
export const JWTex01 = () => {

const [auth,setAuth]=useState(null);


    return (<>
        <button onClick={() => {
            axios.get('http://localhost:4000/jwt', { params: { data1: "hello" } }).then((result) => {

            console.log("익스프레스가 준 토큰값은?")
            console.log(result.data.accessToken)
            let accessToken=result.data.accessToken;
            localStorage.setItem("token",accessToken);
            setAuth(localStorage.getItem("token"));      

            }).catch(() => { console.log("뭔가 좆망") })

        }}>서버에토큰을 요청합니다.</button>


<button onClick={() => {
            axios.get('http://localhost:4000/authuser',{headers:{token:localStorage.getItem("token")}}).then((result) => {

            console.log("익스프레스의 응답은?")
            console.log(result)

            }).catch(() => { console.log("뭔가 좆망") })

        }}>서버에토큰을 요청합니다.</button>


    </>)
}