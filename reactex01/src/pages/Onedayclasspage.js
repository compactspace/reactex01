
import {Nav} from '../nav/nav'
import {Footer} from '../footer/footer'
import styled from 'styled-components'
import {AallWrapperNave} from '../nav/nav'
import {Onedaybody} from '../body/onedaybody'
// import {Navforoneday} from '../nav/navforoneday'
import { useMediaQuery } from 'react-responsive'
import React, { useState, useEffect, useRef } from 'react'
export const Ondayclass=()=>{
    const key=localStorage.getItem("key")
    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' });
    const [raito, setRaitoheigh] = useState(window.innerHeight);  

    return (
<>
{key==null ?
<><Nav ondedayraito={raito/2} ></Nav>
<Onedaybody ></Onedaybody>
 <Footer></Footer> 
</>
:
<>
<Nav ondedayraito={raito/2} iscookie={true} ></Nav>
<Onedaybody ></Onedaybody>
 <Footer></Footer> 
</>
}

</>


    );
}

