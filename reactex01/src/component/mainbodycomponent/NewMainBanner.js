import { useMediaQuery } from 'react-responsive'

import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Header } from '../../header/header';
import { MainBody } from './mainbody';

const Swiperallwrapper = styled.div`


/* & .video{

 preload="auto" autoplay="" controls="" loop="" alt="Game, Sticks, Playing, Carpet" poster="https://artgrid.imgix.net/footage-graded-thumbnail/b7c50047b0_411521_1-second_w800px.jpeg" style="width: 100%; height: 100%;" src="blob:https://artlist.io/8ad851e5-fa19-4c4a-8941-3f2b356552d0"


} */



padding-top: 1486px;

height: 991px;
/* max-width: 1287px; */
width: 100vw;


.swipercontainerwrapper{

    position: fixed;
            margin: auto;
            inset: 0px auto auto -10px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
}


.swiper_container {

height: 100%;
width: 100%;
}


.banner {
            height: 100%;
            width: 100%;
            background-image: url('/imgss/innerrestimg1.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }

/* 주의 비디오 태그는 꽉차게 하려면 object-fit: cover; 가 필요.. */
        .videobanner {
            height: 100%;
            width: 100%;
          
            object-fit: cover;
        }


        .rollringinfobanner {

position: absolute;
width: 40%;
min-width: 700px;
z-index: 2;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: red;
display: flex;
flex-direction: column;

}

.rolling {
            position: absolute;
            display: none;
        }

        .rolling p {
            color: #fff;
            font-size: 36px;
        }


`





export const NewMainBanner = (props) => {

   
    const [scroll, setScroll] = useState(0);
    useEffect(() => {

        const windowHeight = window.innerHeight; // 브라우저 창의 높이
        const scrollHeight = document.documentElement.scrollHeight; // 문서 전체의 높이
        const banner = document.getElementById('swipercontainerwrapper');
        const rolling = document.getElementsByClassName("rolling");
        const rollringinfobanner = document.getElementsByClassName('rollringinfobanner')[0];
        window.addEventListener('scroll', () => {
            // console.log(rollringinfobanner.getBoundingClientRect().top)
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 현재 스크롤 위치
            let rollingheight = rollringinfobanner.getBoundingClientRect().top
            //    console.log("현재 스크롤위치: " + scrollTop + " 롤링의 절대위치: " + rollingheight);


            if (scrollTop >= 1510) {
                banner.style.cssText = `position:relative`;

            } else {
                banner.style.cssText = `position:fixed`;
            }



            for (let k = 0; k < rolling.length; k++) {

                if (scrollTop < 487) {

                    rolling[0].style.cssText = 'display:block; transform:translateY(-' + scrollTop + 'px)';

                    rolling[1].style.cssText = 'display:none';
                    rolling[2].style.cssText = 'display:none';
                } else if (487 < scrollTop && scrollTop < 800) {
                    rolling[0].style.cssText = 'display:none';
                    rolling[2].style.cssText = 'display:none';
                    //   console.log((rolling[1].getBoundingClientRect().top));
                    rolling[1].style.cssText = 'display:block; transform:translateY(-' + (scrollTop - rollingheight) + 'px)';
                } else if (800 < scrollTop && scrollTop < 1500) {

                    rolling[1].style.cssText = 'display:none';
                    rolling[2].style.cssText = 'display:block; transform:translateY(-' + (scrollTop - (2 * rollingheight)) + 'px)';
                }


                // rolling[k].style.cssText = 'transform:translateY(-' + ((k + k * 2) * scrollTop) + 'px);'
                // rolling[k].style.cssText = 'top: -'+((k+2)*scrollTop)+"px";

            }
        })

    }, [scroll]);



    // SwiperCore.use([Autoplay])
    return (
        <>

            <Swiperallwrapper className="swiperallwrapper">
                <div id="swipercontainerwrapper" class="swipercontainerwrapper">

                    <div class="swiper_container">
                        {/* <div class="banner"></div> */}
                        
                            <video className="videobanner"
                                muted
                                autoPlay
                                loop
                            >
                                {/* 

                                    주의사항
                                    호스팅 사이트가 https://www.pexels.com/ko-kr/videos/

                                    라 작성자들이 동영상 지우거나 하면 동영상 못불러올 가능성도있음 에러나면 주소 링크 의심해볼것

                                https://videos.pexels.com/video-files/17486817/17486817-uhd_2560_1440_60fps.mp4
                                
                                https://videos.pexels.com/video-files/9968970/9968970-uhd_2560_1440_25fps.mp4
                                
                                
                                */}
                                <source src="https://videos.pexels.com/video-files/9968970/9968970-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                                <strong>Your browser does not support the video tag.</strong>
                            </video>

                        
                    </div>

                    <div class="rollringinfobanner">
                        <div class="rolling">
                            <p>
                                매주마다 뭐할까 고민인가요??

                            </p>
                            <p>
                                이제 고민 마세요 뭐할까? 에서 취미생활을 찾아보세요

                            </p>

                        </div>
                        <div class="rolling">
                            <p>
                               혹은  나의 재능을

                            </p>
                            <p>
                               펼칠 경험해보고 싶은가요?

                            </p>
                        </div>
                        <div class="rolling">
                            <p>
                               오늘 뭐할까에서

                            </p>
                            <p>
                                모두 경험해보세요

                            </p>
                        </div>
                    </div>

                </div>


            </Swiperallwrapper>



        </>

    );

}
{/* <Swiper id="swiperid"
                    // spaceBetween={50} 대략 한 슬라이드당 그리드 gap 같은거
                    slidesPerView={1}   // 몇개의 슬라이드
                    // navigation
                    // pagination={{ clickable: true }}
                    //  scrollbar={{ draggable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}// 딜레이: 초당 슬라이드 넘기기
                    speed={2000}// speed 이건 슬라이드가 변할시의 변환 속도 부드러움
                    loop={true}
                >



                    <SwiperSlide><div style={{ width: '100%', height: '991px', backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundImage: 'url("/newbanner/20230131502324.jpg")' }}></div></SwiperSlide>
                    <SwiperSlide><div style={{ width: '100%', height: '991px', backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundImage: 'url("/newbanner/b8f52d29e3bbb.jpg")' }}></div></SwiperSlide>
                    <SwiperSlide><div style={{ width: '100%', height: '991px', backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundImage: 'url("/newbanner/main_16550885880.jpg")' }}></div></SwiperSlide>



                    <div id="banner">


                        <div id="targetwrapper">
                            <div id="target1" className="target">

                                <p>
                                    매주마다 뭐할까 고민인가요??

                                </p>
                                <p>
                                    이제 고민 마세요 뭐할까? 에서 취미생활을 찾아보세요

                                </p>

                            </div>
                            <div className="target" >
                                <p>
                                    하하하 안녕하십니까2

                                </p>
                                <p>
                                    css 지옥에 온걸 환영합니다.2

                                </p></div>
                            <div className="target" >

                                <p>
                                    하하하 안녕하십니까3

                                </p>
                                <p>
                                    css 지옥에 온걸 환영합니다.3

                                </p>

                            </div>
                            <div className="target">

                                <p>
                                    하하하 안녕하십니까4

                                </p>
                                <p>
                                    css 지옥에 온걸 환영합니다.4

                                </p>

                            </div>

                        </div>
                    </div>
                </Swiper> */}
