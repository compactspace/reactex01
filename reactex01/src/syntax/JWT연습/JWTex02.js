import React, { useState } from "react";
import axios from "axios";

export const JWTex02 = () => {




    const 토큰검사 = async () => {

        let token = localStorage.getItem("token");

        if (token == null || token == undefined) {
            alert("토큰을 먼저 발급받아라")
        }
        else {
          await  axios.get("http://localhost:4000/jwtautho",{params:{accessToken:token}}).then((result) => {

                console.log(result)

            })
        }


    }


const 토큰검사미들웨어 = async ()=>{

    let token = localStorage.getItem("token");

    if (token == null || token == undefined) {
        alert("토큰을 먼저 발급받아라")
    }
    else {
      await  axios.get("http://localhost:4000/jwtauthocheck",{params:{accessToken:token}}).then((result) => {

            console.log(result)

        })
    }


}

    return (<>
        <button onClick={
            () => {
                axios.get("http://localhost:4000/jwt").then((

                    result

                ) => {
                    console.log(result)
                    let { accessToken } = result.data;
                    let { userId } = result.data;
                    console.log(accessToken)
                    console.log(userId)
                    //유저 아이디는 그냥 태워 보내는게 유리할듯..
                    localStorage.setItem("token", accessToken);
                    localStorage.setItem("userId", userId);



                })

            }
        }>토큰을 발급받아 봅니다잉</button>


        <button onClick={ 토큰검사}>토큰이 유효한지 확인해봅니다.</button>


        <button onClick={ 토큰검사미들웨어}>토큰미들웨어로 유효한지 확인해봅니다.</button>

    </>);
}