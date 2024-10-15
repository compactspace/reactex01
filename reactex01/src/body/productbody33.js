import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {useMediaQuery} from "react-responsive";

axios.defaults.withCredentials = true;

const AllwrapperProductdiv = styled.div`
display: flex;
flex-direction: column;
height: 1600px;
`;


const Row1 = styled.div`
height: 15%;
display: flex;


`;

const WrapperRow2= styled.div`
height: 85%;
`;


const Row2 = styled.div`
width: 100%;
height: 40%;

display: grid;
      grid-template-columns: repeat(3, 100px);
justify-content: center;
/* background-image: url("./imgss/main.jpg");
background-size: 100% 4000px; */

@media screen and (max-width:500px) {
flex-direction: column;
}



`;


const Row2col11 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;


>h1{
    background-color: aliceblue;
}


@media screen and (max-width:500px) {
flex-direction: column;
width: 100%;;

>h1{
    background-color: aliceblue;
}


}




`;
const Row2col12 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: black;

`;
const Row2col13 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: yellow;

`;

const Row2col21 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: red;

`;
const Row2col22 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: black;

`;
const Row2col23 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: yellow;

`;



const Row2col31 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: red;

`;
const Row2col32 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: black;

`;
const Row2col33 = styled.div`
width: 20%;
height: 70%;
margin-left: 15px;
margin-right: 15px;
display: flex;
background-color: yellow;

`;










export const ProductBody = (props) => {

   const ismatchcheck=useMediaQuery({query: '(max-width:500px)'})
    const [firstpageimg, setFirstpageimg] = useState([])
    const [prevent, setPrevent] = useState([props.prevent])


    let firstpageimgarray = [];


    let firstpage = props.firstproduct;
    console.log("프로덕트바디컴포넌트에서")
    console.log(firstpage)



    // 걍 하드코딩 간다 방법이 없다.
    const Getfirstimg = (props) => {

 console.log(props.sex)
        for (let i = 0; i < firstpage.length-1; i++) {

            firstpageimgarray.push(
                <>                             
                    <h1>하하</h1>                  
                </>
            );
        }

   return firstpageimgarray
    }

    





    return (
        <>

            <AllwrapperProductdiv>
                <Row1>
           
{
          firstpage.map((item, idx)=>{
              return (
                <Getfirstimg sex={"sex"} />
              )
            })
          }


                    
                </Row1>
<WrapperRow2>
                <Row2>
                    {ismatchcheck?
                    
                    <>
                       <Row2col11>
                       
                    </Row2col11>
                    <Row2col12>

                    </Row2col12>
                    <Row2col13></Row2col13>
                    
                    
                    </> :
                    <>
                    
                    <Row2col11>
           
                    </Row2col11>
                    <Row2col12>

                    </Row2col12>
                    <Row2col13></Row2col13>
                    
                    
                    </> }
                 
                </Row2>
                <Row2>
                    <Row2col21>
               
                    </Row2col21>
                    <Row2col22>

                    </Row2col22>
                    <Row2col23>

                    </Row2col23>

                </Row2>

                <Row2>
                    <Row2col31>
        
                    </Row2col31>
                    <Row2col32>

                    </Row2col32>
                    
                    <Row2col33>

                    </Row2col33>

                </Row2>
                </WrapperRow2>
         


            </AllwrapperProductdiv>


        </>

    );


}
//  export const Getfirstimg = (props) => {

//     console.log("sex->"+props.name)
//     return (<h1>sdfsg</h1>);
//          // for (let i = 0; i < firstpage.length-1; i++) {
 
//          //     firstpageimgarray.push(
//          //         <>                             
//          //             <img src={require('../img/' + firstpage[i])} />                    
//          //         </>
//          //     );
//          // }
 
    
//      }
 

  
