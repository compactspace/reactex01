import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

// useNavigate() 는 특정 행동을 했을 때 해당 주소로 이동해줄 수 있게 한다.
//가령 클릭이벤트 같은거 했을시




export const UseNavigateEx02 = () => {

    // useNavigate() 의 리턴값 역시 함수이다.

    let naviegate = useNavigate();
    
    // 단, 최초 진입시 기준으로 웹 브라우져에 쌓인 캐쉬 에서 가져오는듯함
    // 이런걸 예상하여 사용하자.
    // 매개변수로 '음수' -> 이전페이지로
    // 매개변수로 '양의정수' -> 다음페이지로 뭐 이런게 가능하다.

    //역시 새로고침 없이 이동이다.

    return (<>
  
        <button onClick={() => {

            { naviegate('/openclass') }


        }}>클릭시에 네비게이터로 오픈를래스페이지로이동</button>

<br></br>
<button onClick={() => {

{ naviegate(-1) }


}}>클릭시에 네비게이터로 전페이지</button>


<br></br>
<button onClick={() => {

{ naviegate(1) }


}}>클릭시에 네비게이터로 다음페이지</button>




    </>)
    

}