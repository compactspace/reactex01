import React, {useEffect} from "react";
import axios from "axios";

export const NaverloginCompleteEx01=()=>{


    console.log(window.location.href.split("=")[1])

    var data = {
        code: window.location.href.split("=")[1]
      }

    
      axios("http://localhost:4000/naver",  { params: data }).then((
        result)=>{
            console.log("result 값은")
            console.log(result)
        }).catch(()=>{console.log("뭔가잘못됨")})
       

    return(<>
    <h1>로그인후 성공화면</h1>
    </>);
}