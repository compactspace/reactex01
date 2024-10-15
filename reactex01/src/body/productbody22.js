import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import axios from "axios";

import {ProductBody2} from'../body/productbody2'
axios.defaults.withCredentials = true;
const AllwrapperProductdiv=styled.div`
display: flex;
flex-direction: column;
height: 1600px;

`;


const Row1=styled.div`
height: 15%;
display: flex;
flex-direction: column;

`;

const Row2=styled.div`
height: 85%;
display: flex;
flex-direction: column;

`;





export const ProductBody =()=>{
    let data
const [testdata, setTestdata]=useState();

  
    const  Logingo = async () => {

      await  axios.get('http://localhost:4000/user/getboad/1', null, {
      
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log("자동호출이 불가?")
            console.log(res.data.pagelist[0]) 
            console.log(res.data.totalrow) 
            // setTestdata(res)
         

         
          
        })


 


    }

 
    // useEffect(()=>{

    //     if(Logingo()!=null){
       
    //             setTestdata(Logingo())
    //             console.log(testdata);
          
    //     }
    // })
    const x=Logingo();
   
return(
<>
 
<ProductBody2 firstpage={x}></ProductBody2>
</>

) ;
    

}