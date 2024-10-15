import { io } from 'socket.io-client';
import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
// 


import art from '../../img/art.jpg'
import open1 from '../../img2/open1.jpg'
import open2 from '../../img2/open2.jpg'
import open3 from '../../img2/open3.jpg'
import free from '../../img2/free.jpg'

import sns from '../../img2/sns.jpg'
import sns2 from '../../img2/sns2.jpg'

import { OpenClassBodyModal } from '../openclassbodycomponent/openclassBodyModal'

const BroScrollWrapper = styled.div`

    ${(props) => props.vmatch ? css`
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






`

const BroScrollSection = styled.div`


& .BroScrollSectionSun{
    position: fixed;    
    top: 400px;
    /* background-color: red; */

    height: 400px;
    width: 400px;
}

 &  p{
        font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 48px;
    color: #252525;
  
    }



//함수의 return 값으로 css를 전달하고자 할 때 
//return 값에 css를 적용해줘야 한다는 것입니다. 
//또한 이런 방식의 CSS 전달 방식에서는 props를 통해 스타일을 직접 변경할 수 있습니다
/* 출처: https://xtring-dev.tistory.com/entry/Styling-Styled-Components-이해하고-사용하기-💅 [xtring.dev:티스토리] */
${(props) => props.position != null ?

        props.position.map((obj, index) => {
            console.log(props.position[index])

            return css`


& .scrollinfo${index}{
    transition: all .5s ease-in-out;
    width: 100%;
   position: fixed;
   display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; 
    
    

    
top: ${props.position[index]}% ;

opacity:${index == 0 ? 1 : 0.3};
}


`

        })

        : null


    }





`

const BrovideoWrapper = styled.div`

/* min-height: 3973px; */
    height: auto;
    position:relative;

`
const Brovideo = styled.div`

& video{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

& .videosize{
    height: 100%;
    width: 100%;

}



& .link{
    width: 100%;
position: absolute;
top : 50%;
bottom : 50%;
display:grid;
grid-gap: 30px;

font-weight: 800;
    font-size: 66px;
    line-height: 89px;
    color: #252525;
    margin-bottom: 60px;
}

& .links{
    text-align: center;
width: 80%;
margin-left: auto;
margin-right: auto;

}


`



const Infotitle = styled.div`

padding: 40px;
    font-size: 36px;
    font-weight: 600;

`



const BroInfoWrapper = styled.div`






display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;



& .gridclass{

display: grid;
grid-template-rows: 490px auto;

color: #FFFFFF;
    width: calc(50% - 30px);
    margin: 20px 15px;
    
}

& .infobox11{
    background-color:#8094FF;

}

& .infobox21{
    background-color:#8094FF;

}

& .infobox12 {
    background: #FF5862;

}

& .snsimgarea{
    display: flex;
    flex-direction: column;
    gap: 15%;
    padding: 30px;

}


& .snstitle{
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: #FF5862;
    margin-bottom: 48px;
}


& .infobox22{
    background: #FF5862;

}


& .infoarea{
    padding: 50px 50px 0 50px;
    margin-bottom: 50px;
}



& .title{
    font-weight: 800;
    font-size: 36px;
    line-height: 41px;
    color: #FFFFFF;
    margin-bottom: 21px;


}


& .content{

    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
}



& .infoimagewrapper{

    background: #F8F9FF;
}



& .infoimagearea{

    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;

}

`;

const BroIncome = styled.div`

max-width: 1280px;
margin: 0 auto;
& .incometitle{
    font-weight: 800;
    font-size: 50px;
    line-height: 57px;
    color: #252525;
    padding-top: 130px;
    margin-bottom: 80px;

}


& .incomecontent{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

& .content{
    display: grid;
    grid-template-rows: 20% 70%;
    grid-gap: 25px;
    width: 320px;
    height:420px;
    background: #FFFBFB;
    border-radius: 20px;
    margin: 15px 15px;

& >.contenttitle{
    padding: 30px;

    & >.contentinfo{
        font-weight: 800;
    font-size: 26px;
    line-height: 30px;
    color: #252525;
    }
    &>.cash{
    font-weight: 800;
    font-size: 40px;
    line-height: 45px;
    color: #FF5862;
}


}

&  img{
    width: 100%;
    height: 100%;
}

}




`

const BroQuestion = styled.div`
margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    margin-bottom: 130px;
    & >.qatitle{
        padding: 40px;
    font-size: 36px;
    font-weight: 600;

    }
 & .questionwrapper{
display: flex;
flex-direction: column;
gap: 30px;

 }

& .questiontitle{
    background-color:#8094FF;
display: flex;
justify-content: space-between;
padding: 40px 35px;
font-weight: 800;
    font-size: 20px;
    line-height: 41px;
    color: #FFFFFF;
    margin-bottom: 21px;
}

& span{
        font-weight: 700;
    font-size: 6px;
    line-height: 30px;
    color: #252525;
}


& .questioncontent{
 

    display: flex;
justify-content: space-evenly;
    padding: 40px 0;
    background: #FFFFFF;
    border-right: 1px solid #D7D7D7;
    border-bottom: 1px solid #D7D7D7;
    border-left: 1px solid #D7D7D7;
    border-radius: 0px 0px 12px 12px;

}

/* 
& .questioncontent2{

 ${(props) => props.open == "question2" ? css`
 
 display: flex;
 justify-content: space-evenly;
     padding: 40px 0;
     background: #FFFFFF;
     border-right: 1px solid #D7D7D7;
     border-bottom: 1px solid #D7D7D7;
     border-left: 1px solid #D7D7D7;
     border-radius: 0px 0px 12px 12px;
 `
        : css`
    display: none;
 
 `} 
 
 }

& .questioncontent3{

 ${(props) => props.open == "question3" ? css`
 
 display: flex;
 justify-content: space-evenly;
     padding: 40px 0;
     background: #FFFFFF;
     border-right: 1px solid #D7D7D7;
     border-bottom: 1px solid #D7D7D7;
     border-left: 1px solid #D7D7D7;
     border-radius: 0px 0px 12px 12px;
 `
        : css`
    display: none;
 
 `} 
 
 }

 & .questioncontent4{

 ${(props) => props.open == "question4" ? css`
 
 display: flex;
 justify-content: space-evenly;
     padding: 40px 0;
     background: #FFFFFF;
     border-right: 1px solid #D7D7D7;
     border-bottom: 1px solid #D7D7D7;
     border-left: 1px solid #D7D7D7;
     border-radius: 0px 0px 12px 12px;
 `
        : css`
    display: none;
 
 `} 
 
 }


 & .questioncontent5{

 ${(props) => props.open == "question5" ? css`
 
 display: flex;
 justify-content: space-evenly;
     padding: 40px 0;
     background: #FFFFFF;
     border-right: 1px solid #D7D7D7;
     border-bottom: 1px solid #D7D7D7;
     border-left: 1px solid #D7D7D7;
     border-radius: 0px 0px 12px 12px;
 `
        : css`
    display: none;
 
 `} 
 
 } */



& .qacard{

    display:flex;
    flex-direction:column;
    text-align: center;
}


& .listtitle{
    font-weight: 800;
    font-size: 16px;
    line-height: 27px;
    color: #252525;
    margin-bottom: 20px;
}

& .listcontent{

    font-weight: 800;
    font-size: 16px;
    line-height: 27px;
    color: #252525;
    margin-bottom: 20px;
}

`





export const OpenClassBody = (props) => {

    const [isvideoverticalmatch, setIsvideoverticalmatch] = useState();
    const [modalnum, setModalnum] = useState([false, false, false, false, false]);
    const [vmatch, setIsverticalmatch] = useState();

    return (<>
        <BroScrollWrapper id="test" class="BroScrollWrapper" className="BroScrollWrapper" vmatch={props.vmatch}>

            <BroScrollSection className="스클록섹스션" position={props.position}>

                <div class="BroScrollSectionSun">

                    {props.position.map((obj, index) => {

                        return (

                            <div className={`scrollinfo${index}`}>
                                <p>{`${props.positionvalue[index]}`}</p>

                            </div>

                        )
                    })}


                </div>
            </BroScrollSection>
        </BroScrollWrapper>

        <BrovideoWrapper className='BrovideoWrapper'>
            < Brovideo className='Brovideo' >
                <video className="dashBoardVideo"

                    style={{

                        display: 'block',
                    }}

                    muted
                    autoPlay
                    loop
                >
                    {/* 허세 https://d1x9f5mf11b8gz.cloudfront.net/common/vod/20230428/top-banner-bg-2.mp4 */}
                    {/* 꽃잎 https://d1x9f5mf11b8gz.cloudfront.net/common/vod/20230428/sssd-author-bg-m8.mp4 */}
                    <source class="videosize" src="https://d1x9f5mf11b8gz.cloudfront.net/common/vod/20230428/sssd-author-bg-m8.mp4" type="video/mp4" />
                    <strong>Your browser does not support the video tag.</strong>
                </video>
                <div className="link">
                    <div className="links"><h4>예비 클래스 선생님은</h4></div>
                    <div className="links"><h3>재능을 펼치고 수익을 만들어보세요</h3></div>

                </div>

            </Brovideo>
        </BrovideoWrapper>
        <Infotitle>
            계획적인 클래스 오픈  도우미가 있어요
            <br></br>
            걱정하지 마세요
        </Infotitle>
        <BroInfoWrapper>


            <div class="gridclass">
                <div class="infobox11">
                    <div class="infoarea">
                        <div></div>
                        <div class="title">
                            시작을
                            <br></br>
                            망설이지 마세요
                        </div>

                        <div class="content">
                            클래스오픈 도우미가
                            <br></br>
                            클래스 사진
                            <br></br>
                            상품등록
                            <br></br>
                            을 도와드립니다.
                            <br></br>
                            클래스 오픈 도우미를 믿고 따라오세요
                        </div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <div class="infoimagewrapper">
                    <div class="infoimagearea">
                        <img src={`${open1}`} style={{ width: "100%" }}></img>
                        <img src={`${open2}`} style={{ width: "100%" }}></img>
                        <img src={`${open3}`} style={{ width: "100%" }}></img>
                    </div>

                </div>

            </div>
            <div class="gridclass">
                <div class="infobox12">


                    <div class="infoarea">
                        <div></div>
                        <div class="title">
                            광고비용
                            <br></br>
                            걱정을 하지마세요
                        </div>

                        <div class="content">
                            클래스오픈 도우미가
                            <br></br>
                            sns 트위터 가종 미디어홍보를
                            <br></br>
                            무료로 도와드립니다.
                            <br></br>
                            클래스 선생님의 재능을 펼쳐보세요
                        </div>
                        <div></div>
                        <div></div>
                    </div>



                </div>

                <div className='snsimgarea'>
                    <div className='snstitle'>
                        매일 클래스오픈 도우미가
                        <br></br>
                        직접 각종 sns에 클래스광고를 해드려요
                    </div>
                    <img src={`${sns}`} style={{ width: "100%" }}></img>
                </div>

            </div>
            <div class="gridclass">
                <div class="infobox21">
                    <div class="infoarea">
                        <div></div>
                        <div class="title">
                            수수료가 걱정이신가요?
                            <br></br>
                            수수료 걱정을 덜어드립니다.
                        </div>

                        <div class="content">
                            저희 클래스오픈 도우미가
                            <br></br>
                            클래스 수업 진행 전까지
                            <br></br>
                            수수료 0원으로 하여
                            <br></br>
                            부담을 덜어드립니다.
                            <br></br>
                            클래스 오픈 도우미를 믿고 따라오세요
                        </div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <div class="infoimagewrapper">
                    <div class="infoimagearea">
                        <img src={`${free}`} style={{ width: "100%" }}></img>
                    </div>

                </div>

            </div>



            <div class="gridclass">
                <div class="infobox22">

                    <div class="infoarea">
                        <div></div>
                        <div class="title">

                            <br></br>
                            여럿 플렛폼 네이버등을 복잡하게 이용하지 마세요
                        </div>

                        <div class="content">
                            클래스오픈만으로
                            <br></br>
                            네이버, 쿠팡, 스토어등
                            <br></br>
                            다양한 플렛폼에 클래스를 판매하고
                            <br></br>
                            관리할 수있습니다.
                        </div>
                        <div></div>
                        <div></div>
                    </div>




                </div>
                <div class="infoimagewrapper">
                    <div class="infoimagearea">
                        <img src={`${sns2}`} style={{ width: "100%" }}></img>
                    </div>

                </div>

            </div>

        </BroInfoWrapper>
        <BroIncome className='BroIncome'>
            <div class='incometitle'>
                사실로 검증된 클래스별
                <br></br>
                평균매출을확인해보세요
            </div>
            <div class='incomecontent'>

                {props.income.map((obj, index) => {


                    return (

                        <div class="content">
                            <div class="contenttitle">
                                <div class="contentinfo">{obj.title}</div>
                                <div class="cash" data-start="0원" data-end="100원">{obj.income}</div>

                            </div>
                            <div class="contentimage">
                                <img src={`${obj.img}`}></img>
                            </div>

                        </div>
                    )


                })}




            </div>

        </BroIncome>

        {/* 하씨발 아무리 이벤트에서 걸러내도 한 컴포넌트가 공유해서 다 열려버림
컴포넌트  걍 더만들어야할듯 */}
        <BroQuestion>
            <div class="qatitle">자주찾는 질문을 모아봤어요</div>
            <div class="questionwrapper" >
                <div class="question">
                    {props.question.map((obj, index) => {
                        return (<>

                            <div class="questiontitle">
                                <sapn>클래스 선생님 등록과정은 어떻게 되나요?</sapn>
                                <sapn className="click" onClick={(e) => {

                                    let deep = [...modalnum]

                                    if (modalnum[index] == false) {

                                        deep[index] = true;
                                        setModalnum(deep);


                                    } else {
                                        deep[index] = false;
                                        setModalnum(deep);
                                    }

                                }}>클릭</sapn>
                            </div>
                            {modalnum[index] ? <>

                                <OpenClassBodyModal >
                                </OpenClassBodyModal>
                            </> : <></>}


                        </>)
                    })}




                    {/* <div class="questiontitle">
                        <sapn>클래스 선생님 등록과정은 어떻게 되나요?</sapn>
                        <sapn className="click" onClick={Showcard}>클릭</sapn>
                    </div>
                    <div class="questioncontent2" data-val="question2">
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                    </div>

                    <div class="questiontitle">
                        <sapn>클래스 선생님 등록과정은 어떻게 되나요?</sapn>
                        <sapn  className="click" onClick={Showcard}>클릭</sapn>
                    </div>
                    <div class="questioncontent3" data-val="question3">
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                    </div>

                    <div class="questiontitle">
                        <sapn>클래스 선생님 등록과정은 어떻게 되나요?</sapn>
                        <sapn className="click" onClick={Showcard}>클릭</sapn>
                    </div>
                    <div class="questioncontent4" data-val="question4">
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                    </div>

                    <div class="questiontitle">
                        <sapn>클래스 선생님 등록과정은 어떻게 되나요?</sapn>
                        <sapn className="click" onClick={Showcard}>클릭</sapn>
                    </div>
                    <div class="questioncontent5" data-val="question5">
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                    </div> */}



                </div>
            </div>


        </BroQuestion>
    </>);


}

