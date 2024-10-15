
import React from 'react'

import SwiperCore,{ Navigation, Pagination ,Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components


//여기서 그냥 필요한 라이브러리 복붙해가며 사용법만 익혀라

export const SwiperEx01 = () => {

 

    SwiperCore.use([Autoplay])
    return (
        <>
            <div className="bannerarea">
                <Swiper
                   
                   
             
                   // spaceBetween={50} 대략 한 슬라이드당 그리드 gap 같은거
                   slidesPerView={1}   // 몇개의 슬라이드
                   // navigation
                   // pagination={{ clickable: true }}
                   //  scrollbar={{ draggable: true }}
                   autoplay={{ delay: 4000, disableOnInteraction: true }}// 딜레이: 초당 슬라이드 넘기기
                   speed={2000}// speed 이건 슬라이드가 변할시의 변환 속도 부드러움
                    loop={true}
                    
                    > 
                    <SwiperSlide><div style={{width:'100%',height:'991px',backgroundSize: "100% 100%",backgroundRepeat:"no-repeat",backgroundImage:'url("/newbanner/20230131502324.jpg")'}}></div></SwiperSlide>
                    <SwiperSlide><div style={{width:'100%',height:'991px',backgroundSize: "100% 100%",backgroundRepeat:"no-repeat",backgroundImage:'url("/newbanner/b8f52d29e3bbb.jpg")'}}></div></SwiperSlide>
                    <SwiperSlide><div style={{width:'100%',height:'991px',backgroundSize: "100% 100%",backgroundRepeat:"no-repeat",backgroundImage:'url("/newbanner/main_16550885880.jpg")'}}></div></SwiperSlide>
                    
                </Swiper>
            </div>
            
        </>

    );

}