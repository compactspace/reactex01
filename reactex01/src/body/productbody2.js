import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import axios from "axios";


axios.defaults.withCredentials = true;
const AllwrapperProductdiv=styled.div`
display: flex;
flex-direction: column;
height: 1600px;
`;


const Row1=styled.div`
height: 15%;
display: flex;
flex-direction: column;

`;

const Row2=styled.div`
height: 4000px;
display: flex;
flex-direction: column;
background-image: url("./imgss/main.jpg");
background-size: 100% 4000px;

`;

export const ProductBody = (props)=>{

 


    const [firstpageimg, setFirstpageimg]=useState([])
    const [prevent, setPrevent]=useState([props.prevent])
  let firstpageimgarray=[];


let firstpage=props.firstproduct;
// console.log("프로덕트바디컴포넌트에서")
// console.log(firstpage)



// const Getfirstimg = ()=>{

//     for(let i=0; i<firstpage.length; i++){ 
       

//          firstpageimgarray.push( 
//          <>
//    {/* <img src={require('../img/product1.jpg')} /> 

//    <img src={require('../img/product1.jpg').defaults} />  */}
//    <img src={'./img/'+firstpage[i]} />

//    {/* <img src={"./imgss/"+firstpage[i]}/> */}

//          {/* <img src={process.env.PUBLIC_URL + '/img/'+firstpage[i]} /> */}

//          <h1>ㅎ하</h1>
//          </>
//          );    
    
//             }        
    
//     return firstpageimgarray;


// }


        // useEffect(()=>{
        //     //객체급 이상 을 sett로 초기화시 
        //     //sett가 내부적으로 계속 새로운객체급으로 받아드리는듯함
        //     //그래서 객체급은 무한랜더링에걸림
        //     //따라서..prevent를 강제로넣어줌     
        //     setFirstpageimg(firstpageimgarray)
     
        //  setPrevent(true)    
     
       
        // },[prevent])

    // useEffect(()=>{

                  
                
    //     console.log("기본형 섹스보지털->"+prevent)
   
    //      })




//  useEffect(()=>{

//     //병신아 이거는  prevent 자체 값을 바꾼거임 한번 바뀐뒤 대조후 일치하니 또 setPrevent 가 작동안함.
//     // setPrevent(prevent+"sex") 라 하면 비동기적함수로 계속 prevent 업데이트하니 무한로딩
//         setPrevent(true+"sex")             
        
//        console.log("의존성배열 섹스보지털->"+prevent)
  
//         },[prevent])


// console.log("firstpageimg->>>"+firstpageimg)
       

return(


    
<> 
<Row2>sdfdsfds</Row2>


{/* {Getfirstimg()} */}
 {/* <AllwrapperProductdiv>
<Row1></Row1>
<Row2></Row2>        

</AllwrapperProductdiv>  */}


</>

) ;
    

}

