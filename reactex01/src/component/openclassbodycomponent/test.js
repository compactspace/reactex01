
// import React, { useEffect, useState } from 'react'
// import styled, { css } from 'styled-components';



// import art from '../../img/art.jpg'
// import { OpenClassBodyModal } from '../openclassbodycomponent/openclassBodyModal'

// const BroScrollWrapper = styled.div`
//    min-height: 1000px;
// height: 1000px;
//     padding-top: 0px;
//     padding-bottom: 19820px;
//     /* ${(props) => props.vmatch ? css`
//     min-height: 1000px;
// height: 1000px;
//     padding-top: 0px;
//     padding-bottom: 19820px;
 


// ` : css`
// min-height: 1000px;
// height: auto;
//     padding-top: 0px;
//     padding-bottom: 19820px;
 
// `}
//  */





// `

// const BroScrollSection = styled.div`

// & .BroScrollSectionSun{
//     position: fixed;    
//     top: 400px;
//     background-color: red;

//     height: 400px;
//     width: 400px;
// }

//  &  p{
//         font-style: normal;
//     font-weight: 800;
//     font-size: 42px;
//     line-height: 48px;
//     color: #252525;
  
//     }


// // 리턴 타입은 css 이다!! 씨발
// ${(props) => props.scrollinfo != null ?

//         props.position.map((obj, index) => {
//             console.log(props.scrollinfo)

//             return css`

// & .scrollinfo${index}{
//    position: fixed;
//    display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;    
// top: ${props.position[index]}px ;

// opacity:${index == 0 ? 1 : 0.3};
// }


// `

//         })

//         : null


//     }














// /* ${(props) => props.vmatch ? css`
// //position: fixed 는 뷰포트 기준
// position: fixed;    
// top: 400px;
//     right: auto;
//     bottom: auto;
// left: 0px;
// width: 100%;

// & .BroScrollSectionSun{
//   display: block;
//   position:relative;
//     height: 1000px;
// }

// & .scrollinfo{
//     width: 50%;
//     position: absolute;
//     top: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
// width: 100%;
//     &  p{
//         font-style: normal;
//     font-weight: 800;
//     font-size: 42px;
//     line-height: 48px;
//     color: #252525;
  
//     }

// }

// ` : css`
// position: relative;
// top: 0px;
//     right: auto;
//     bottom: auto;
// left: 0px;
// width: 100%;

// `} */

// `

// export const Test = (props) => {



   



//     useEffect(() => {
//         setIndex(3)
//     })

// //아우...리랜더링을 그나마 useEffect로 그나마 줄여보자..
// //fact1. useEffect는 어쨋든 한번은 호출
// //fact2. 스테이트가 변경될때만 발동한다...
//     useEffect(() => {

//         //대략 22000 으로
//         window.addEventListener('scroll', e => {
//             //1300+5550

//             if (window.scrollY <= 1300) {

//                 let deep = [...position]
//                 deep = [350, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
//                 setPosition(deep)
//             }

//             else if (window.scrollY > 1300 && window.scrollY < 6850) {
//                 let deep = [...position]
//                 deep = [350, 400, 1000, 1000, 1000, 1000, 1000, 1000]
//                 setPosition(deep)

//             } else if (window.scrollY > 6850 && window.scrollY < 12400) {
//                 let deep = [...position]
//                 deep = [350, 400, 450, 1000, 1000, 1000, 1000, 1000]
//                 setPosition(deep)


//             } else if (window.scrollY > 12400 && window.scrollY < 17950) {

//                 let deep = [...position]
//                 deep = [350, 400, 450, 500, 1000, 1000, 1000, 1000]
//                 setPosition(deep)


//             }
//             else if (window.scrollY > 17950 && window.scrollY < 21000) {


//             }
//             else if (window.scrollY > 21000) {



//             }


//         }



//         );




//     }, [position])

//     //[350,400,450,500,550,600,650,700] 순으로 땡겨와보자..쒸불

//     return (<>

//         <BroScrollWrapper id="test" class="BroScrollWrapper" className="BroScrollWrapper" vmatch={props.vmatch}>

//             <BroScrollSection className="스클록섹스션" position={position} index={index} scrollinfo={scrollinfo}>

//                 <div class="BroScrollSectionSun">

//                     {position.map((obj, index) => {

//                         return (

//                             <div className={`scrollinfo${index}`}>
//                                 <p>첫 번째 약속 손쉬운 클래스장소 제공</p>

//                             </div>

//                         )
//                     })}


//                 </div>
//             </BroScrollSection>
//         </BroScrollWrapper>
      
//     </>);


// }

