import React from "react";

import { Login, Logout ,Firstproduct,Firstproduct2,Firstproduct3,Reviews,Experience,Join,Board} from "../middlewarecomponent/componentspath";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookieManager} from '../middlewarecomponent/cookieManager'


import { Mainpage } from "../pages/Mainpage";
import {OpenClassPage} from "../pages/OpenClass"


// import {Mainpage } from "../pages/mainpage/MainHomepage";
import {Ondayclass} from '../pages/Onedayclasspage'
import {Reserve} from '../body/reservbody'


// import { Product } from "../pages/productpage";

///여기서부턴 문법//
import {LiteralEx01} from '../syntax/Literal/lteral'
import {ExpressionEx01} from '../syntax/Expression/ExpressionEx01'
import {ModalMain} from '../syntax/동적ui모달창/ModalMainEx01'
import {ModalMainEx02} from '../syntax/동적ui모달창/ModalMainEx02'

import {StateEx01} from '../syntax/state/stateEx01'
import {StateEx02} from '../syntax/state/stateEx02'
import {StateEx03} from '../syntax/state/StateEx03'

import {PropsEx01} from '../syntax/props/PropsEx01'

import {InputeEx01} from '../syntax/인풋태그와이벤트/inputEx01'
import {EventEx01} from '../syntax/인풋태그와이벤트/PropsEx01'


import {CardEx01} from '../syntax/임폴트익스폴트다가능/CardEx01'
import {CardEx02} from '../syntax/임폴트익스폴트다가능/CardEx02'
import {Detail} from '../syntax/임폴트익스폴트다가능/detail'


// 프롭스 전달이 힘든 이유도 있어서 사실 state 값은 최상위 컴포넌트에 있어야 유리하고
// 아무튼 뭐 그렇단다...
function StartRouter() {
  
    return (
        <BrowserRouter>

{/* 이 Routes는 html 담당 */}

            <Routes>

{/* 그냥 문법 용라우터임 */}
<Route path='/LiteralEx01' element={<LiteralEx01></LiteralEx01>}></Route>
<Route path='/ExpressionEx01' element={<ExpressionEx01/>}></Route>
<Route path='/modal' element={<ModalMain></ModalMain>}></Route>
<Route path='/modalex02' element={<ModalMainEx02></ModalMainEx02>}></Route>

<Route path='/stateex01' element={<StateEx01></StateEx01>}></Route>
<Route path='/stateex02' element={<StateEx02></StateEx02>}></Route>
<Route path='/stateex03' element={<StateEx03></StateEx03>}></Route>
<Route path='/propsex01' element={<PropsEx01></PropsEx01>}></Route>
<Route path='/InputeEx01' element={<InputeEx01></InputeEx01>}></Route>
<Route path='/EventEx01' element={<EventEx01></EventEx01>}></Route>
<Route path='/CardEx01' element={<CardEx01></CardEx01>}></Route>
<Route path='/CardEx02' element={<CardEx02></CardEx02>}></Route>
<Route path='/Detail/:id' element={<Detail></Detail>}></Route>

{/* 그냥 문법 용라우터종료 */}




                <Route path='/' element={<Mainpage />} />
                <Route path='/openclass' element={<OpenClassPage/>}/>


                


                <Route path='/oneday' element={<Ondayclass />} />
                           
            </Routes>

{/* 이 Routes는 html에 걸리 서버와의 요청 url 처리 담당. 담당 */}
            <Routes>              
                <Route path="/cookieManager" element={<CookieManager />}/>             
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join/>} />
                <Route path="/board" element={<Board/>} />
                <Route path="/logout" element={<Logout />} />
                <Route path='/getfirstproduct' element={<Firstproduct />} />  
                <Route path='/experience' element={<Experience />} />  
                <Route path='/goreserve' element={<Reserve />} />  
                
                <Route path='/test' element={<Reviews />} />  
            </Routes>

        </BrowserRouter>
    )


}

export default StartRouter;