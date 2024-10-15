import React, { useState } from "react";
import styled from "styled-components";
import  {Mainpage}  from "../../pages/Mainpage";
const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: ${(props)=>props.fontSize};
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${(props) => props.red || "gray"};

`;
export const Button=({ fontSize, background })=>{

const [test, setTest]=useState(false)


const Test=(red)=>{  
  setTest(true)  
// //팩트 체크함 원리는 모르겠는데, 
// //이벤트 함수 내에서의 컴포넌트 호출은 그냥 리렌더링도 뭐고 그냥 씹힘

// console.log("클릭매핑확인");

// //  <StyledButton background={background}>고규마</StyledButton>
//    return (<h1>sex</h1>);
if(test){return <Mainpage>sex</Mainpage>}
}


// if(test){return <Mainpage>sex</Mainpage>}

  return (
    <StyledButton  onClick={Test}  fontSize={'50px'}   background={background}>
      하하
    </StyledButton>
  );
}