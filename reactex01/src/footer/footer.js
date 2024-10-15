import React, { useState, useRef } from 'react';
import styled ,{css}from 'styled-components'


export const Aallfooterwrapper = styled.div`


position: relative;
${(props)=>  
!props.fixed && props.navheight!=null && props.marginheight!=null? 
    css`
    position: absolute;
    height: 400px;
    background-color: #05141f;
    width:100%;
  top: ${(parseInt(props.navheight)+parseInt(props.marginheight))+"px"};
    `
:
""

};


 top:${(props) => {

        if (props.fixed) {
            return "-200px"
        } 
      
    }
    }; 
display: flex;
flex-direction: column;



`;

export const FooterTrueGridrow1 = styled.div`
position: absolute;
    top: 150px;
height: 50px;
width: 100%;
background-color: #05141f;
display: grid;
grid-template-columns: 15% 15% 15% 15%  ;
grid-template-rows: 15%;
column-gap: 30px;
row-gap: 30px;
justify-content: center;

@media screen and (max-width :500px){
    background-color : #05141f; opacity : 0.9;
    height: 200px;
    grid-template-columns: 15% 15%   ;
grid-template-rows: 15% 15%  ;
top: 0px;
    
}


`;



export const TrueGridrow1item = styled.div`
line-height: 50px;
width:100%;
height: 100%;
text-align: center;

`;
export const Items = styled.a`

text-decoration:none;
font-weight: 400;
color: #f8f8f8;


`;




export const Footerrow1 = styled.div`
position: absolute;

/* position:${(props) => {

if (props.fixed) {
    return " ";
} 
else {
  return "absolute";
}
}
}; */




bottom: 0px;
display: flex;
justify-content: space-between;
/* background-color: #05141f; */
height: 500px;
`;


export const Footerrow1col1 = styled.div`
display: flex;
justify-content: space-between;
`;

export const Footerrow1col2 = styled.div`
display: flex;
justify-content: space-between;
`;

export const Footerrow2 = styled.div`
display: flex;
justify-content: space-between;
background-color: #010e18;
height: 400px;
`;

export const Footerrow2col1 = styled.div`
display: flex;
justify-content: space-between;
`;

export const Footerrow2col2 = styled.div`
display: flex;
justify-content: space-between;
`;

export const Footerrow2col3 = styled.div`
display: flex;
justify-content: space-between;
`;


export const Footer = (props) => {
    // console.log("푸터가받은 props->>" + JSON.stringify(props.fixed));
    // console.log("푸터가받은 props->>" + props.navheight+"---------------"+props.gridheight);
    // console.log("더하기->"+props.navheight+props.gridheight)

    return (
        <>{props.fixed ? <>
        
        <Aallfooterwrapper ClassName='fuck1' navheight={props.navheight} gridheight={props.gridheight}   marginheight={props.marginheight}  fixed={props.fixed}>


            <FooterTrueGridrow1 className='ssibal1'>
                <TrueGridrow1item ><Items>연필</Items></TrueGridrow1item>
                <TrueGridrow1item ><Items>도화지</Items></TrueGridrow1item>
                <TrueGridrow1item ><Items>물감</Items></TrueGridrow1item>
                <TrueGridrow1item ><Items>아크릴</Items></TrueGridrow1item>
            </FooterTrueGridrow1>
        </Aallfooterwrapper></> 
        
        :

            <>
            <Aallfooterwrapper ClassName='fuck2'
             fixed={props.fixed} navheight={props.navheight} gridheight={props.gridheight} marginheight={props.marginheight}>
    <Footerrow1 className='ssibal2'></Footerrow1>
         
            </Aallfooterwrapper></>}

        </>
    );


} 