import React, { useState,useEffect } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import axios from "axios";
import  {Nav}  from "../nav/nav";
import {MainBody} from '../body/mainbody'
import {Footer} from '../footer/footer'

export const CookieManager = () => {
  const [iscookie, setIscookie] = useState(false);
  let check = localStorage.getItem("key");

  useEffect( () => {
    if(check===null){

      setIscookie(false)}
      else{
   
        setIscookie(true)}   
    
       } ,  [iscookie] );


       useEffect( () => {
       
       })


console.log("iscookie->>>>"+iscookie)
  return (
    //props 의 전달 방식은
    // 컴포넌트 호출 자유로운이름=값 꼴
  <>
    <Nav iscookie={iscookie} /> 
<MainBody />
<Footer/>
  
  </>

  )
}




