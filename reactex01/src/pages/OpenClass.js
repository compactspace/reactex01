import {TeaCherHeader} from '../header/teacherheader'
import { Mainrolling } from '../component/mainrollingcomponent/mainrolling'
import { MainFooter } from '../component/mainfootercompoent/mainfooter'
import { OpenClassBody } from '../component/openclassbodycomponent/openclassbody'

import styled from 'styled-components'


import { useMediaQuery } from 'react-responsive'
import React, { useState, useRef, useEffect } from 'react'


import income1 from '../img2/income1.jpg'
import income2 from '../img2/income2.jpg'
import income3 from '../img2/income3.jpg'
import income4 from '../img2/income4.jpg'
import income5 from '../img2/income5.jpg'
import income6 from '../img2/income6.jpg'



const Allwrapper=styled.div`


& .sun{

width: 100%;
height: 400px;
background-color: red;
position: absolute;

}



& .sun2{

width: 100%;
height: 400px;
background-color: black


}
`




export const OpenClassPage = () => {

    const ismatchcheck = useMediaQuery({ query: '(max-width:760px)' });
    const [ismatch, setIsmatch] = useState();
    // const [isverticalmatch, setIsverticalmatch] = useState();
    const [isvideoverticalmatch, setIsvideoverticalmatch] = useState();

    const [question, setQusetion] = useState(["등록과정", "차별화", "믿음", "신뢰", "약속"])

    const [index, setIndex] = useState(question.length)



    const [scrollinfo, setScrollinfo] = useState(["scrollinfo", "scrollinfo", "scrollinfo"])
   
    const [position, setPosition] = useState([350, 1000, 1000, 1000, 1000, 1000, 1000, 1000]);
    const [positionvalue, setPositionvalue] = useState([
        "초기부담이 적은 수업을 개설해보고싶어요","수강생 모집을 해보고싶어요 ", 
        "예약과 sns홍보가 힘들어요", 
        "전공을 살려 수업을 해보고싶어요", 
        "수입과 꿈을 함께 이루어보고 싶어요",
         "수업공간을 임대하기가 힘들어요", 
         "이런 많은 고민을 한번에 해결하고 싶어요", 
         ""
    ]);


    





const [income, setIncome]=useState([
    {title:"요리",income:"2000",img:income1},
    {title:"공예",income:"24000",img:income2},
    {title:"뷰티",income:"42000",img:income3}, 
    {title:"미술",income:"42000",img:income4},
    {title:"활동",income:"243000",img:income5},
    {title:"공연",income:"243000",img:income6}
])






    let infolist = document.getElementsByClassName("scrollinfo");
     console.log(infolist);

    // useEffect 는 어쨋든 한번문 무조건 실행되며
    // 두번째 인자로 값을 넣어주면 그게 변할시 한번만 실행됨     
    useEffect(() => {

        if (ismatchcheck) {
            setIsmatch("true")

        } else {
            setIsmatch("false")

        }
    }, [ismatchcheck])

    useEffect(() => {
        setIndex(3)
    })

    // infolist 는 HTMLCollection 으로 받는 것은 순수자바 스크립트 반복문이랑 살짝 다르다.
    // // 참조 https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-htmlcollection/
    // let infolist = document.getElementsByClassName("scrollinfo");
    // // // console.log(infolist);

    const [vmatch, setVmatch] = useState(false);
    useEffect(() => {

        //대략 22000 으로
        window.addEventListener('scroll', e => {
            //1300+5550

            if (window.scrollY <= 1300) {

                let deep = [...position]
                deep = [40, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
                setPosition(deep)
                setVmatch(false)
            }

            else if (window.scrollY > 1300 && window.scrollY < 6850) {
                let deep = [...position]
                deep = [30, 40, 1000, 1000, 1000, 1000, 1000, 1000]
                setPosition(deep)
                setVmatch(true)
            } else if (window.scrollY > 6850 && window.scrollY < 12400) {
                let deep = [...position]
                deep = [30, 40, 50, 1000, 1000, 1000, 1000, 1000]
                setPosition(deep)


            } else if (window.scrollY > 12400 && window.scrollY < 17950) {

                let deep = [...position]
                deep = [20, 30, 40, 50, 1000, 1000, 1000, 1000]
                setPosition(deep)


            }
            else if (window.scrollY > 17950 ){


                let deep = [...position]
                deep = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
                setPosition(deep)

              
            }
            


        }



        );




    }, [position])

    let vertical;
    //범인을 찾앗어 이 씨불놈때문이였어.. 이거 주석처리하던디
    // 오픈클래스바디의 마우스휠 하고 합치던지하자.



//     window.addEventListener('wheel', e => {

// console.log()

//         //어유 씨발 fixed는 뷰포트를 타겟으로 하며
//         // 뷰포트는 기본값으로 991로 저장됨 스크롤 아무리 내려요 계속 991 헤이트임..
//         //  console.log("뷰포트길이는?_>"+window.innerHeight)
//         // 적절히 값는 바꿔가며 해보자. 900 에서 700으로 바꿈


//         //  console.log(window.scrollY)
//         if (window.scrollY >= 700) {

//             setIsverticalmatch("true")
//         } else {
//             setIsverticalmatch("false")
//         }
       



        

//     }
//     );// 휠이벤트종료






return (
    <>

    {/* 하씨발 또 뭐라 정리하냐
    
    포지션 엡솔루트 때리면 부모위치로 인식해서  겹치기 가능 아래 주석 처리한 태그보고
    sun 의 포지션을 absolute 했다가, 지웠다가 해보면 감이 온다.
    
    */}
    {/* <Allwrapper>
    <div>
    <div className='sun'></div>
    </div>
    
    <div className='sun2'>게씨발.</div>
    
    </Allwrapper> */}




            <TeaCherHeader match={ismatch}   vmatch={vmatch}></TeaCherHeader>
            <Mainrolling ></Mainrolling>
            <OpenClassBody position={position}  positionvalue={positionvalue}  income={income} question={question} index={index} setQusetion={setQusetion} ></OpenClassBody>
            {/* <OpenClassBody question={question} index={index} setQusetion={setQusetion} vmatch={isverticalmatch} ></OpenClassBody> */}




        </>
    );

}
