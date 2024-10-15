
import React, { useState, useEffect } from "react";
import axios from "axios";
export const Loginform=()=>{

    console.log(" 로그인 호출 + 새로고침시도 호출");
    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);
        
    const key = localStorage.getItem("key")  
    const [islogin, setIslogin] = useState(false)
    
    const [afterlogout, setAfterlogout] = useState(false);

    const changedId = (e) => {
       
        setId(e.target.value);
    }

    const changedPassword = (e) => {
        
        setPassword(e.target.value);
    }


    useEffect(() => {
       
        if (key === null) { 
            console.log("쿠키키록 삭제") 
    } else if (key === "20") {
        console.log("키값 일치")
        setIslogin(true) 
        console.log(islogin)
       }

        return () => {
        
            console.log("죽어있던값입니다.")
            if (islogin === true) {
                console.log("새로고침")
                setIslogin(false)

            }
            
        }
    }, [islogin]);  

   
    const Logingo = (e) => {

        axios.post('http://localhost:4000/user/login', null, {
            params: {
                "id": id,
                "password": password
            }
           
        }, {
            withCredentials: true,
        }).then((res) => {
            setIslogin(true);
            localStorage.setItem("key", "20");

  
           
         
        })


    }


   



    return(        
    <h1>아이디와 비번을 입력해주셍
    <input type="text" name="id" onChange={changedId} value={id}></input>
    <input type="password" name="password" onChange={changedPassword} value={password} ></input>
    <button onClick={Logingo}>제출</button>
  
    </h1>
    
    )   
    
    }