
import { Mainrolling } from '../component/mainrollingcomponent/mainrolling'
import { NewMainBanner } from '../component/mainbodycomponent/NewMainBanner'

import { MainHomeBody } from '../component/mainrollingcomponent/mainhomebody2'
import { MainBody } from '../component/mainbodycomponent/mainbody'
import { Header } from '../header/header'
import { MyPage } from '../body/mypage'


import { MainFooter } from '../component/mainfootercompoent/mainfooter'





import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'

import art from '../img2/art.jpg'
import coock from '../img2/coock.jpg'
import drawing from '../img2/drawing.jpg'
import coffee from '../img2/coffee.jpg'
import coffee2 from '../img2/coffee2.jpg'


import work_img1 from '../img2/work_img1.jpg'
import work_img2 from '../img2/work_img2.jpg'
import work_img3 from '../img2/work_img3.jpg'
import work_img4 from '../img2/work_img4.jpg'
import work_img5 from '../img2/work_img5.jpg'



import pro1 from '../img2/pro1.jpg'
import pro2 from '../img2/pro2.jpg'
import pro3 from '../img2/pro3.jpg'
import pro4 from '../img2/pro4.jpg'
import pro5 from '../img2/pro5.jpg'


import newpro1 from '../img2/newpro1.jpg'
import newpro2 from '../img2/newpro2.jpg'
import newpro3 from '../img2/newpro3.jpg'
import newpro4 from '../img2/newpro4.jpg'
import newpro5 from '../img2/newpro5.jpg'


import handpro1 from '../img2/handpro1.jpg'
import handpro2 from '../img2/handpro2.jpg'
import handpro3 from '../img2/handpro3.jpg'
import handpro4 from '../img2/handpro4.jpg'
import handpro5 from '../img2/handpro5.jpg'




import oneday17 from '../img2/oneday17.jpg'
import oneday21 from '../img2/oneday21.jpg'
import oneday41 from '../img2/oneday41.jpg'




export const NewMainpage = () => {  

    let SmartPhoneIP=process.env.REACT_APP_SMARTPHONE_IP;

    //사용자들이 검증한 클래스에서 사용할 이미지 주소 와 정보 배열 백엔드 연결 없어서 어쩔수 없음
    const [img1, setIma1] = useState([
        { img: oneday17, title: "빵빵쿠키만들기", discount: "10%", originp: "20000", discountp: "18000", link: "/onedayclass/0" },
        { img: oneday21, title: "사랑가등초코만들기", discount: "10%", originp: "30000", discountp: "27000", link: "/onedayclass/1" },
        { img: drawing, title: "솜씨그림교실", discount: "10%", originp: "40000", discountp: "36000", link: "/onedayclass/2" },
        { img: oneday41, title: "스킨스쿠버", discount: "10%", originp: "50000", discountp: "45000", link: "/onedayclass/3" },
        { img: coffee2, title: "인기바리스타체험교실", discount: "10%", originp: "60000", discountp: "54000", link: '/onedayclass/4' }
    ]);

    //사용자들의 솜씨자랑 에서 사용할 이미지 주소 와 정보 배열 백엔드 연결 없어서 어쩔수 없음
    const [img2, setIma2] = useState([{ img: work_img1, title: "솜씨그림교실", discount: "10%", originp: "20000", discountp: "18000" },
    { img: work_img2, title: "솜씨그림교실", discount: "10%", originp: "30000", discountp: "27000" },
    { img: work_img3, title: "솜씨그림교실", discount: "10%", originp: "40000", discountp: "36000" },
    { img: work_img4, title: "솜씨그림교실", discount: "10%", originp: "50000", discountp: "45000" },
    { img: work_img5, title: "솜씨그림교실", discount: "10%", originp: "60000", discountp: "54000" }]);


    const [img3, setIma3] = useState([
        { img: pro1, title: "빵빵가득필기세트", discount: "10%", originp: "20000", discountp: "18000" },
        { img: pro2, title: "꽃다발가득키트", discount: "10%", originp: "30000", discountp: "27000" },
        { img: pro3, title: "수제접시공예키트", discount: "10%", originp: "40000", discountp: "36000" },
        { img: pro4, title: "친환경물감키트", discount: "10%", originp: "50000", discountp: "45000" },
        { img: pro5, title: "몽글몽글 티코스터", discount: "10%", originp: "60000", discountp: "54000" }
    ]);


    const [img4, setImg4] = useState([
        { img: newpro1, title: "빵방 가방 키링 만들기 키트" },
        { img: newpro2, title: "사랑뿜뿜 초콜릿 만들기 키트" },
        { img: newpro3, title: "심신안정 미니화분 만들기 키트" },
        { img: newpro4, title: "스웨터 바느질 키트" },
        { img: newpro5, title: "사랑가득 레진플라워 키링 키트" }

    ])

    const [img5, setImg5] = useState([
        { img: handpro1, title: "초코 곰돌이 10개입", originp: "20000" },
        { img: handpro2, title: "냥냥 귀여운 술잔", originp: "10000" },
        { img: handpro3, title: "초콜릿을 삼킨 귀여운 곰돌이 칩", originp: "30000" },
        { img: handpro4, title: "고급스러운 수제 커피잔", originp: "110000" },
        { img: handpro5, title: "자연스러운 향이 담긴 수제 섬유탈취제", originp: "70000" }

    ])


    const ismatchcheck = useMediaQuery({ query: '(max-width:760px)' });

    const [ismatch, setIsmatch] = useState();


    // useEffect 는 어쨋든 한번문 무조건 실행되며
    // 두번째 인자로 값을 넣어주면 그게 변할시 한번만 실행됨     
    useEffect(() => {

        if (ismatchcheck) {
            setIsmatch("true")

        } else {
            setIsmatch("false")

        }
    }, [ismatchcheck])



    const [vmatch, setVmatch] = useState("false");

    useEffect(() => {

        //네브바 색 반전은 뷰포트 기준 1800 부터 걸자.
        window.addEventListener('scroll', e => {
            //    console.log("수직매치"+vmatch+" 윈도우의 y축 스크롤: "+window.scrollY)
            // console.log(`ScrollY 는 뷰포트 기준->>> ${window.scrollY}`)
            if (window.scrollY >= 1800) {
                setVmatch("true")
            } else { setVmatch("false") }
        }

        );// 윈도우 이벤트 리스너 종료

    }, [vmatch])// 유즈이펙트 종료    

    // let [myinfobtn, setMyinfobtn] = useState(false);
    // let [myreservepage, setMyreservepage] = useState(false);

    //  let [pagetitleColor, setPagetitleColor] = useState(false);

     
     
//      useEffect(()=>{
         
//          let myinfoclickbtn = document.getElementById('myinfobtn');
//             myinfoclickbtn.addEventListener('click', () => {

//         if (!myinfobtn) {
//             setMyinfobtn(true)
            
//         } else {
//             setMyinfobtn(false)
//         }
//     })

//     let mylist = document.getElementById('mylist');
//     mylist.addEventListener('click', () => {
      

//         if (!myreservepage) {
            
//             setMyreservepage(true)
//         } else {
//             setMyreservepage(false)
//         }
      
//     })



// },[myinfobtn,myreservepage])




    // if (myinfoclickbtn != undefined || myinfoclickbtn != null) {

    //     myinfoclickbtn.addEventListener('click', () => {

    //         if (!myinfobtn) {
    //             setMyinfobtn(true)
                
    //         } else {
    //             setMyinfobtn(false)
    //         }
    //     })

    //     let mylist = document.getElementById('mylist');
    //     mylist.addEventListener('click', () => {
          

    //         if (!myreservepage) {
                
    //             setMyreservepage(true)
    //         } else {
    //             setMyreservepage(false)
    //         }
          
    //     })

     

    // }
    
    // let pagetitle=document.getElementById('pagetitle');
    // if(pagetitle!=undefined || pagetitle!=null){

    //     pagetitle.addEventListener('click',()=>{
            
    //         console.log(pagetitleColor)

    //         if(!pagetitleColor){
    //             setPagetitleColor(true)
    //         }else{
    //             setPagetitleColor(false);
    //         }
    
    //     })

    // }


    return (
        <>
        
            {/* 헤더 영역 */}
            <Header match={ismatch} vmatch={vmatch}  ></Header>

                {/* 배너 영역 : 원본은  <Mainrolling></Mainrolling> 였음 */}
                <NewMainBanner></NewMainBanner>
                {/* <MainHomeBody></MainHomeBody>  */}
                {/* 몸통 영역 */}
                <MainBody match={ismatch} img1={img1} img2={img2} img3={img3} img4={img4} img5={img5}></MainBody>
                {/* 푸터영역 */}
                <MainFooter match={ismatch}></MainFooter>
        </>

    );


}
