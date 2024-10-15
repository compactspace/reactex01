import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';



export const ReduxEx01 = () => {

    let a1 = useSelector((state) => { return state.cart });
    let a2 = useSelector((state) => { return state.statetest1 });
    let a3 = useSelector((state) => { return state.statetest1 });
    console.log(a1[0])
    console.log(a2)




    return (<>

        <h1>그냥 스토어.js 에서 세팅한 스테이트가져오기</h1>
        <h1>{a1[0].id}</h1>
        <h1>{a2}</h1>
    </>)

}