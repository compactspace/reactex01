

import testmain3 from '../img/art.jpg'
// import { MainBody } from '../body/mainbody'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import React, { useState, useEffect } from 'react'
import { Ondayclass } from '../pages/Onedayclasspage'
// import { WrapperNaveBody } from '../wrappernavbody/wrapper'
// import {Aallfooterwrapper,Footerrow1,Footerrow1col1,Footerrow1col2,Footerrow2,Footerrow2col1,Footerrow2col2,Footerrow2col3} from '../footer/footer'
// import {Footer} from '../footer/footer'

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import SwiperCore, { Navigation } from "swiper";


export const AallWrapperNave = styled.div`
height: ${(Mainprops) => Mainprops.height ? `${Mainprops.height}` : '100vh'}; 
/* height: ${(Mainprops) => Mainprops.raitoheight ? `${Mainprops.raitoheight + "px"}` : '100vh'};*/
 /* height: ${Mainprops => {
      
     
        if (Mainprops.ondedayraito != null) {
         
          
            return `${Mainprops.ondedayraito + "px"}`;

        } else if (Mainprops.raitoheight != null) {
      
            return `${Mainprops.raitoheight + "px"}`
        }
    }};  */
background-image: url(${testmain3});
background-size: 100% 100%;

width: 100%;
background-repeat: no-repeat;
z-index: 1;
display: flex;
flex-direction: column;

@media screen and (max-width: 500px) {
 height:  ${Mainprops => {      

        if (Mainprops.ondedayraito != null ) {
          
            return `${Mainprops.ondedayraito + "px"}`;

        } else if (Mainprops.raitoheight != null) {
      
          
            return `${Mainprops.raitoheight + "px"}`
        }
    }};

 width: 100%;
 background-size: 100% 100%;
    }


`;

const Allfooterwrapper = styled.div`
display: flex;
flex-direction: column;
height: 400px;
background-color: black;
`;



const Navdiv = styled.div`
height: 90px;
display:flex;
position: relative;
justify-content: space-between;
/* background-color : rgb(255,255,255,0.2); */


 /* & ul{
    display: none;
    padding: 0px 0px;
    list-style: none;
}    */
& ul {display:${(props) => props.display || 'none'}}
@media screen and (max-width: 500px) {
    /* flex-direction: column;
        align-items:flex-end; */
     
    & ul{
       
      display: block;
    padding: 0px 0px;
}

    }

`;






const LeftsubNavdiv = styled.div`
display:flex;
justify-content: space-between;
>a{
    /* color: #05141f; */
    color :rgb(255, 255, 255); 
    font-weight: 600px;
font-size: 20px;
margin-left: 10px;
margin-right: 10px;
font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;

}
`;

const RightsubNavdiv = styled.div`
display:flex;
justify-content: space-between;

>div{ color :rgb(255, 255, 255); 
    font-weight: 400px;
font-size: 20px;
margin-top: 15px;
margin-right: 15px;}
>a{
    /* color: #05141f; */
    color :rgb(255, 255, 255); 
    font-weight: 400px;
font-size: 20px;
margin-left: 10px;
margin-right: 10px;
font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
 >li{
    color :rgb(255, 255, 255); 
    font-weight: 400px;
font-size: 20px;
margin-top: 15px;
margin-right: 15px;
}
}
`;
export const Home = styled.a`
text-decoration:none;
    line-height: 90px;
    vertical-align: middle;
`

export const LinkLogin = styled.a`
text-decoration:none;
 line-height: 90px;
    vertical-align: middle;
`;




export const LinkGasipan = styled.a`
text-decoration:none;
 line-height: 90px;
    vertical-align: middle;
`;

export const LinkProduct = styled.a`
text-decoration:none;
 line-height: 90px;
    vertical-align: middle;
`;

export const LinkLogout = styled.a`
text-decoration:none;
 line-height: 90px;
    vertical-align: middle;
`;


export const Forberul = styled.ul`
color :rgb(255, 255, 255); 
background-color: black;

& a{
    color :rgb(255, 255, 255); 
    font-weight: 400px;
font-size: 20px;
margin-top: 15px;
margin-right: 15px;
text-decoration: none;
}



&>li{
    color :rgb(255, 255, 255); 
    font-weight: 400px;
font-size: 20px;
margin-top: 15px;
margin-right: 15px;
}
`;






export const Nav = (Mainprops) => {

 console.log(Mainprops)

    const [forcss, setForcss] = useState({ height: Mainprops.height })
    // console.log(forcss.height);

    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' });
    const [ismatch, setIsmatch] = useState(ismatchcheck);
    const [berger, setIsberger] = useState({ isberger: false, isclick: 'Click Me' });
    const [raitoheight, setRaitoheigh] = useState(window.innerWidth); 
    const [ondedayraito, setOndedayraito] =useState(Mainprops.ondedayraito)

    useEffect(() => {
       
        if (ismatchcheck) {
          
            window.addEventListener('resize', () => {
              
               
                setOndedayraito(window.innerWidth)
                setRaitoheigh(window.innerWidth)
              
            })
        } else {
           
            window.addEventListener('resize', () => {
               
                setOndedayraito(Mainprops.ondedayraito)
                setRaitoheigh(window.innerWidth)
            })
        }
        return () => {
            console.log("업데이트 되기전!")
        }

    }, [raitoheight])




    //이는 딱한번 유저가 들어올때 실행되는 useEffect 임
    // 유저가 500px 이상 또는 이하 어디서 들어올지 모르니
    //한번만 호출하면됨
    useEffect(() => {
        if (ismatchcheck) {
          
            setIsmatch(true)

        } else {
            // console.log("엘스는->>>>>" + ismatch)
            setIsmatch(false)
        }
    })



    //{isberger: false, isclick: 'Click Me'} 형태로 데이터
    const Hemberger = () => {
        console.log(berger)
        if (berger.isberger) {
            setIsberger({ isberger: false, isclick: 'Click Me' })
        } else {
            setIsberger({ isberger: true, isclick: 'Close' })
        }

    }
   

    if (Mainprops.iscookie == null || Mainprops.iscookie == false) {
        return <>

            {/* <AallWrapperNave height={Mainprops.height}> */}
            <AallWrapperNave className="AallWrapperNave" raitoheight={raitoheight} ondedayraito={ondedayraito}>
                <Navdiv>
                    {ismatch ? <><RightsubNavdiv>
                        <div onClick={Hemberger}>{berger.isclick}

                            {berger.isberger ?

                                <Forberul>
                                    <li><Home href='/'>홈으로</Home></li>
                                    <li><LinkGasipan>여러분의공간</LinkGasipan></li>
                                    <li><LinkProduct href="/getfirstproduct">펜시상품</LinkProduct></li>
                                    <li><LinkLogin href='/login' >Login</LinkLogin></li>
                                </Forberul>

                                : <></>}

                        </div>        </RightsubNavdiv></> : <>

                        <LeftsubNavdiv>
                            <Home href='/'>홈으로</Home>
                            <LinkGasipan href="/board">여러분의공간</LinkGasipan>
                            <LinkProduct href="/getfirstproduct" >펜시상품</LinkProduct>
                        </LeftsubNavdiv>


                        <RightsubNavdiv>
                            <LinkLogout href='/login'>Login</LinkLogout>
                        </RightsubNavdiv>
                    </>}


                </Navdiv>
            </AallWrapperNave>

        </>

    } else if (Mainprops.iscookie == true) {
        return <>
            <AallWrapperNave className="AallWrapperNave" raitoheight={raitoheight}>
                <Navdiv>

                    {ismatch ? <><RightsubNavdiv>
                        <div onClick={Hemberger}>{berger.isclick}

                            {berger.isberger ?

                                <Forberul>
                                    <li><Home href='/' >홈으로</Home></li>
                                    <li><LinkGasipan>여러분의공간</LinkGasipan></li>
                                    <li><LinkProduct href="/getfirstproduct">펜시상품</LinkProduct></li>
                                    <li><LinkLogin href='/logout' >logout</LinkLogin></li>
                                </Forberul>

                                : <></>}

                        </div>        </RightsubNavdiv></> : <>

                        <LeftsubNavdiv>
                            <Home href='/'>홈으로</Home>


                            <LinkGasipan>여러분의공간</LinkGasipan>
                            <LinkProduct href="/getfirstproduct" >펜시상품</LinkProduct>
                        </LeftsubNavdiv>
                        <RightsubNavdiv>
                            <LinkLogout href='/logout'>Logout</LinkLogout>
                        </RightsubNavdiv>
                    </>}


                </Navdiv>
            </AallWrapperNave>


        </>
    }



}