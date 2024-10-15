// import axios from 'axios';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { ShoseData, FoodData, MovieData } from '../임폴트익스폴트다가능/data'

import { Changeup, Changedown, Changedel, newproduct } from '../../store/store'




//장바구니 수량 조절을 해보자
// 상품삭제
// 단  백엔드 연결이 없으니 다 state에서 처리하자.

//한편 밑에 상품정보가 있는 태그를 하드 코딩한후
// 주문하기 버튼을 만들어라
//그러면 그 상품정보가 state에 추가 되도록 해보세요
// 게씨발 벡엔드에서 받는게 없으니 

// 폴더명 임폴트익스폴트다가능 에서 
//deta.js 에서 등록한 상품을 import 해와서 해바라


//한편 잘 추가가 되었다면, 장바구니에선 계속 새로운 상품마냥 새로 추가될것 일텐데
// 추가라면 장바구니 수량 업데이트로 해보아라


const MycartWrapper = styled.div`
/* position: fixed;
top: 300px; */
display: grid;
grid-template-rows: 30% 30% 30%;
height:320px ;
width: 80%;

grid-gap: 100px;

& .updown{
    display: grid;
    grid-template-rows: 30% 30% 30%;

}

& .up{
  background-color: red;
}
& .down{
    background-color: yellowgreen;

}


`

const ProductWrapper = styled.div`
width: 80%;
height: 400px;
margin-left: auto ;
margin-right: auto;
display: flex;
flex-direction: column;
border: 1px solid black;
border-bottom-color: greenyellow;
`


export const ReduxEx03 = () => {

    let mycart = useSelector((state) => { return state.mycart });

    let dispatch = useDispatch();





    return (<>
        <MycartWrapper>
            {
                mycart.map((obj, index) => {

                    return (<div className="content">

                        <div>
                            이름:{obj.이름}
                        </div>

                        <div >
                            이름:{obj.가격}
                        </div>


                        <div className='updown'>
                            <div className='up' onClick={() => {
                                // Action 의 playload 속성이 any 라 그냥 배열로 받아옴
                                dispatch(Changeup([obj.수량, index]))

                            }}>수량업!</div>
                            <div>수량:{obj.수량}</div>
                            <div onClick={
                                () => {
                                    dispatch(Changedel(index));
                                }

                            }

                            >삭제:{obj.수량}</div>
                            {obj.수량 == 0 ? null :

                                <>
                                    <div className='down' onClick={() => {
                                        dispatch(Changedown([obj.수량, index]))

                                    }} >수량다운!</div>
                                </>

                            }



                        </div>

                    </div>);

                })

            }


        </MycartWrapper>
        <h1>페이지 또만들기 귀찮아서 아래는 그냥 상품 페이지라 뇌한테 사기쳐라</h1>

        <ProductWrapper>


            {
                ShoseData.map((obj, index) => {


                    return (<>

                        <div>{obj.quanatity}</div>
                        <div>{obj.price}</div>
                        <div>{obj.name}</div>

                        <div className={index}
                            onClick={() => {
                                dispatch(newproduct([{이름:obj.name , 가격:obj.price,수량:obj.quanatity }]));
                                
                                
                               
                               



                            }}

                        >장바구니에추가</div>
                    </>);

                })

            }

        </ProductWrapper>



    </>)

}