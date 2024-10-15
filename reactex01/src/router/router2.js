import React, { useState } from "react";



import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";

//디펄트 익스폴트는 파일명까지 이름붙이면 아무이름가져올수있는듯.
import { Provider } from 'react-redux';


import store from '../store/store.js'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';




import { Mainpage } from "../pages/Mainpage";
import { OpenClassPage } from "../pages/OpenClass"
import { OneDayClasspage } from "../pages/OneDayClass.js"
import { LoginLoadingComponent } from '../component/loadingcomponent/LoginLoadingcomponent.js'




///여기서부턴 문법//
import { LiteralEx01 } from '../syntax/Literal/lteral'
import { ExpressionEx01 } from '../syntax/Expression/ExpressionEx01'
import { ModalMain } from '../syntax/동적ui모달창/ModalMainEx01'
import { ModalMainEx02 } from '../syntax/동적ui모달창/ModalMainEx02'


import { RerenderingEx01 } from '../syntax/리랜더링/rerenderingEx01.js'

import { StateEx01 } from '../syntax/state/stateEx01'
import { StateEx02 } from '../syntax/state/stateEx02'
import { StateEx03 } from '../syntax/state/StateEx03'

import { PropsEx01 } from '../syntax/props/PropsEx01'

import { InputeEx01 } from '../syntax/인풋태그와이벤트/inputEx01'
import { EventEx01 } from '../syntax/인풋태그와이벤트/PropsEx01'


import { CardEx01 } from '../syntax/임폴트익스폴트다가능/CardEx01'
import { CardEx02 } from '../syntax/임폴트익스폴트다가능/CardEx02'
import { Detail } from '../syntax/임폴트익스폴트다가능/detail'

import { LinkEx01 } from '../syntax/Link훅과a태그href/LinkEx01'

import { LinkEx02 } from '../syntax/Link훅과a태그href/LinkEx02'


import {SetIntervalEx01} from '../syntax/리액트와셋인터벌/setIntervalEx01.js'





// import { Test } from '../component/openclassbodycomponent/test'
import { UseNavigateEx01 } from '../syntax/네비게이터아울렛/NaviegateEx01'
import { UseNavigateEx02 } from '../syntax/네비게이터아울렛/NaviegateEx02'
import { UseNavigateEx03 } from '../syntax/네비게이터아울렛/NaviegateEx03'
import { ErrorEx01 } from '../syntax/에러페이지/ErrorEx01'


import { NasetedEx01 } from '../syntax/네스티트라우터/NestedEx01'
import { OutletEx01 } from '../syntax/아울렛/OutletEx01'

import { UseEffectEx01 } from '../syntax/useeffect/ex02'


import { UseStateEx01 } from '../syntax/4강유즈스테이트/UseStateEx01'
import { UseStateEx02 } from '../syntax/4강유즈스테이트/UseStateEx02'
import { UseStateEx03 } from '../syntax/4강유즈스테이트/UseStateEx03'

import { CompoExcute } from '../syntax/7강Component 많은 div들을 한 단어로 줄이고 싶으면/CompoExcute'



import { UseStateChangeEx01 } from '../syntax/6강arrayobjectstate변경하는 법/UseStateChangeEx01'

import { MapEx01 } from '../syntax/9강map많은 div들을 반복문으로 줄이고 싶은 충동이 들 때/MapEx01'





import { ReduxEx01 } from '../syntax/리덕스리덕스툴킷/ReduxEx01.js'
import { ReduxEx02 } from '../syntax/리덕스리덕스툴킷/ReduxEx02.js'
import { ReduxEx03 } from '../syntax/리덕스리덕스툴킷/ReduxEx03.js'
import { LocalStroe } from '../syntax/로컬스트로지와최근본상품/LocalSotre.js'
import { LocalStroe2 } from '../syntax/로컬스트로지와최근본상품/LocalSotre2.js'
import { LocalStroeProduct } from '../syntax/로컬스트로지와최근본상품/LocalSotre3.js'

import { UseQueryEx01 } from '../syntax/유즈쿼리와실시간데이터/UseQueryEx01.js'
import { UseQueryEx02 } from '../syntax/유즈쿼리와실시간데이터/UseQueryEx02.js'

import { NaverLogin } from '../syntax/네이버로그인/naverloginEx01.js'
import { NaverLogin2 } from '../syntax/네이버로그인/naverloginEx02.js'
import { NaverLogin3 } from '../syntax/네이버로그인/naverloginEx03.js'
import { NaverloginCompleteEx01 } from '../syntax/네이버로그인/NaverloginCompleteEx01.js'

import { TransactionEx01 } from '../syntax/리액트와동시성/transactionEx01.js'

import { BackEx01 } from '../syntax/뒤로가기앞으로가기/backEx01.js'

import { BackEx02 } from '../syntax/뒤로가기앞으로가기/backEx02.js'


import { ButtonEx01 } from '../syntax/5강버튼에 기능개발을 해보자 & 리액트 state변경하는 법/ButtonEx01'



import { JsxEx01 } from '../syntax/1강JSX/JSXEx01.js'
import { JsxEx02 } from '../syntax/1강JSX/JSXEX02.js'

import { ImgEx01 } from '../syntax/파트21강 이미지 넣는 법 & public 폴더 이용하기/ImgEx01.js'

import { ModalEx01 } from '../syntax/8강리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)/ModalEx01.js'


import { Mom } from '../syntax/10강자식이 부모의 state 가져다쓰고 싶을 때는 props/Mom'



import { UseEffectFnc } from '../syntax/useeffect/ex01.js'

import { UseEffectFncEx03 } from '../syntax/useeffect/ex03.js'

import { UseEffectFncEx04 } from '../syntax/useeffect/ex04.js'


import { JavaSocketEx01 } from '../syntax/자바소켓서버와통신/JavaSocketEx01.js'

import { JWTex01 } from '../syntax/JWT연습/JWTex01.js'
import { JWTex02 } from '../syntax/JWT연습/JWTex02.js'



import {WebSocketEx01} from'../syntax/웹소켓/WebSocketEx01.js'
import {WebSocketEx02} from'../syntax/웹소켓/WebSocketEx02.js'
import{JoinQuestion} from '../syntax/웹소켓/JoinQuestion.js'


import {XSSEx01} from '../syntax/XSS공격/XSSEx01.js'





// 프롭스 전달이 힘든 이유도 있어서 사실 state 값은 최상위 컴포넌트에 있어야 유리하고
// 아무튼 뭐 그렇단다...


/////////////////////여기서 부턴 새로운 프로젝트 컴포넌트
import { NewMainpage } from '../pages/NewMainPage.js'
import {MainMyPage} from '../pages/MainMyPage.js'
import {QnABody} from '../component/mainbodycomponent/QnABody.js'
import {TestLogin} from '../pages/TestLogin.js'
import {WritingReview} from '../pages/WritingReview.js'


import {PhoneMainPage} from '../pages/PhoneMainPage.js'

import {PhoneOnedayClassPage} from '../pages/smartphoneonedaypage.js'
import {PhoneQnABody} from '../pages/PhoneQnaPage.js'



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {

      // 이는 오직 한번만 리페칭 된다. 2초마다가 아니라 2초뒤에 한번 리페칭
      // 물론 탭으로는 계속 별도로가능
      gcTime: 1000,
      staleTime: 0,

      // 아갈무세 ㄴㄴ 강제 리페칭 옵션으로 1초마다 ㄱㄱ
      //  refetchInterval:5000
    }
  },
});



// const queryClient = new QueryClient(


// )   //2번

//index.js 에서 호출될 컴포넌트임
function StartRouter2() {
  let [query, setqeury] = useState(queryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>

          <Routes>
            <Route path="/main2" element={<NewMainpage></NewMainpage>}></Route>
            <Route path='/main' element={<Mainpage />} />
            <Route path='/mypage' element={<MainMyPage></MainMyPage>}></Route>
            <Route path='/testjoin' element={<TestLogin></TestLogin>}></Route>
            <Route path='/openclass' element={<OpenClassPage />} />
            {/* 주의: 현재 id는 0 1 2 만 있음  또한 해당 컴포넌트의 useParam훅을 보아라 반드시 
                또 주의: id=3는 사진이 5개 이고, 한개는 외부호스팅 영상 사용할꺼라
                그쪽 사이트 영상 사라지면   <Route path='/onedayclass/3' 는 map 에러 뿜을수있음
            */}
            <Route path='/onedayclass/:id' element={<OneDayClasspage></OneDayClasspage>} />
            <Route path="/writingreview/:id" element={<WritingReview></WritingReview>}  />

            <Route path='/LoginLoadingComponent' element={<LoginLoadingComponent></LoginLoadingComponent>} />
            <Route path='/qna/:onedayclass_num/:id' element={<QnABody></QnABody>}></Route>  
          



            <Route path="*" element={<ErrorEx01></ErrorEx01>}></Route>

              {/* 스마트폰 전용 */}
              <Route path="/smain" element={<PhoneMainPage></PhoneMainPage>}></Route>
              <Route path='/phoneonedayclass/:id' element={<PhoneOnedayClassPage></PhoneOnedayClassPage>}></Route>
              <Route path='/phoneqna/:onedayclass_num/:id' element={<PhoneQnABody></PhoneQnABody>}></Route>  






            {/* 그냥 문법 용라우터임 */}
            <Route path='/LiteralEx01' element={<LiteralEx01></LiteralEx01>}></Route>
            <Route path='/ExpressionEx01' element={<ExpressionEx01 />}></Route>
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

            <Route path="/LinkEx01" element={<LinkEx01></LinkEx01>}></Route>

            <Route path="/LinkEx02" element={<LinkEx02></LinkEx02>}></Route>
            <Route path="/UseNavigateEx01" element={<UseNavigateEx01></UseNavigateEx01>}></Route>
            <Route path="/UseNavigateEx02" element={<UseNavigateEx02></UseNavigateEx02>}></Route>
            <Route path="/UseNavigateEx03" element={<UseNavigateEx03></UseNavigateEx03>}></Route>
            <Route path="/NaverLoing1" element={<NaverLogin></NaverLogin>}></Route>
            <Route path="/NaverLoing2" element={<NaverLogin2></NaverLogin2>}></Route>
            <Route path="/NaverLoing3" element={<NaverLogin3></NaverLogin3>}></Route>
            <Route path="/NaverloginCompleteEx01" element={<NaverloginCompleteEx01></NaverloginCompleteEx01>}></Route>
            <Route path="/JWTex01" element={<JWTex01></JWTex01>}></Route>
            <Route path="/JWTex02" element={<JWTex02></JWTex02>}></Route>
            <Route path="/TransactionEx01" element={<TransactionEx01></TransactionEx01>}></Route>

            <Route path="/SetIntervalEx01" element={<SetIntervalEx01></SetIntervalEx01>}></Route>
           



            <Route path="/BackEx01" element={<BackEx01></BackEx01>}></Route>
            <Route path="/BackEx02" element={<BackEx02></BackEx02>}></Route>
            <Route path="/JsxEx01" element={<JsxEx01></JsxEx01>}></Route>

            <Route path="/JsxEx02" element={<JsxEx02></JsxEx02>}></Route>

            <Route path="/UseStateEx01" element={<UseStateEx01></UseStateEx01>}></Route>
            <Route path="/UseStateEx02" element={<UseStateEx02></UseStateEx02>}></Route>
            <Route path="/UseStateEx03" element={<UseStateEx03></UseStateEx03>}></Route>

            <Route path="/UseStateChangeEx01" element={< UseStateChangeEx01></UseStateChangeEx01>}></Route>

            <Route path="/CompoExcute" element={<CompoExcute></CompoExcute>}></Route>
            <Route path="/ModalEx01" element={<ModalEx01></ModalEx01>}></Route>

            <Route path="/MapEx01" element={<MapEx01></MapEx01>}></Route>


            <Route path="/Mom" element={<Mom></Mom>}></Route>



            <Route path="/ButtonEx01" element={<ButtonEx01></ButtonEx01>}></Route>
            <Route path="/ImgEx01" element={<ImgEx01></ImgEx01>}></Route>

            <Route path="/RerenderingEx01" element={<RerenderingEx01></RerenderingEx01>}></Route>

            <Route path="/websocekex01" element={<WebSocketEx01></WebSocketEx01>}></Route>
            <Route path='/JoinQuestion'element={<JoinQuestion></JoinQuestion>}></Route>
            <Route path="/websocekex02" element={<WebSocketEx02></WebSocketEx02>}></Route>



           <Route path="XSSEx01" element={<XSSEx01></XSSEx01>}></Route>     



            {/*네이스티 없이 그냥 path로 때려 밖는경우 */}
            {/* <Route path="/NasetedEx01/ko"  element={<NasetedEx01 language={"Ko"}></NasetedEx01>}></Route>
            <Route path="/NasetedEx01/eu"  element={<NasetedEx01 language={"Eu"}></NasetedEx01>}></Route>
            <Route path="/NasetedEx01/je"  element={<NasetedEx01 language={"Je"}></NasetedEx01>}></Route> */}

            {/*저런걸 그나마 줄여주는게 네스티드 라우터 기법이란다.*/}
            <Route path="/NasetedEx01/ko" element={<NasetedEx01 language={"Ko"}></NasetedEx01>}>

              {/* /NasetedEx01/ko/eu */}
              <Route path="eu" language={"Eu"}  ></Route>
              {/* /NasetedEx01/ko/je */}
              <Route path="je" language={"Je"}></Route>
            </Route>


            {/*컴포넌트를 끼워넣을시 아울렛*/}
            <Route path="/Outlet" element={<OutletEx01></OutletEx01>}>
              <Route path="eu" language={"Eu"} element={<h1>영어어모드실행</h1>} ></Route>
              <Route path="je" language={"Je"} element={<h1>일본어모드실행</h1>}></Route>
            </Route>



            <Route path="/UseEffectFncEx01" element={<UseEffectFnc></UseEffectFnc>} ></Route>
            <Route path="/UseEffectFncEx03" element={<UseEffectFncEx03></UseEffectFncEx03>} ></Route>
            <Route path="/UseEffectFncEx04" element={<UseEffectFncEx04></UseEffectFncEx04>} ></Route>


     


              
            <Route path="/ReduxEx01" element={<ReduxEx01></ReduxEx01>} />
            <Route path="/ReduxEx02" element={<ReduxEx02></ReduxEx02>} />
            <Route path="/ReduxEx03" element={<ReduxEx03></ReduxEx03>} />
            <Route path="/LocalStroe" element={<LocalStroe></LocalStroe>} />
            <Route path="/LocalStroe2" element={<LocalStroe2></LocalStroe2>} />
            <Route path="/LocalStroeProduct/:id" element={<LocalStroeProduct></LocalStroeProduct>} />
            <Route path="/UseQueryEx01" element={<UseQueryEx01></UseQueryEx01>} />
            <Route path="/UseQueryEx02" element={<UseQueryEx02 query={queryClient} ></UseQueryEx02>} />

            <Route path="/JavaSocketEx01" element={<JavaSocketEx01></JavaSocketEx01>} />

          </Routes>




        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )


}

export default StartRouter2;
