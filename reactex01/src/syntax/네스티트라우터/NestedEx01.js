import { Outlet } from "react-router-dom"
//Naseted 라우터 
// 어떤 라우터의 경로가 /NasetedEx01  라하자.

// 그런데 NasetedEx01/korlanguage
//  NasetedEx01/Eulanguage

// 등 url 에 분기점을 주고싶을때 사용해보는것

// 이건 라우터에서 해야 하니 router2.js로 가서 보자.

//형식은
{/* <Route path="/ex" elements={라우터호출}>

<Route path="1" 프롭스전달 또는 추가 라우터 호출></Route>
<Route path="2" 프롭스전달 또는 추가 라우터 호출></Route>
<Route path="3" 프롭스전달 또는 추가 라우터 호출></Route>

</Route> */}
// 감싼 라우터의 태그 path 뒤에 하위 자식 라우터태그들의 경로가 쌓이는 것이다.
// ex/1 ex/2 ex/3 뭐 이런식으로
export const NasetedEx01 = (props) => {

    return (
        <>
         <h1>현재의 언어는 {props.language} </h1>
 
        </>

    )



}