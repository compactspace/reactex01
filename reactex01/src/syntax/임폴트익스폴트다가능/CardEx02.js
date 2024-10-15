
import React, { useState } from "react";
import styled from "styled-components";
import { ShoseData, MovieData, FoodData } from './data'


//https://velog.io/@catdev/React%EB%A1%9C-%EC%87%BC%ED%95%91%EB%AA%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-2-%ED%8C%8C%EC%9D%BC-%EC%AA%BC%EA%B0%A4%EB%95%8C%EB%8A%94-import-export#%EC%95%84-html-%EB%B0%98%EB%B3%B5%ED%95%B4%EC%84%9C-%EC%A0%81%EC%96%B4%EC%95%BC%ED%95%98%EB%8A%94%EA%B2%8C-%EB%84%88%EB%AC%B4-%EC%A2%80-%EA%B7%B8%EB%9F%B0%EB%8D%B0-%EB%B0%98%EB%B3%B5%EB%AC%B8%EC%9C%BC%EB%A1%9C-%EC%A4%84%EC%97%AC%EC%84%9C-%EB%84%A3%EC%96%B4%EB%B3%BC%EA%B9%8C
/// 숙제 
/// 뭐.. 음식, 영화 걍 아무거나 자료를 data.js 처럼 만들고
// 음식, 영화 버튼을 눌렀을시 프롭스로 그 자료를 전달해서 재활용해보아라

const CardWraper = styled.div`



display: grid;

grid-template-columns: 30% 30% 30%;

grid-gap: 20px;


& .pronum{
border: 1px solid black;

}
`



export const CardEx02 = () => {

    //초기값세팅은 무한 랜더링 않빠짐.. ㅎㄷㄷ
    const [data, setData] = useState(ShoseData);
    //,MovieData,FoodData
    const [종류, 종류바꾸기] = useState([ShoseData, MovieData, FoodData])
    const [종류버튼 ,종류바꾸기버튼] = useState(["ShoseData", "MovieData", "FoodData"])

console.log(data)


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
            {
                종류.map((obj, i) => {
                    return <button type="button" onClick={(e) => {
                        setData(obj);
        

                    }}>{종류버튼[i]}</button>;
                })
            }

        </CardWraper>
    </>)


}