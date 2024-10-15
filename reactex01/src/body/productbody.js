import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { Footer } from "../footer/footer";

axios.defaults.withCredentials = true;

const AllwrapperProductdiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 960px;

`;


const Row1 = styled.div`
width: 40%;
padding-top: 100px;

display:flex;
justify-content: flex-start;



/* background-color: red; */
@media screen and (max-width:500px) {
    padding-top: 20px;
    width: 80%;
    }
`;

const Row1Col1 = styled.ul`

 height: 100%;
width: 100%;
color: #697279;
font-weight: 400;
font-size: 20px;

padding-top: 110px;
height:32px;
list-style: none;
padding: 0px 0px 0px 0px;
display:flex;
justify-content: center;

@media screen and (max-width:500px) {
    font-weight: 400;
    font-size: 15px;
    }



`;

const Row1Col1Row1 = styled.li`
 position: relative;  
text-align: center;
padding-top: 110px;
height:32px;
list-style: none;
padding: 0px 0px 0px 0px;
${props => props.affter1 === "affter1" ?
css`
         &:after  {
    content: "";
  position: absolute;
  left: 0;
  bottom: -1rem;
  height: 3px;
  width: calc(100%);
  background: red;

 }`: 
 css`
 ""
 `

    };
`;


const Row1Col1Row2 = styled.li`
position: relative; 
text-align: center;
padding-top: 110px;
height:32px;
list-style: none;
padding: 0px 0px 0px 0px;
${props => props.affter2 === "affter2" ?
        css` 
 &::after  {
    content: "";
  position: absolute;
  left: 0;
  bottom: -1rem;
  height: 3px;
  width: calc(100%);
  background: green;

 } 
 
 `: css`
 ""
 `
    };
`;





const WrapperRow2 = styled.div`
position: relative;
padding-top: 100px;
height: 85%;
display: flex;
flex-direction: column;

@media screen and (max-width:500px) {

    padding-top: 20px;
}
`;


const Row2 = styled.div`
${(props)=>console.log(props)}
padding-top: 10px;
width: 100%;
height: 100%;

display: grid;
grid-template-columns: 25% 25% 25%  ;
grid-template-rows: 20% 20% 20% 20%;
column-gap: 30px;
row-gap: 30px;
justify-content: center;

>div{    
>h3{display:none}
text-align:center;
   height: 100%;
     img
    {height: 55%;
    width:55%;}
    p{
        text-align: center;
    }
}



/* &>div:hover{
        background-color: #f8f8f8;
    border-radius: 9pt;
    height: 4000px;
     p{
        display: none;
    }   
    h3{
        display: block;
    }
    } */
   
${(props)=> props.ismatchcheck==="no" ?

css`
&>div:hover{
        background-color: #f8f8f8;
    border-radius: 9pt;
    
     p{
        display: none;
    }   
    h3{
        display: block;
    }
    }
 
`
:
css`
&>div:hover{
 
    >p{   border: 1px solid red;}
    
   }




`

} 




${(props)=>props.fuck ==="fuck"?

css`
   
    &>.${props.fuck3}{ z-index: 100;}
&>.${props.fuck3}>.${props.fuck2} {display:block; background-color:white};
`
:
""
}

/* &>.Matcheachcol>.x10{
  
        display:block; height:400000px;
  
}; */


${(props)=> console.log(props.fuck2)
}



@media screen and (max-width:500px) {

flex-direction: column;
grid-template-columns: 30% 30% ;
grid-template-rows: 15% 15% 15% 15% 15%;
column-gap: 20px;
row-gap: 20px;
}
`;


export const ProductBody = (props) => {

     const gridheightref= useRef();
     const Allwrapperheightref=useRef()
    const [windowheight, setwindowheight] = useState();
    const [verticalmatch, setVerticalmatch] = useState(true);
    const [gridheight, setGridheight]= useState()
    const [allwrapperheight, setAllwrapperheight]= useState()
    const [marginheight,setMarginheight]=useState();
    const [isclick,setIsclick]=useState("false");
    let height = window.innerHeight;
    let restheight;
    //   var  match=height-10;

    if (verticalmatch) {

        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            // console.log("scrollY->>>" + scrollY)
          
            if (scrollY > 3) {
                setVerticalmatch(false)
            restheight=  Allwrapperheightref.current.offsetHeight-gridheightref.current.offsetHeight
                setAllwrapperheight(Allwrapperheightref.current.offsetHeight)
                setMarginheight(restheight+Allwrapperheightref.current.offsetHeight);
                setGridheight(gridheightref.current.offsetHeight)
            //  console.log(gridheightref.current.offsetHeight);
                
            }

        });

    } else {
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            // console.log("scrollY->>>"+scrollY)
            if (scrollY < 3) {

                setVerticalmatch(true)
            }

        })





    }
    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' })
    const [affter, setAffter] = useState()
    const [affter2, setAffter2] = useState()
    const [firstpageimg, setFirstpageimg] = useState([])
    const [prevent, setPrevent] = useState([props.prevent])
    const [f , setF]=useState(false)
    const [fuck, setFuck]= useState()
    const [fuck2, setFuck2]= useState();
    const [fuck3, setFuck3]= useState()
    const [ismatchc, setIsmatchc] = useState()
    let firstpageimgarray = [];


    let firstpage = props.firstproduct;

useEffect(()=>{
if(ismatchcheck==false){
    setIsmatchc("no")
}else{
    setIsmatchc("yes")
}

})



    const Getfirstimg = (props) => {
        // console.log(props.name)
        let productdata = props.name

        return (
            <>

                <div ClassName="Eachcol">
                <img src={require('../img/' + productdata.product_img)}  />
                        <p ClassName="proname">상품명:{productdata.product_name}</p>
                        <p ClassName="proprice">가격:{productdata.product_price}</p>
                        <h3 >{productdata.product_info}</h3>                  
                </div>



            </>

        ) 


    }

    // 여기서 배열 돌려서 set 에 집어 넣으면 또 무한렌더링 일어남..하 씨발 못해먹겠네
// 하씨발.사실  Getfirstimg  메소드가 현 재 지금 반목문으로 호출되는 형태라  씨발..
// 씨발 뭐라 이젠 정리해야 할지도 믈겠다.
const Matchgetfirstimg= (props) => {
 
    let productdata = props.name
    let array=[];
    //  console.log(firstpage.length)
    
//   for(let i=0; i<firstpage.length; i++){
//   array.push(productdata.product_cod)
//    }

//    console.log(array)
//    setFuck2("x"+productdata.product_cod)
// useEffect(()=>{
//     setFuck2(array)
// },[f])
   
  
//    console.log("fuck2->>"+fuck2)


    return (
        <>

            <div className={`${"y"+productdata.product_cod}`}  >
            <img src={require('../img/' + productdata.product_img)}  /> 
            <p  onClick={Detailinfo} data={isclick} datas={`${"x"+productdata.product_cod}`}>상세보기</p>                  
                    <h3 className={`${"x"+productdata.product_cod}`} >{productdata.product_info}</h3>                  
            </div>
        </>

    ) 


}

const Detailinfo=(e)=>{
  
console.log(e.target.parentElement.className)
  
 if(e.target.nextElementSibling.className===e.target.attributes.datas.value&&isclick=="false"){
    setFuck2(e.target.nextElementSibling.className)
    setFuck3(e.target.parentElement.className)
    setFuck("fuck")
    setIsclick("true")
 } else if(e.target.nextElementSibling.className===e.target.attributes.datas.value&&isclick=="true"){

    setFuck2()
    setFuck("fuck")
    setIsclick("false")
 }


    
    
   

}

    const Content1Click = (e) => {


        if (e.target.id == "one") {
            setAffter("affter1")
            setAffter2("false")
        } else if (e.target.id == "two") {

            setAffter2("affter2")
            setAffter("false")
        }
    }

// console.log("props.navheight->>>"+props.navheight)

    return (
        <>
            <AllwrapperProductdiv ref={Allwrapperheightref} ClassName="AllwrapperProductdiv">
                <Row1 ClassName="Row1">
                    <Row1Col1 ClassName='Row1Col1'  >
                        <Row1Col1Row1 onClick={Content1Click} affter1={affter} id={`${"one"}`} className="clickfnc" >수채화용품</Row1Col1Row1>
                    </Row1Col1>
                    <Row1Col1>
                        <Row1Col1Row2 onClick={Content1Click} affter2={affter2} id={"two"}>아크릴용품</Row1Col1Row2>
                    </Row1Col1>
                    {/* <Row1Col1>
                        <Row1Col1Row1>유화용품</Row1Col1Row1></Row1Col1>
                    <Row1Col1>
                        <Row1Col1Row1  >소묘용품</Row1Col1Row1></Row1Col1> */}
                </Row1>
                <WrapperRow2 className="WrapperRow2 ">
                    {ismatchcheck? 
                    
                    <Row2 ref={gridheightref} ismatchcheck={ismatchc} fuck={fuck} fuck2={fuck2}  fuck3={fuck3}  className="Row2">
                    {
                        firstpage.map((item, idx) => {
                            return (
                                <>
                                    <Matchgetfirstimg name={item} key={idx} />
                                </>

                            )
                        })
                    }
          
                </Row2>           
                    
                    
                    
                    
                    :  <Row2 ref={gridheightref} ismatchcheck={ismatchc} className="Row2">
                        {
                            firstpage.map((item, idx) => {
                                return (
                                    <>
                                        <Getfirstimg name={item} key={idx} />
                                    </>

                                )
                            })




                        }
              
                    </Row2> }
                   
                    {/* <Row2 className="Row2">
                        {
                         firstpage.map((item, idx) => {
                                return (
                                  "털보지아저씨"
                                )
                            })
                        }


                        
                    </Row2> */}


                </WrapperRow2>


            </AllwrapperProductdiv>
            <Footer  fixed={verticalmatch} navheight={props.navheight} gridheight={gridheight} marginheight={marginheight} />

        </>

    );


}