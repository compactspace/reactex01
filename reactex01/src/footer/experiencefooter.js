import React, { useState, useRef } from 'react';
import styled ,{css}from 'styled-components'


export const Aallfooterwrapper = styled.div`

height: 400px;
position: relative;
bottom: 0px;
/* ${(props)=>  
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

}; */


 /* top:${(props) => {

        if (props.fixed) {
            return "-200px"
        } 
      
    }
    };  */
display: flex;
flex-direction: column;



`;






export const Footerrow1 = styled.div`

height: 100%;
/* position:${(props) => {

if (props.fixed) {
    return " ";
} 
else {
  return "absolute";
}
}
}; */





display: flex;
justify-content: space-between;
background-color: #05141f;

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

export const Experiencefooter = (props) => {
    // console.log("푸터가받은 props->>" + JSON.stringify(props.fixed));
    // console.log("푸터가받은 props->>" + props.navheight+"---------------"+props.gridheight);
    // console.log("더하기->"+props.navheight+props.gridheight)

    return (
        <>
<Aallfooterwrapper className='productfooter'>
    <Footerrow1 className='row1footer'>
<h1>펏</h1>
    </Footerrow1>
         
            </Aallfooterwrapper>
        </>
    );


} 