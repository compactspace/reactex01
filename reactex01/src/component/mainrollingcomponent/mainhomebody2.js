import { useMediaQuery } from 'react-responsive'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import main from '../../img/main.jpg'
import main2 from '../../img/main2.jpg'
import restimg1 from '../../img/restimg1.jpg'
import restimg2 from '../../img/restimg2.jpg'
import restimg3 from '../../img/restimg3.jpg'
import dessertimg1 from '../../img/dessertimg1.jpg'
import dessertimg2 from '../../img/dessertimg2.jpg'
import dessertimg3 from '../../img/dessertimg3.jpg'
import innerrestimg1 from '../../img/innerrestimg1.jpg'
import innerrestimg2 from '../../img/innerrestimg2.jpg'
import innerrestimg3 from '../../img/innerrestimg3.jpg'
import testmain1 from '../../img/testmain1.jpg'
import coffieimg1 from '../../img/coffieimg1.jpg'
import coffieimg2 from '../../img/coffieimg2.jpg'
import coffieimg3 from '../../img/coffieimg3.jpg'

import latteimg1 from '../../img/latteimg1.jpg'
import latteimg2 from '../../img/latteimg2.jpg'
import latteimg3 from '../../img/latteimg3.jpg'

import workimg1 from '../../img/work_img1.jpg'
import workimg2 from '../../img/work_img2.jpg'
import workimg3 from '../../img/work_img3.jpg'
import workimg4 from '../../img/work_img4.jpg'

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import SwiperCore, { Navigation } from "swiper";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import axios from "axios";


export const Mainbodydiv = styled.div`
display: flex;
flex-direction: column;
/* height: 100vh;
width: 100%; */

`;


const ZeroBody = styled.div`
display: flex;
flex-direction: column;
`;

const ZeroBodyrow1 = styled.h1`
text-align: center;
margin-top: 40px;
color: #05141f;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 42px;
    font-weight: 400;
`;


const WrapperforZeroBodyrow2 = styled.div`
display: flex;
justify-content: center;

`;
const DivforZeroBodyrow2Elemnet = styled.div`
width:20%;
height:400px;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 500px) {
    width:50%;


    }


/* background-color:red; */
`;

const ZeroBodyrow2Elemnet = styled.div`
width:100%;
height:100%;
background-size: 100% 100%;
`;






const FirstBody = styled.div`
display: flex;
flex-direction: column;

`;

const FirstBodyrow1 = styled.h1`
text-align: center;
margin-top: 40px;
color: #05141f;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 42px;
    font-weight: 400;

`;

const FirstBodyrow2 = styled.div`
display: flex;
justify-content: center;
`;

const Row2Element = styled.ul`
width: 30%;
display: flex;
justify-content: space-around;
list-style: none;
padding: 0px 0px;
color: #697278;

    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 20px;
    font-weight: 400;
    height: 46px;
>li{
    display: inline-block;
}
`;


const FirstBodyrow3 = styled.div`
display: flex;
flex-direction: column;
height: 30%;
width: 100%;

@media screen and (max-width: 500px) {

                height:480px;
                width: 100%;


    }


`;

const Row3Elemnt1 = styled.div`
height: 100vh;
/* background-image:url(${restimg1}) ; */
background-size: 100% 100%;
@media screen and (max-width: 500px) {

height: 100%;
width: 100%;
background-size: 100% 100%;

}
`;

const Row3Elemnt2 = styled.div`
height: 100vh;
/* background-image:url(${restimg2}) ; */
background-size: 100% 100%;
@media screen and (max-width: 500px) {

height: 100%;
width: 100%;
background-size: 100% 100%;

}

`;

const Row3Elemnt3 = styled.div`
height: 100vh;
/* background-image:url(${restimg3}) ; */
background-size: 100% 100%;
`;


const TwotBody = styled.div`
display: flex;
flex-direction: column;

`;

const TwotBodyrow1 = styled.h1`
text-align: center;
margin-top: 40px;
color: #05141f;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 42px;
    font-weight: 400;


`;

const TwotBodyrow1s = styled.h5`
text-align: center;
margin-top: 0px;
color: #05141f;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 32px;
    font-weight: 400;


`;



const TwotBodyrow2 = styled.div`
display: flex;
justify-content: center;
color: #05141f;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 42px;
    font-weight: 400;
`;

const TwotBodyrow2Element = styled.ul`
width: 30%;
display: flex;
justify-content: space-around;
list-style: none;
padding: 0px 0px;
color: #697278;

    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 20px;
    font-weight: 400;
    height: 46px;
>li{
    display: inline-block;
}
`;


const TwotBodyrow3 = styled.div`

display: flex;
justify-content: center;
`;


const DivforTwotBodyrow3Element = styled.div`
width:30%;
margin-left: 15px;
margin-right: 15px;
height: 600px;
position: relative;


@media screen and (max-width: 500px) {
    width:50%;


    }


`

const TwotBodyrow3Element = styled.div`

width:60%;
height:90%;
/* position: absolute; */
margin-right: auto;
margin-left: auto;
background-repeat: no-repeat;
background-size: 100% 80%;
/* background-color: red; */



`








export const MainHomeBody = () => {

    const [quantity, setQuantity]=useState();

    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' });
    const [ismatch, setIsmatch] = useState();
    // console.log("ismatch,->>>>>" + ismatch)
    useEffect(() => {
        if (ismatchcheck) {
            setIsmatch(true)
        } else {
            
            setIsmatch(false)
        }
    })

    const [row3image1, setRow3image1] = useState(restimg1)
    const [row3image2, setRow3image2] = useState(restimg2)
    const [row3image3, setRow3image3] = useState(restimg3)
    const [TwotBodyrow2image1, setTwotBodyrow2image1] = useState(dessertimg1)
    const [TwotBodyrow2image2, setTwotBodyrow2image2] = useState(dessertimg2)
    const [TwotBodyrow2image3, setTwotBodyrow2image3] = useState(dessertimg3)






    const Innerrest = () => {

        setRow3image1(innerrestimg1)
        setRow3image2(innerrestimg2)
        setRow3image3(innerrestimg3)

        console.log("row3image1->>>>" + row3image1)
        console.log("row3image2->>>>" + row3image2)
        console.log("row3image3->>>>" + row3image3)
    }

    const Exteriorrest = () => {
        setRow3image1(restimg1)
        setRow3image2(restimg2)
        setRow3image3(restimg3)

    }

    const Coffieimg = () => {
        setTwotBodyrow2image1(coffieimg1)
        setTwotBodyrow2image2(coffieimg2)
        setTwotBodyrow2image3(coffieimg3)
    }

    const Latteimg = () => {

        setTwotBodyrow2image1(latteimg1)
        setTwotBodyrow2image2(latteimg2)
        setTwotBodyrow2image3(latteimg3)

    }

    const Dessertimg = () => {

        setTwotBodyrow2image1(dessertimg1)
        setTwotBodyrow2image2(dessertimg2)
        setTwotBodyrow2image3(dessertimg3)

    }


  const Itemtwoadd=()=>{


  }

  const Itemoneadd=()=>{
   const add = localStorage.getItem("key");
 axios.post('http://localhost:4000/specialdiscountadd',null,{

 params:{"data1": add, "data2": "item"}

 },{withCredentials:true}).then((res)=>{

console.log("res.data->>"+res.data);
if(res.data=="already"){
    alert("특가상품은 품목당 한사람씩입니다.")
}else if(res.data=="noalready"){
    alert("장바구니에 담았습니다.");
    setQuantity(quantity-1);
}


 })

  }



    SwiperCore.use([Navigation]);
    return <Mainbodydiv>
        <ZeroBody>
            <ZeroBodyrow1>Yours Art</ZeroBodyrow1>
            <><p style={{ textAlign: 'center' }}>획일화된 전공생의 그림이 아닌 나만의 개성을 표현합니다.</p></>
            <WrapperforZeroBodyrow2>
            {ismatchcheck?<>
                <DivforZeroBodyrow2Elemnet>
                    
                    <ZeroBodyrow2Elemnet style={{
                            backgroundImage: `url(${workimg1})`
                        }}></ZeroBodyrow2Elemnet>
                </DivforZeroBodyrow2Elemnet>

                <DivforZeroBodyrow2Elemnet>

                <ZeroBodyrow2Elemnet style={{
                            backgroundImage: `url(${workimg2})`
                        }}></ZeroBodyrow2Elemnet>
                </DivforZeroBodyrow2Elemnet>      
            </>:<>
            <DivforZeroBodyrow2Elemnet>
                    
                    <ZeroBodyrow2Elemnet style={{
                            backgroundImage: `url(${workimg1})`
                        }}></ZeroBodyrow2Elemnet>
                </DivforZeroBodyrow2Elemnet>

                <DivforZeroBodyrow2Elemnet>

                <ZeroBodyrow2Elemnet style={{
                            backgroundImage: `url(${workimg2})`
                        }}></ZeroBodyrow2Elemnet>
                </DivforZeroBodyrow2Elemnet>
                <DivforZeroBodyrow2Elemnet>
                <ZeroBodyrow2Elemnet style={{
                            backgroundImage: `url(${workimg3})`
                        }}></ZeroBodyrow2Elemnet>

                </DivforZeroBodyrow2Elemnet>
                <DivforZeroBodyrow2Elemnet>

                <ZeroBodyrow2Elemnet style={{
                            backgroundImage: `url(${workimg4})`
                        }}></ZeroBodyrow2Elemnet>
                </DivforZeroBodyrow2Elemnet>
            
            </>}
               
            </WrapperforZeroBodyrow2>
        </ZeroBody>

        <FirstBody>
            <FirstBodyrow1>Rest Area</FirstBodyrow1>
            <FirstBodyrow2>
                <Row2Element>
                    <li onClick={Exteriorrest}>외부휴식공간</li>
                    <li onClick={Innerrest}> 내부휴식공간</li>
                </Row2Element>
            </FirstBodyrow2>

            <FirstBodyrow3 className='FirstBodyrow3'>
                <Swiper className='FirstBodyrow3siper' style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",

                }}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}

                >
                    <SwiperSlide >
                        <Row3Elemnt1 style={{
                            backgroundImage: `url(${row3image1})`
                        }} >

                        </Row3Elemnt1>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Row3Elemnt2 style={{
                            backgroundImage: `url(${row3image2})`
                        }}>
                        </Row3Elemnt2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Row3Elemnt3 style={{
                            backgroundImage: `url(${row3image3})`
                        }}>
                        </Row3Elemnt3>
                    </SwiperSlide>

                </Swiper>
            </FirstBodyrow3>
        </FirstBody>
        <TwotBody>
            <TwotBodyrow1>20% Off</TwotBodyrow1>
            <TwotBodyrow1s>Today</TwotBodyrow1s>
            <TwotBodyrow2>
                <TwotBodyrow2Element>
                    <li onClick={Coffieimg}>
                        Coffie
                    </li>
                    <li onClick={Latteimg}>
                        Latte
                    </li>
                    <li onClick={Dessertimg}>
                        Dessert
                    </li>
                </TwotBodyrow2Element>
            </TwotBodyrow2>

            <TwotBodyrow3>
                {ismatch ?
                    <>
                        <DivforTwotBodyrow3Element>
                            <TwotBodyrow3Element style={{ backgroundImage: `url(${TwotBodyrow2image1})` }}>
                            
                            </TwotBodyrow3Element>
                            <TwotBodyrow1s>수량:{quantity} </TwotBodyrow1s>
                            {quantity==="품절"?<></> : <h4 onClick={Itemoneadd}> 담기</h4>}
                           
                        </DivforTwotBodyrow3Element>
                        <DivforTwotBodyrow3Element>
                            <TwotBodyrow3Element style={{ backgroundImage: `url(${TwotBodyrow2image2})` }}>
                            </TwotBodyrow3Element>
                            <TwotBodyrow1s>수량:{quantity} </TwotBodyrow1s>
                            {quantity==="품절"?<></> : <h4 onClick={Itemoneadd}> 담기</h4>}
                        </DivforTwotBodyrow3Element>

                    </>
                    :
                    <>
                        <DivforTwotBodyrow3Element>
                            <TwotBodyrow3Element style={{ backgroundImage: `url(${TwotBodyrow2image1})` }}>
                            
                            </TwotBodyrow3Element>
                            <h4>수량:{quantity}</h4>
                            {quantity==="품절"?<></> : <h4 onClick={Itemoneadd}> 담기</h4>}
                        </DivforTwotBodyrow3Element>
                        <DivforTwotBodyrow3Element>
                            <TwotBodyrow3Element style={{ backgroundImage: `url(${TwotBodyrow2image2})` }}>
                            </TwotBodyrow3Element>
                            <h4>수량:{quantity}</h4>
                            {quantity==="품절"?<></> : <h4 onClick={Itemoneadd}> 담기</h4>}
                        </DivforTwotBodyrow3Element>
                        <DivforTwotBodyrow3Element>
                            <TwotBodyrow3Element style={{ backgroundImage: `url(${TwotBodyrow2image3})` }}>
                            </TwotBodyrow3Element>
                        </DivforTwotBodyrow3Element>

                    </>

                }
            </TwotBodyrow3>
        </TwotBody>
    </Mainbodydiv>
}
