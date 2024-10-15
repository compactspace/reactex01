
import React, { useState} from "react";
import styled from "styled-components";
import { Data } from './data'



/// 숙제 대충 카드 태그 만들고 
// 다른 js파일에서 배열로 데이터 만들고
// 가져와서 스테이트에 담아보자.

// 그리고 반복문으로 돌려보자.

const CardWraper = styled.div`



display: grid;

grid-template-columns: 30% 30% 30%;

grid-gap: 20px;


& .pronum{
border: 1px solid black;

}
`



export const CardEx01 = () => {

    //초기값세팅은 무한 랜더링 않빠짐.. ㅎㄷㄷ
    const [data, setData]=useState(Data);
    return (<>
        <CardWraper>
            {data.map((obj, index) => {

                return <div index={index} className="pronum">
                    <div className="title">
                    {obj.title}
                    </div>
                    <div className="price">
                    {obj.price}
                    </div>
                    <div className="name">
                    {obj.name}
                    </div>

                </div>
            })}
        </CardWraper>
    </>)


}