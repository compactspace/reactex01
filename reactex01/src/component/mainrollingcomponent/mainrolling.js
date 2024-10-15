import { useMediaQuery } from 'react-responsive'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';




import art from '../../img/art.jpg'
import coock from '../../img/coock.jpg'
import drawing from '../../img/drawing.jpg'


import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'




const MainrollingWrapper = styled.div`
    width: 100%;
    height: 1321px;
position: relative;

/* background-color: red; */



& .mainrollinginfo{
    color: aliceblue;
    font-size: 26px;
    font-weight: 600;
    position: relative;
    display: flex;
    flex-flow: column;
    padding-top: 228px;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    height: 100vh;
    z-index: 2;
    gap: 42px;
    row-gap: 42px;

}


& .titleinfo{

    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 75px;
    color: #FFFFFF;

}


& .titlebtn{

 
    display: flex;
    flex-flow: row;
    gap: 30px;

}



& .btn1{

    background: #FF5862;
    border-radius: 7px;
    padding: 20px 50px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
}


& .btn2{

    background: #FFF0F1;
    border-radius: 7px;
    padding: 20px 41px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #FF5862;

}



`;

const WrapperSub = styled.div`
 /* height: 1321px; */
    z-index: 2;    
    margin: auto;
  width: 100%;
/* position: fixed; */

&  div{
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
 
}


& video{
    height: 100%;
    width: 100%;
    object-fit: cover;
}




`;

const SubImg = styled.div`

`;






export const Mainrolling = () => {





    SwiperCore.use(Autoplay);
    return (
        <>
            <MainrollingWrapper className='allwrapper'>
                <WrapperSub className='WrapperSub'>

                    <Swiper className='FirstBodyrow3siper' style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        position: " absolute"

                    }}
                        spaceBetween={10}
                        slidesPerView={1}

                    // pagination={{ clickable: true }}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                    // loop={true}

                    >


                        <SwiperSlide >
                            {/* <video class="vod" id="mainBannerVideo" autoplay="" loop="" muted="" playsinline="" webkit-playsinline="" oncontextmenu="return false;" preload="metadata" controlslist="nodownload">
					<source src="https://d2g3bq8rd0lmrw.cloudfront.net/vod/20210907/pcmain.mp4" type="video/mp4"></source>
				</video> */}
                            <video className="dashBoardVideo"

                                style={{


                                }}

                                muted
                                autoPlay
                                loop
                            >
                                <source src="https://d2g3bq8rd0lmrw.cloudfront.net/vod/20210907/pcmain.mp4" type="video/mp4" />
                                <strong>Your browser does not support the video tag.</strong>
                            </video>
                        </SwiperSlide>
                        {/* <SwiperSlide >
                            <div style={{ backgroundImage: `url(${coock})` }}></div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div style={{ backgroundImage: `url(${drawing})` }}></div>
                        </SwiperSlide> */}



                    </Swiper>






                </WrapperSub>

                <div className="mainrollinginfo">
                    <div className='title'>
                        < div className='titleinfo' >  
                            <p>여러분의 취미 생활을
                                <br></br>
                               참여 클래스에서 찾아보세요</p>
                        </div>
                    </div>
               
                    <div className='titlebtn'>
<a  className='btn1'>클래스구경</a>
<a className='btn2'>차별화</a>
                        
                    </div>

                </div>
            </MainrollingWrapper>
        </>

    );
}
