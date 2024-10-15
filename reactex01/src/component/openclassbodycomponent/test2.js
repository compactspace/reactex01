
import React, { useState } from 'react'
import styled, { css } from 'styled-components';



import art from '../../img/art.jpg'
import { OpenClassBodyModal } from '../openclassbodycomponent/openclassBodyModal'

const BroScrollWrapper = styled.div`

    /* ${(props) => props.vmatch ? css`
    min-height: 1000px;
height: 1000px;
    padding-top: 0px;
    padding-bottom: 19820px;
 


` : css`
min-height: 1000px;
height: auto;
    padding-top: 0px;
    padding-bottom: 19820px;
 
`}
 */





`

const BroScrollSection = styled.div`


& .BroScrollSectionSun{
    position: fixed;    
top: 400px;


}

& .scrollinfo${0}{
    position: fixed;    
top: 0px;
}











/* ${(props) => props.vmatch ? css`
//position: fixed 는 뷰포트 기준
position: fixed;    
top: 400px;
    right: auto;
    bottom: auto;
left: 0px;
width: 100%;

& .BroScrollSectionSun{
  display: block;
  position:relative;
    height: 1000px;
}

& .scrollinfo{
    width: 50%;
    position: absolute;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
width: 100%;
    &  p{
        font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 48px;
    color: #252525;
  
    }

}

` : css`
position: relative;
top: 0px;
    right: auto;
    bottom: auto;
left: 0px;
width: 100%;

`} */

`

export const Test = (props) => {



    const [scrollinfo, setScrollinfo] = useState(["scrollinfo", "scrollinfo", "scrollinfo"])



    console.log(props.vmatch)



    window.onload = () => {



        // infolist 는 HTMLCollection 으로 받는 것은 순수자바 스크립트 반복문이랑 살짝 다르다.
        // 참조 https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-htmlcollection/
        let infolist = document.getElementsByClassName("scrollinfo");
        // // console.log(infolist);


        //대략 22000 으로
        window.addEventListener('scroll', e => {
            //1300+5550



            if (window.scrollY > 1300 && window.scrollY < 6850) {


            } else if (window.scrollY > 6850 && window.scrollY < 12400) {

                

            } else if (window.scrollY > 12400 && window.scrollY < 17950) {




            }
            else if (window.scrollY > 17950 && window.scrollY < 21000) {


            }
            else if (window.scrollY > 21000) {



            }


        }



        );

    }













    return (<>

        <BroScrollWrapper id="test" class="BroScrollWrapper" className="BroScrollWrapper" vmatch={props.vmatch}>

            <BroScrollSection  >

                <div class="BroScrollSectionSun">

                    {scrollinfo.map((obj,index) => {

                        return (

                            <div class={`scrollinfo${index}`}>
                                <p>첫 번째 약속 손쉬운 클래스장소 제공</p>

                            </div>

                        )
                    })}


                </div>
            </BroScrollSection>

        </BroScrollWrapper>

    </>);


}

