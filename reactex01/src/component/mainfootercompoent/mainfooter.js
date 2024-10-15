import { useMediaQuery } from 'react-responsive'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';




import art from '../../img/art.jpg'
import coock from '../../img/coock.jpg'
import drawing from '../../img/drawing.jpg'
import business2 from '../../img/business2.jpg'

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'



const FooterWrapper=styled.div`
display: ${(props)=>
props.match =="true"? "none" :"block"};
background-color: #f0f0f0;
padding-top: 50px;
    padding-bottom: 15px;

&>div{
 
    max-width: 1280px;
    margin: auto auto;

}
//패딩도강제로 길이 높이 반영
& .contentbox{
    padding:38px 0;
    padding-left: 240px;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 212px auto;

}

& .contentinfo{

    display: grid;
    grid-template-columns: 20% 80%;
    
}

`





export const MainFooter = (props) => {



    return (<>
    <FooterWrapper className='FooterWrappe' match={props.match}>
<div>
<div class="contentbox" style={{ backgroundImage: `url(${business2})` }}>
<div class="contentinfo">(주)뭐할까?</div>
<div class="contentinfo">(사업자번호):123-333</div>
<div class="contentinfo">(사업태):중개업</div>
<div class="contentinfo">(주소)안양시 동안구</div>
<div class="contentinfo">(반갑)사업자 반갑습니다.</div>

</div>
</div>
    </FooterWrapper>

    </>);
}