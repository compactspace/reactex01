import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { Navforproduct } from "../nav/navforproduct";
import { Experiencefooter } from "../footer/experiencefooter";

import axios from "axios";
import Calendar from 'react-calendar';
import moment from 'moment';
import './calendar.css'








const Bodywrapper = styled.div`

display: flex;
flex-direction: column;
height:${(props) => {
        if (props.calendarheight === null && props.bodyheight != null) { return props.bodyheight }
        else if (props.bodyheight != null && props.calendarheight != null) {
            return (props.bodyheight + props.calendarheight + 300);
        }
    }}px;

${(props) => props.match ? css`

/* height:${(props) => { if (props.bodyheight != null) { return (props.bodyheight - (props.bodyheight / 5)) } }}px; */

`: css``}

`

const Row1 = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height:17%;


text-align: center;
`
const Row1Col1 = styled.h1`
margin-top: 0px;
padding-top:40px;
margin-bottom: 0px;
`
const Row1Col2 = styled.p`

color: #697278;
    padding-top:10px;
    font-family: Kia Signature Light,Arial,sans-serif,Hevetica;

    font-size:${(props) => { if (props.match) { return 15 } else { return 20 } }}px;

    font-weight: 400;
    margin-bottom: 0px;
    margin-top: 0px;


`


const Row2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height:85%;
`
const Row2Col1 = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-left: auto;
margin-right: auto;
width:${(props) => { if (props.match) { return 90 } else { return 100 } }}%;
color: #05141f;

`

const Row2Col1Row1 = styled.div`

height: 100%;


width:${(props) => { if (props.match) { return 90 } else { return 100 } }}%;
`

const Row2Col1Row1SubWrow1 = styled.div`

height: 10%;
text-align: center;
    display: flex;
    justify-content: space-between;
    background: #f8f8f8;
    border-bottom: 1px solid #dadbdc;
    border-top: 1px solid #dadbdc;

`
const Row2Col1Row1SubWrow2 = styled.div`
background: #f8f8f8;
    border-bottom: 1px solid #dadbdc;
    border-top: 1px solid #dadbdc;
height: 100px;
text-align: center;
    display: flex;
   justify-content:space-between ;
   
  .classname{
    border-bottom: 1px solid red;

  }

`
const HideChoiceClass = styled.div`

height:600px;

${(props)=>props.choiceClass=="true"? css`

background: #f8f8f8;
    border-bottom: 1px solid #dadbdc;
    border-top: 1px solid #dadbdc;

width: 100%;
text-align: center;
    display: flex;
    flex-direction: column;

`:
css`
display: none;
`
}

  .hiderow1{
display:flex;
justify-content:center
  }
  .hiderow2{
    display:grid;
    grid-template-columns: 350px 350px 350px  ;
grid-template-rows: 350px;
column-gap: 10px;
row-gap: 10px; 
justify-content: space-evenly;  
}
.gridcol1>img{width:100%;height:100%;}
.gridcol2>img{width:100%;height:100%;}
.gridcol3>img{width:100%;height:100%;}

`




const Row2Col1Row1SubWrow3 = styled.div`
background: #f8f8f8;
    border-bottom: 1px solid #dadbdc;
    border-top: 1px solid #dadbdc;
height: 100px;
text-align: center;
display: flex;

    justify-content: space-between;


.choiceDay{
border-bottom: 1px solid red;

}


`


const Row2Col1Row1SubWrow4 = styled.div`
background: #f8f8f8;
    border-bottom: 1px solid #dadbdc;
    border-top: 1px solid #dadbdc;
height: 100px;
text-align: center;
display: flex;

    justify-content: space-between;
   


.logininfo{

${(props) => props.dropreserveinfo ?
        css`
display: block;
`
        :
        css`
display: none;
`
    }

}


`

const Row2Col1Row1SubWrow5 = styled.div`

height: 100px;
text-align: center;
display: flex;

    justify-content: center;
    background-color: white;


`




const DivforCalendar = styled.div`

display:${(props) => props.opencalendar === "true" ? "block" : "none"} ;
height:${(props) => props.opencalendar === "true" ? "1380px;" : ""} ;
${(props) => props.match && props.opencalendar ?
        css`
height: 750px;
`
        :
        css``
    }

${(props) => props.opencalendar === "true" ?
        css`
&{
    /* position: fixed */



}

`

        : ""} ;


.react-calendar.calendar{
    
    border:none;
}
.react-calendar__navigation__label{
    color: #05141f;

    font-size: 2pc;
    font-weight: 400;
}
.react-calendar {
    width:100%;
    height: 100%;
    max-width: 100%;
    background-color: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  
  .react-calendar--doubleView {
    width: 700px;
  }
  
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  
  .react-calendar__navigation {
    display: flex;
    /* //  height: 44px; */
    height: 100px;
    margin-bottom: 1em;
  }
  
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
    
  }
  
  .react-calendar__month-view__weekdays {
    height: 50px;
    background-color: #05141f;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }
  
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }
  
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  
  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
  }
  
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
   
  }
.react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    font: inherit;
    font-size: 0.833em;
  }
  
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #ababab;

  }
  .react-calendar__month-view__days{
    height: 450px;
  }

  .react-calendar__month-view__days>button{
    font-size: ${(props) => props.match ? "13px" : "24px"};
    /* font-size:24px; */
    display: inline  !important;
  }

  .react-calendar__month-view__days__day{


    ${(props) => props.match ?
        css`
     
     height:100px;

`

        :
        css`
          height:250px;
` }
  

    /* height:${(props) => { if (props.match) { return '' } else { return 250 } }}px; */
  

  }
  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }
  
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  
  .react-calendar__tile--now {
    background: #ffff76;
  }
  
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
  
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
  
  abbr{

    ${(props) => props.match ?
        css`
     
     font-size: 13px;

`

        :
        css`
          margin-top: 10px;
` }

  }
.possibleChoiceDay{

    ${(props) => props.match ?
        css`
     
     

`

        :
        css`
          margin-top: 10px;
` }

}




`





const H2row3 = styled.p`
.step{
   color: #697278;
    display: block;
    font-family: Kia Signature Regular,Arial,sans-serif,Hevetica;
    font-size: 9pt;
    font-weight: 400;
    letter-spacing: normal;
}

.stepname{

        color: #9fa5a9;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 18px;
    font-weight: 400;
}

`
const Bottonrow3 = styled.button`
border: none;
background-color: transparent;
font-size: 1.5em;
`
const H2row4 = styled.h2`

`
const Bottonrow4 = styled.button`
border: none;
background-color: transparent;

`


const Modal = styled.div`


${(props) =>  props.finallcheck ? css`
display: flex;
justify-content: center;
flex-direction: column;
position: absolute;
top:0px;
width: 100%;
height:1200px;
background-color: white;
border-radius: 0.5em;
border: 1px solid var(--border-color);
z-index: 10;
`  : props.cancel==="true"  ?  css` display:none;`  :css`display:none;`

}
`


const ModalRow1 = styled.div`
height: 30%;
display: flex;
justify-content: center;
border-radius: 0.5em;
border: 1px solid #05141f;

`
const ModalRow2 = styled.div`
height: 5%;
display: flex;
justify-content: center;
color: #05141f;


`

const ModalRow1Col1 = styled.div`
width: 80%;
display: grid;
grid-template-columns: 250px 250px;
grid-template-rows: 250px;
grid-column-gap: 30px;
justify-content: center;
/* flex-direction: column; */

    img{
    width: 100%;
    height: 90%;
}

h4{
  /* margin-top:0px;
    margin-bottom:0px ; */
}

`

const ModalRow1Col2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`


const ModalRow2Col3 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
&>h2{
  margin-left: 10px;
  margin-right: 10px;
  }


`


const Row2Col1Row2 = styled.div`
height: 50%;


background-color: gray;
`
const Atage = styled.a`

width:${(props) => { if (props.match) { return 90 } else { return 100 } }}%;

height:${(props) => { if (props.match) { return 10 } else { return 20 } }}px;
padding: 10px 10px;
margin-left: 2px;
margin-right: 2px;
border: 1px solid black;
background-color: white;
display: inline-block;
`
export const Reserve = () => {

    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' })
    const [match, setMatch] = useState(false)
    const [navheight, setNavheight] = useState();
    const [proinfo, setProinfo] = useState();
    const [bodyheight, setBodyheight] = useState()
    //자바스크립트의 그 new Date 객체 맞음
    const [value, onChange] = useState(new Date());
    // state 값이 불린 값이면 태그에 속성 값으로 대입시에 씹히니 
    //스트링화 해줘야 속성 값으로 들어감.
    const [opencalendar, setOpencalendar] = useState("false");
    const calendar = useRef();
    const [calendarheight, setCalendarheight] = useState()
    const scrolltop = useRef();
    const [scrollY, setScrollY] = useState()
    const [possible, setPossible] = useState();
    const [forcompare, setForcompare] = useState()
    const [choiceDay, setChoiceDay] = useState()
    const [dropreserveinfo, setDropreserveinfo] = useState();
    const [reserveinfo, setReserveinfo] = useState({ name: '', where: '', choiceDay: '' , classname:'',classcost:'',classimg:''});
    const [finallcheck, setFinallcheck] = useState();
    let forcompares;
    let check = localStorage.getItem("key");
 // 게 씨발 useState가 객체로 미리 세팅해도 하나 하나 추가해도 씹히네
    let json={}
    let locationformRow2Col1Row1SubWrow3;


    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        //   console.log("스크롤높이-.>>"+scrollY);

    })




    // console.log(window.innerHeight);
    // console.log(navheight)




    // useref는 리턴문이 끝난후 만들어진 DOM을 참조하게 되어. 
    // 어쩔수 없이 하위 컴포넌트에서 역으로 받아와 세팅하자.
    const navheightset = (number) => {
        setNavheight(number);
    }

    useEffect(() => {
        if (navheight != null) {
            let x = window.innerHeight - navheight;
            setBodyheight(x);
        }

    }, [navheight])

    useEffect(() => {

        if (ismatchcheck) {
            setMatch(true);
        } else {
            setMatch(false);

        }

    })


    const ShowCalendar = async (e) => {
        // react-calendar__month-view__days
        // console.log(e)
        let sibal0 = e.target.parentElement.nextElementSibling.children[0].children[0].children[2].children[0].textContent;
        let forcompare0 = sibal0.substring(0, 7);

        let sibal = e.target.parentElement.nextElementSibling.children[0].children[1].children[0].children[0].children[0].children[1].children
        forcompares = [];
        //    console.log(sibal[0].children[0]); 
        //    console.log(sibal[0].children[0].textContent);

        //   console.log(sibal[0].children[0].attributes)
        // console.log(sibal[0].children[0].attributes.getNamedItem("aria-label").textContent);
        //   console.log(sibal0.substring(0,7)==sibal[4].children[0].attributes.getNamedItem("aria-label").value.substring(0,7))



        for (let k = 0; k < sibal.length; k++) {
            if (sibal[k].children[0].attributes.getNamedItem("aria-label").value.substring(0, 7) === forcompare0) {
                forcompares.push(sibal[k].children[0].textContent)
            } else {

            }


        }
        // console.log(forcompare)

        await axios.post('http://localhost:4000/user/possiblereserve', null, {
            params: {
                "data": forcompares,
            }

        }, {
            withCredentials: true,
        }).then((res) => {
            
            setPossible(res.data)
            setForcompare(forcompares)
        })

        //         const arr1 = ['1','2','3','4','5'];
        // const arr2 = ['1','2'];

        // // 차집합(Difference)
        // console.log(forcompare.filter(x => !possible.includes(x)));


        // console.log(forcompare.filter((x)=>!possible.includes(x)));


        if ((e.target.parentElement.nextElementSibling.attributes.opencalendar.value) === "false") {

            setOpencalendar("true");

            // setScrollY(locationformRow2Col1Row1SubWrow3)
            // console.log("클릭시 높이 scrollY ->"+scrollY)
            //  window.scrollTo({top:557, behavior:'smooth'});


        } else if ((e.target.parentElement.nextElementSibling.attributes.opencalendar.value) === "true") {
            setOpencalendar("false");


        }


    }



    // console.log(calendar.current)
    if (scrolltop.current != null) {
        // console.log(calendar.current.offsetTop)
        if (opencalendar === "true") {
            if (scrolltop.current.offsetTop > 357) {
                // console.log("아오썅 처음값->>"+scrolltop.current.offsetTop);
                window.scrollTo({ top: scrolltop.current.offsetTop, behavior: 'smooth' });
            } else if (opencalendar === "false") {

                window.scrollTo({ top: 357, behavior: 'smooth' });

            }
        }
        else if (calendar.current.offsetTop == null && opencalendar === "false") {
            // console.log("아오썅 처음값->>"+calendar.current.offsetTop);
            // window.scrollTo({ top: scrolltop.current.offsetTop, behavior: 'smooth' });

        } else if (calendar.current.offsetTop > 0) {
            // console.log("개씨발 나는 타긴하냐")
            // console.log(scrolltop.current.offsetTop);
            //534 898
            // 이렇게 객체로 적어도 되긴함.
            // window.scrollTo({ top: scrolltop, behavior: 'smooth' });
            window.scrollTo({ top: 447, behavior: 'smooth' });
        }

    }

    window.addEventListener("scroll", () => {
        // console.log(window.scrollY)

    })






    // useEffect(()=>{

    //     if(opencalendar=="false" || opencalendar=="true" ){
    //         if (opencalendar === "true") {
    //             console.log("클릭후 업데이트될시->>"+opencalendar)
    //             if (scrolltop.current.offsetTop > 357) {
    //                 // console.log("아오썅 처음값->>"+scrolltop.current.offsetTop);
    //                 window.scrollTo({ top: scrolltop.current.offsetTop, behavior: 'smooth' });
    //             } else if (opencalendar === "false") {
    //                 window.scrollTo({ top: 357, behavior: 'smooth' });

    //             }
    //         }

    //     }

    // return ()=>{

    //     console.log("뒤져버린 프롭스는->"+opencalendar)
    // }

    // },[opencalendar])



    // useEffect(()=>{

    // if(calendar.current===null){


    // }else if(calendar.current!=null){

    // if(calendar.current.offsetHeight===0){
    //     console.log("if문만 타나??")
    //     console.log("calendar.current.offsetHeight->>"+calendar.current.offsetHeight);
    //     setCalendarheight(0)

    // } else if(calendar.current.offsetHeight!=0){
    //     console.log("엘스 이프문!!")
    //     console.log("calendar.current.offsetHeight->>"+calendar.current.offsetHeight);



    // }
    // }
    // },[calendarheight])

    // useEffect(() => {


    // }, [calendarheight])
    // 아주 지 좆대로네 콘솔로그에선  호출이 되고 하 씨바ㅏㄹ.
    // console.log(<Calendar tileClassName/>)
    // console.log(<Calendar  tileContent={"g하하"}  />)


    useEffect(() => {

        // console.log("랜더링이던 리렌더링이던 무조건 머저")
        if (calendar.current.offsetHeight != 0) {
            setCalendarheight(calendar.current.offsetHeight)

        } else if (calendar.current.offsetHeight === 0) {
            // console.log("맨처음 접속시 내가 두번 떠야함")
            setCalendarheight(0)

        }

    })


    // useEffect((() => {

    //     // console.log("locationformRow2Col1Row1SubWrow3->"+scrolltop.current.offsetTop)
    //     //이게 리엑트가 랜더링 할게 많아지니 맨처음 못불러올때는 160이 뜨고 다떠야 원래 높가 뜸
    //     // 어쩔수 없이 맨처음 뜨는 160보다 크다로 설정함..
    //     //         console.log("아오썅 처음값->>"+scrolltop.current.offsetTop);
    //     // if(scrolltop.current.offsetTop>160){   
    //     //     locationformRow2Col1Row1SubWrow3=scrolltop.current.offsetTop;
    //     //     console.log("최종 높이값=>>"+locationformRow2Col1Row1SubWrow3);

    //     // }





    // }), [calendarheight])



    // useEffect(() => {


    // }, [calendarheight])





    const ChoiceDay = (e) => {
        // console.log(e.target.parentNode.parentNode.children[0].textContent)
        setChoiceDay(e.target.parentNode.parentNode.children[0].textContent)
        setOpencalendar("false");
        // console.log(scrolltop.current.offsetTop)

    }

    const Dropmenu = () => {
        if (choiceDay == null) {
            alert("예약일정을 먼저 정해주세요")
        } else {

            setDropreserveinfo(true)
        }


    }

    const Reservationinfo = async () => {

        const key = localStorage.getItem("key")
        if (key == null) { alert("로그인을 먼저 해주세요") } else {

            await axios.post('http://localhost:4000/user/reservationinfo', null, {
                params: {
                    "data": key,
                }

            }, {
                withCredentials: true,
            }).then((res) => {
                // console.log("res.data 의 값은")
                // console.log(res.data)
                let username = res.data.name;
                let userwhere = res.data.where
                json.name= username;
                json.where=userwhere;
                json.choiceDay=choiceDay;
               let classname= reserveinfo.classname;
              let  classcost=reserveinfo.classcost;
              let classimg=reserveinfo.classimg

                setReserveinfo({classname:classname, classcost:classcost,classimg:classimg,name: username, where: userwhere, choiceDay: choiceDay })
                
                // setReserveinfo({reserveinfo.classname,reserveinfo.classcost})
            })


        }



    }

    const Finallinfocheck = () => {
        if (reserveinfo == null) { alert("예약정보를 먼저 입력해 주세요") }
        else {
            console.log("확이 매핑")
            setFinallcheck(true);

        }



    }
   
    const [cancel, setCancel] = useState()
    const Cancel = () => {
        setFinallcheck(false)
        if(cancel==null){  
            
            setCancel("true");
        setFinallcheck(false)
        }
       
    else if(cancel!=null && cancel ){
        setCancel("false");
        setFinallcheck(false)
    }  else if(cancel!=null && !cancel ){
        setCancel("true");
        setFinallcheck(false)
    }

    }

    const [choiceClass,setChoiceClass]=useState()
const ChoiceClass=()=>{
if(choiceClass==null){
    setChoiceClass("true")
}else if(choiceClass!=null && choiceClass==="true"){
    setChoiceClass("false")
}else if(choiceClass!=null && choiceClass==="false"){
    setChoiceClass("true")
}

}

const ClassChoice=(e)=>{
    // setReserveinfo] = useState({ name: '', where: '', choiceDay: '' , classname:'',classcost:''})
    // console.log(e.target.parentElement.children[1].textContent)
    // console.log(e.target.parentElement.children[2].textContent)
    json.classname=e.target.parentElement.children[1].textContent
    json.classcost=e.target.parentElement.children[2].textContent
    json.classimg=e.target.parentElement.children[0].attributes.getNamedItem("src").value
    
    setReserveinfo({classname:e.target.parentElement.children[1].textContent,classcost:e.target.parentElement.children[2].textContent,classimg:e.target.parentElement.children[0].attributes.getNamedItem("src").value})
// console.log(reserveinfo)
}

useEffect(()=>{
//     console.log("업데이트 된값")
//    console.log(reserveinfo)  
return ()=>{
//     console.log("뒤져버린값") 
//  console.log(reserveinfo)
}

},[reserveinfo])

    return (
        <>

            {check == null ? <>
                <Navforproduct navheightset={navheightset}  ></Navforproduct>
                <Bodywrapper classname='Bodywrapper' bodyheight={bodyheight} match={match} calendarheight={calendarheight}>
                    <Row1 classname='row1'>
                        <Row1Col1>Step</Row1Col1>
                        <Row1Col2 classname='Row1Col2' match={match}>

                            다음순서로 예약이 진행됩니다.</Row1Col2>
                    </Row1>
                    <Row2 classname='row2'>
                        <Row2Col1 classname='Row2Col1' match={match}>
                            <Row2Col1Row1 classname='Row2Col1Row1' match={match}>
                                <Row2Col1Row1SubWrow1 classname='Row2Col1Row1SubWrow1'>
                                <H2row3 ><span className='step'>Step1</span><span className='stepname'>개인정보수집{`(선택)`}</span></H2row3>
                                </Row2Col1Row1SubWrow1 >

                                <Row2Col1Row1SubWrow2 classname='Row2Col1Row1SubWrow2'>
                                <H2row3 >Step2:클래스강좌선택</H2row3>
                                <H2row3 >클릭</H2row3>
                                </Row2Col1Row1SubWrow2>

                                <Row2Col1Row1SubWrow3 ref={scrolltop} classname='Row2Col1Row1SubWrow3'>
                                    <H2row3 >Step4:예약일정</H2row3>
                                    {choiceDay ? <><h2 className="choiceDay"> {choiceDay + ` 을 선택하셨습니다.`} </h2>
                                        <Bottonrow3 onClick={ShowCalendar}>
                                            예약일 수정

                                        </Bottonrow3>

                                    </> : <> <Bottonrow3 onClick={ShowCalendar}>
                                        예약일 선택

                                    </Bottonrow3></>}

                                </Row2Col1Row1SubWrow3>

                                <DivforCalendar match={match} ref={calendar} className="DivforCalendar" opencalendar={opencalendar} >
                                    {/* 게씨발 date 를 {date} 로 넣어야 개별적으로 인식하네 내가 그걸 어떻게 아냐 씨발 */}
                                    <Calendar className='calendar' showNeighboringMonth={false} value={value} tileContent={({ date }) => {
                                        // for(let k=0;k<possible.length; k++){}
                                        // console.log("파시블값은")
                                        if (possible != null) {

                                            //    console.log(forcompare);
                                            // console.log(forcompare.filter(x => !possible.includes(x)))
                                            // possible.find((x)=>x=== moment(date).format('YYYY-MM-DD'))
                                            // if (possible.find((x) => x === moment(date).format('YYYY-MM-DD'))) { console.log("가능예약일") }
                                            // else { console.log("불가능") }

                                            if (!possible.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                                                return (
                                                    <>
                                                        <div className="noChoiceDay">
                                                            <div className="dot">예약마감</div>
                                                        </div>
                                                    </>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                        <div onClick={ChoiceDay} className="possibleChoiceDay">
                                                            <div className="dot">예약가능</div>
                                                        </div>
                                                    </>
                                                );

                                            }



                                        }



                                    }} formatDay={(locale, date) => moment(date).format('YYYY-MM-DD')} >

                                    </Calendar>
                                </DivforCalendar>

                                <Row2Col1Row1SubWrow4 className="Row2Col1Row1SubWrow4" dropreserveinfo={dropreserveinfo}>
                                    <H2row4 >Step5</H2row4>
                                    {dropreserveinfo ?
                                        <><h3 className="logininfo" onClick={Reservationinfo}>로그인정보로</h3> <h3>직접입력</h3></>
                                        : <> <Bottonrow3 onClick={Dropmenu}>예약자정보</Bottonrow3></>}

                                </Row2Col1Row1SubWrow4>

                                <Row2Col1Row1SubWrow5 >
                                    <H2row4 onClick={Finallinfocheck} >확인</H2row4>
                                </Row2Col1Row1SubWrow5>
                                <Modal finallcheck={finallcheck} className="Modal">
                                    <ModalRow1>
                                        하하
                                    </ModalRow1>

                                </Modal>
                            </Row2Col1Row1>


                        </Row2Col1>

                    </Row2>
                </Bodywrapper>
                <Experiencefooter opencalendar={opencalendar} classname='bodyfooter' match={match} />

            </>
                : <>
                    <Navforproduct iscookie={true} navheightset={navheightset} ></Navforproduct>
                    <Bodywrapper classname='Bodywrapper' bodyheight={bodyheight} match={match} calendarheight={calendarheight}>
                        <Row1 classname='row1'>
                            <Row1Col1>Step</Row1Col1>
                            <Row1Col2 classname='Row1Col2' match={match}>

                                다음순서로 예약이 진행됩니다.</Row1Col2>
                        </Row1>
                        <Row2 classname='row2'>
                            <Row2Col1 classname='Row2Col1' match={match}>
                                <Row2Col1Row1 classname='Row2Col1Row1' match={match}>
                                <Row2Col1Row1SubWrow1 classname='Row2Col1Row1SubWrow1'>
                                <H2row3 >Step1:개인정보수집{`(선택)`}</H2row3>
                                </Row2Col1Row1SubWrow1 >

                                <Row2Col1Row1SubWrow2 classname='Row2Col1Row1SubWrow2'>
                               
                                {reserveinfo.classname?
                                 <>
                                 <H2row3 >Step2:클래스강좌선택</H2row3><h2 className="classname">{`${reserveinfo.classname} 을선택하셨습니다.`} </h2> <H2row3 onClick={ChoiceClass} >변경</H2row3>
                                 </>
                               :
                                <>    <H2row3 >Step2:클래스강좌선택</H2row3>   <H2row3 onClick={ChoiceClass} >클릭</H2row3></> }
                            
                                </Row2Col1Row1SubWrow2>
                                <HideChoiceClass choiceClass={choiceClass}>
                                  <div className="hiderow1">
                                    <h3 style={{textAlign:"center"}}>원하는 체험을 선택해주세요</h3>
                                    </div>
                                    <div className="hiderow2">
                                        <div className="gridcol1">
                                            <img src={require('../img/coffieimg1.jpg')} ></img>
                                            <h3>취미반</h3>
                                            <h4>3000</h4>
                                            <p>평소 그리고 싶었던 케릭터를 그려봅니다.</p>
                                            <h5 onClick={ClassChoice}>선택</h5>
                                            </div>
                                        <div className="gridcol2">
                                            <img src={require('../img/coffieimg2.jpg')} ></img>
                                            <h3>풍경화반</h3>
                                            <h4>3000</h4>
                                            <p>소중한 순간의 사진을 직접 그려봅니다.</p>
                                            <h5 onClick={ClassChoice}>선택</h5>
                                            </div>
                                        <div className="gridcol2">
                                            <img src={require('../img/coffieimg3.jpg')} ></img>
                                            <h3>인물화반</h3>
                                            <h4>3000</h4>
                                            <p>나에게 소중한 사람을 그려봅니다.</p>
                                            <h5 onClick={ClassChoice}>선택</h5>
                                            </div>
                                    </div>
                                </HideChoiceClass>
                                    <Row2Col1Row1SubWrow3 ref={scrolltop} classname='Row2Col1Row1SubWrow3'>
                                        <H2row3 >Step4:예약일정</H2row3>
                                        {choiceDay ? <><h2 className="choiceDay"> {choiceDay + ` 을 선택하셨습니다.`} </h2>
                                            <Bottonrow3 onClick={ShowCalendar}>
                                                예약일 수정

                                            </Bottonrow3>

                                        </> : <> <Bottonrow3 onClick={ShowCalendar}>
                                            예약일 선택

                                        </Bottonrow3></>}

                                    </Row2Col1Row1SubWrow3>

                                    <DivforCalendar match={match} ref={calendar} className="DivforCalendar" opencalendar={opencalendar} >
                                        {/* 게씨발 date 를 {date} 로 넣어야 개별적으로 인식하네 내가 그걸 어떻게 아냐 씨발 */}
                                        <Calendar className='calendar' showNeighboringMonth={false} value={value} tileContent={({ date }) => {
                                            // for(let k=0;k<possible.length; k++){}
                                            // console.log("파시블값은")
                                            if (possible != null) {

                                                //    console.log(forcompare);
                                                // console.log(forcompare.filter(x => !possible.includes(x)))
                                                // possible.find((x)=>x=== moment(date).format('YYYY-MM-DD'))
                                                // if (possible.find((x) => x === moment(date).format('YYYY-MM-DD'))) { console.log("가능예약일") }
                                                // else { console.log("불가능") }

                                                if (!possible.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                                                    return (
                                                        <>
                                                            <div className="noChoiceDay">
                                                                <div className="dot">예약마감</div>
                                                            </div>
                                                        </>
                                                    );
                                                } else {
                                                    return (
                                                        <>
                                                            <div onClick={ChoiceDay} className="possibleChoiceDay">
                                                                <div className="dot">예약가능</div>
                                                            </div>
                                                        </>
                                                    );

                                                }



                                            }



                                        }} formatDay={(locale, date) => moment(date).format('YYYY-MM-DD')} >

                                        </Calendar>
                                    </DivforCalendar>

                                    <Row2Col1Row1SubWrow4 className="Row2Col1Row1SubWrow4" dropreserveinfo={dropreserveinfo}>
                                        <H2row4 >Step5</H2row4>
                                        {dropreserveinfo ?
                                            <><h3 className="logininfo" onClick={Reservationinfo}>로그인정보로</h3> <h3>직접입력</h3></>
                                            : <> <Bottonrow3 onClick={Dropmenu}>예약자정보</Bottonrow3></>}

                                    </Row2Col1Row1SubWrow4>

                                    <Row2Col1Row1SubWrow5 >
                                        <H2row4 onClick={Finallinfocheck}>확인</H2row4>
                                    </Row2Col1Row1SubWrow5>
                                </Row2Col1Row1>

                                <Modal finallcheck={finallcheck} cancel={cancel} className="Modal">
                                    <ModalRow1>
                                        <ModalRow1Col1>
                                         <div><img src={reserveinfo.classimg}></img></div>
                                          <ModalRow1Col2>
                                            <h4>신청클래스명:{reserveinfo.classname}</h4>
                                            <h4>신청요일:{reserveinfo.choiceDay}</h4>
                                            <h4>신청자명:{reserveinfo.name}</h4>
                                            </ModalRow1Col2>
                                            <ModalRow2Col3>
                                            <h4>확인</h4>
                                            <h4 onClick={Cancel}>취소</h4>
                                        </ModalRow2Col3>
                                        </ModalRow1Col1>
                                </ModalRow1>
                                  
                                </Modal>
                            </Row2Col1>

                        </Row2>
                    </Bodywrapper>
                    <Experiencefooter opencalendar={opencalendar} classname='bodyfooter' match={match} />
                </>}


        </>

    )

}
