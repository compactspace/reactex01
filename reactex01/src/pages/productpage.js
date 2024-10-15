import React, { useState, useEffect } from 'react'

import {Footer} from '../footer/footer'
import { useMediaQuery } from 'react-responsive'
 import { Navforproduct  } from '../nav/navforproduct'
 import {ProductBody} from '../body/productbody'
 
export const Product =()=>{
    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' });
    const [raito, setRaitoheigh] = useState(window.innerHeight);  

    if(localStorage.getItem("key")===null){
        return  <>
    
    <Navforproduct></Navforproduct>
<ProductBody></ProductBody>
<Footer/>
    
    </>
    }else{
        return  <>
        <Navforproduct iscookie={true}></Navforproduct>
<ProductBody></ProductBody>
<Footer/>
    
     
       
       </>
    
    }






}