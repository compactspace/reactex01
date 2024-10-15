import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
// import { changeauthtoken } from '../../store/store';

import { useNavigate } from 'react-router-dom';

//네이버 로그인후 콜백 url을 이 컴포넌트로 설정하자.

export const LoginLoadingComponent = () => {

    const navigate = useNavigate();

    const [local, setLocal] = useState(null);
    let dispatch = useDispatch();
    let code = window.location.href.split("=")[1]

    var data = {
        code: window.location.href.split("=")[1]
    }   
    useEffect(() => {
        
        axios.get("http://localhost:4000/naver", { params: data }).then((
            result) => {
            // console.log("result 값은")
            // console.log(result);
            let { accessToken } = result.data
            let { userId } = result.data


            localStorage.setItem("token", accessToken);
            localStorage.setItem("userId", userId)
            
            if (localStorage.getItem("token") == null) {
                // console.log("이프문 널인 경우")
                // console.log(localStorage.getItem("token"))


                // dispatch(changeauthtoken(localStorage.getItem("token"))); 
                // dispatch(changeauthtoken("err"));          
                //   navigate('/main');   
                window.location.replace('/main2');
              //  window.location.replace('/main');
            } else {
                // console.log("엘스문 널이 아닌경우")
                // console.log(localStorage.getItem("token"))

                // dispatch(changeauthtoken(localStorage.getItem("token")))   
                // dispatch(changeauthtoken(true));   
                //   navigate('/main')
                window.location.replace('/main2');
                  //  window.location.replace('/main');
            }


        }).catch(() => {
            console.log("뭔가잘못됨")
        })


    })



    //이유는 모르겟으나 아래 주석 코드는 useEffect 속에 있어야 작동함

    // if (localStorage.getItem("token") == null) {
    //     console.log("이프문 널인 경우")
    //     console.log(localStorage.getItem("token"))
    //     // dispatch(changeauthtoken(localStorage.getItem("token"))); 
    //     dispatch(changeauthtoken(true));          
    //     navigate('/main');    
    // } else {
    //     console.log("엘스문 널이 아닌경우")
    //     console.log(localStorage.getItem("token"))
    //     // dispatch(changeauthtoken(localStorage.getItem("token")))   
    //     dispatch(changeauthtoken(false));   
    //     navigate('/main')
    // }






}