//그냥 상세페이지 임 별거없음


import React, { useState } from "react";



import {useHistory ,useParams} from 'react-router-dom'

import styled from "styled-components";
import { ShoseData, MovieData, FoodData } from './data'


export const Detail=()=>{



let {id} = useParams();

console.log(id);


return(<>
<h1>그냥상세페이지 입니다.</h1>

</>)



}