
import main from '../img/main.jpg'
import main2 from '../img/main2.jpg'
// import { MainBody } from '../body/mainbody'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import React, { useState, useEffect , useRef} from 'react'
import { Ondayclass } from '../pages/Onedayclasspage'
// import { WrapperNaveBody } from '../wrappernavbody/wrapper'
// import {Aallfooterwrapper,Footerrow1,Footerrow1col1,Footerrow1col2,Footerrow2,Footerrow2col1,Footerrow2col2,Footerrow2col3} from '../footer/footer'
// import {Footer} from '../footer/footer'



export const AallWrapperNave = styled.div`
/* height: ${(Mainprops) => Mainprops.height ? `${Mainprops.height}` : '100vh'}; */
/* height: ${(Mainprops) => Mainprops.raito ? `${Mainprops.raito+ "px"}` : '50vh'}; */


width: 100%;

z-index: 1;
display: flex;
flex-direction: column;

@media screen and (max-width: 500px) {
 /* height: ${(Mainprops) => Mainprops.raitoheight ? `${Mainprops.raitoheight + "px"}` : '100vh'}; */
 width: 100%;

    }


`;

const Allfooterwrapper = styled.div`
display: flex;
flex-direction: column;
height: 400px;
background-color: black;
`;



const Navdiv = styled.div`
display:flex;
position: relative;
justify-content: space-between;

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
    color: #05141f;    
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;
margin-top: 15px;
margin-left: 15px;

}
`;

const RightsubNavdiv = styled.div`
display:flex;
justify-content: space-between;

>div{ color: #05141f;    
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;
margin-top: 15px;
margin-right: 15px;}
>a{
    color: #05141f;    
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;
margin-top: 15px;
margin-right: 15px;

 >li{
    color: #05141f;    
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;
margin-top: 15px;
margin-right: 15px;
}
}
`;
export const Home = styled.a`
text-decoration:none;
`;

export const LinkLogin = styled.a`
text-decoration:none;
`;


// export const Linkdiv=styled.div`
// display: flex;
// justify-content:space-between;
// `;

export const LinkGasipan = styled.a`
text-decoration:none;
`;

export const LinkProduct = styled.a`
text-decoration:none;
`;

export const LinkLogout = styled.a`
text-decoration:none;
`;


export const Forberul = styled.ul`
color: #05141f;    
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;

& a{
    color: #05141f;    
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;
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






export const Navforproduct = (Mainprops) => {

    const navheight=useRef();
    // console.log("원데이로부터 받은 프롭은?->>");
    // console.log(window.innerWidth)
    const [forcss, setForcss] = useState({ height: Mainprops.height })
    // console.log(forcss.height);

    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' });
    const [ismatch, setIsmatch] = useState(ismatchcheck);
    const [berger, setIsberger] = useState({ isberger: false, isclick: 'Click Me' });
    const [raitoheight, setRaitoheigh] = useState(window.innerWidth);

    // console.log(berger);
    //{isberger: false, isclick: 'Click Me'} 형태로 데이터


    // 유저가 500px 이상 에서 접속시
    //   const [raitoheight, setRaitoheigh] = useState(window.innerWidth); 때문에
    // 적어도 한번은 바로 아래 useEffect 가 반응한다.
    // 그다음 엘스문을 타고, 이벤트 리스너가 작동함. 
    // 그러면서 setter 메소드로 업데이트를 시도하니
    // 다시 useEffect가 발동하고 다시 if 인지 엘스 인지 검사하고. 이런 사이클임.. 좋은 코드는 아니겠지...
    useEffect(() => {
       
        if (ismatchcheck) {
            window.addEventListener('resize', () => {
                // console.log(window.innerWidth)
                setRaitoheigh(window.innerWidth)

            })
        } else {

            window.addEventListener('resize', () => {
                // console.log("엘스문...하하하하")
                // console.log(window.innerWidth)
                setRaitoheigh(window.innerWidth)

            })
        }
        return () => {
            // console.log("업데이트 되기전!")
        }

    }, [raitoheight])

    
    // console.log(Mainprops.navheightset);
    const [formom, setFormom]=useState()
      const  X = ()=>{
//  console.log("X함수야 호출좀 되거라")
        Mainprops.navheightset(navheight.current.offsetHeight);
       }
       

  useEffect(()=>{
    // setFormom(navheight.current.offsetHeight);
    // console.log("formomsex->>>>"+navheight.current.offsetHeight);

X();
  },[])







    //이는 딱한번 유저가 들어올때 실행되는 useEffect 임
    // 유저가 500px 이상 또는 이하 어디서 들어올지 모르니
    //한번만 호출하면됨
    useEffect(() => {
                if (ismatchcheck) {
            // console.log("리사이즈도 반응?")
            setIsmatch(true)
         

        } else {
            // console.log("엘스는->>>>>" + ismatch)
            setIsmatch(false)           
        }
    })



    //{isberger: false, isclick: 'Click Me'} 형태로 데이터
    const Hemberger = () => {
        // console.log(berger)
        if (berger.isberger) {
            setIsberger({ isberger: false, isclick: 'Click Me' })
        } else {
            setIsberger({ isberger: true, isclick: 'Close' })
        }

    }



    if (Mainprops.iscookie == null || Mainprops.iscookie == false) {
        return <>

            {/* <AallWrapperNave height={Mainprops.height}> */}
            <AallWrapperNave raitoheight={raitoheight}  ref={navheight}>
                <Navdiv>
                    {ismatch ? <><RightsubNavdiv>
                        <div onClick={Hemberger}>{berger.isclick}

                            {berger.isberger ?

                                <Forberul>
                                    <li><Home href='/'>홈으로</Home></li>
                                    <li><LinkGasipan>여러분의공간</LinkGasipan></li>
                                    <li><LinkProduct>펜시상품</LinkProduct></li>
                                    <li><LinkLogin href='/login' >Login</LinkLogin></li>
                                </Forberul>

                                : <></>}

                        </div>        </RightsubNavdiv></> : <>

                        <LeftsubNavdiv>
                            <Home href='/'>홈으로</Home>
                            <LinkGasipan>여러분의공간</LinkGasipan>
                            <LinkProduct>펜시상품</LinkProduct>
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
            <AallWrapperNave ref={navheight} >
                <Navdiv>
           
                    {ismatch ? <><RightsubNavdiv>
                        <div onClick={Hemberger}>{berger.isclick}

                            {berger.isberger ?

                                <Forberul>
                                    <li><Home href='/'>홈으로</Home></li>
                                    <li><LinkGasipan>여러분의공간</LinkGasipan></li>
                                    <li><LinkProduct>펜시상품</LinkProduct></li>
                                    <li><LinkLogin href='/logout' >logout</LinkLogin></li>
                                </Forberul>

                                : <></>}

                        </div>        </RightsubNavdiv></> : <>

                        <LeftsubNavdiv>
                            <Home href='/'>홈으로</Home>


                            <LinkGasipan>여러분의공간</LinkGasipan>
                            <LinkProduct>펜시상품</LinkProduct>
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



//하위컴포 테스트
function StarRating(props) {
    
const sex=useRef();

    const setStarRating = () => {
        props.getStarRating(sex.current.offsetHeight);
    }
useEffect(()=>{
console.log(sex.current.offsetHeight)
    
},[])

    return (
      <div ref={sex}>
           <a onClick={setStarRating}>click</a>
      </div>
    );
  }
  export default StarRating;