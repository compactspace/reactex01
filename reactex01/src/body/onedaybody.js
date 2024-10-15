import { useMediaQuery } from 'react-responsive'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import info1 from '../img/info1.jpg'

const  Bodywrapper = styled.div`
padding-top: 100px;
height:1200px;
display: flex;
flex-direction: column;
`;

const  Row1 = styled.div`
height:20%;
padding-bottom: 100px;

/* display: flex;
flex-direction: column; */
@media screen and (max-width : 500px) {

    padding-top: 50px;
padding-bottom: 50px;

}



`;

const  Row1Subrow1 = styled.h1`
text-align: center;
color: #05141f;
    font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 42px;
    font-weight: 400;

    @media screen and (max-width : 500px) {

        font-family: Kia Signature Bold,Arial,sans-serif,Hevetica;
    font-size: 21px;
    font-weight: 400;

}




`;
const  Row1Subrow2 = styled.p`
text-align: center;
    color: #697278;
    font-family: Kia Signature Light,Arial,sans-serif,Hevetica;
    font-size: 1pc;
    font-weight: 400;



    
`;

const  Row1Subrow3 = styled.p`
text-align: center;
    color: #697278;
    font-family: Kia Signature Light,Arial,sans-serif,Hevetica;
    font-size: 1pc;
    font-weight: 400;
`;


const  Row2 = styled.div`
height: 80%;
display: flex;
flex-direction: column;

`;

const  Row2Subrow1 = styled.div`
display: flex;
height: 50%;
justify-content: center;
flex-direction: ${(props)=>props.flexdirection ? props.flexdirection :'row'  };
`;


const  Row2Subrow1Col1 = styled.div`
height:100%;
width: 35%;
background-image: url(${info1});
background-repeat: no-repeat;
background-size: 100% 80%;
margin-left: 30px;
margin-right: 30px;

@media screen and (max-width : 500px) {
    height:250px;
    width: 80%;
     margin-left: auto;
    margin-right: auto;
    background-size: 100% 80%;
}



`;




const  Row2Subrow1Col2 = styled.div`
height: 100%;
width: 35%;
background-image: url(${info1});
background-repeat: no-repeat;
background-size: 100% 80%;
margin-left: 30px;
margin-right: 30px;

@media screen and (max-width : 500px) {
    height:250px;
    width: 80%;
     margin-left: auto;
    margin-right: auto;
    background-size: 100% 80%;
}


`;







const  Row2Subrow2 = styled.div`
height: 50%;
display: flex;
justify-content: center;
flex-direction: ${(props)=>props.flexdirection ? props.flexdirection :'row'  };
`;

const  Row2Subrow2Col1 = styled.div`
height: 100%;
width: 35%;
background-image: url(${info1});
background-repeat: no-repeat;
background-size: 100% 80%;
margin-left: 30px;
margin-right: 30px;

@media screen and (max-width : 500px) {
    height:250px;
    width: 80%;
     margin-left: auto;
    margin-right: auto;
    background-size: 100% 80%;
}



`;




const  Row2Subrow2Col2 = styled.div`
height: 100%;
width: 35%;
background-image: url(${info1});
background-repeat: no-repeat;
background-size: 100% 80%;
margin-left: 30px;
margin-right: 30px;

@media screen and (max-width : 500px) {
    height:250px;
    width: 80%;
     margin-left: auto;
    margin-right: auto;
    background-size: 100% 80%;
}


`;






const  Row2Subrow3 = styled.div`
display: flex;
`;
export  const Onedaybody= ()=>{

    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' });
    const [ismatch, setIsmatch] = useState();
    useEffect(() => {
        if (ismatchcheck) {
            setIsmatch(true)
        } else {
            
            setIsmatch(false)
        }
    })


    const [onedayheight,setOnedayheight]=useState();
   
    const height = useRef();
    useEffect(()=>{
if(height!=null){

    console.log(height.current.offsetHeight)
}
        // setOnedayheight(height.current.offsetHeight)
      
    })






return (
<Bodywrapper ref={height} className='Bodywrapper'>
<Row1 className='row1' >
    <Row1Subrow1>
휴식과 그림을 함께합니다.
    </Row1Subrow1>
    <Row1Subrow2>
        모든 일의 출발점은 휴식이며, 저희 ***이 출발점이되어드립니다.        
    </Row1Subrow2>
    <Row1Subrow3>
   휴식과 나의 개성을 표현해보는 그림을 제공하는 공간 ***가 시작합니다.
    </Row1Subrow3>
</Row1>
<Row2 className='Row2'>
    {ismatch?<>
        <Row2Subrow1 flexdirection='column' >
    <Row2Subrow1Col1 className='Row2Subrow1Co1'  ></Row2Subrow1Col1>
    <Row2Subrow1Col2></Row2Subrow1Col2>
    </Row2Subrow1>
    <Row2Subrow2 flexdirection='column' >
    <Row2Subrow2Col1 className='Row2Subrow1Co1'  ></Row2Subrow2Col1>
    <Row2Subrow2Col2></Row2Subrow2Col2>
    </Row2Subrow2>
    <Row2Subrow3 >
    
    </Row2Subrow3>
    
    
    
    </> : 
 
    
    <><Row2Subrow1 >
    <Row2Subrow1Col1 className='Row2Subrow1Co1'  ></Row2Subrow1Col1>
    <Row2Subrow1Col2></Row2Subrow1Col2>
    </Row2Subrow1>
    <Row2Subrow2 >
    <Row2Subrow2Col1 className='Row2Subrow1Co1'  ></Row2Subrow2Col1>
    <Row2Subrow2Col2></Row2Subrow2Col2>
    </Row2Subrow2>
    <Row2Subrow3 >
    
    </Row2Subrow3></>
    
    
    
    }

</Row2>
</Bodywrapper>

)
}