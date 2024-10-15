import { Routes, Route, Link, useNavigate,  useLocation,Outlet } from "react-router-dom"

// useNavigate() 는 특정 행동을 했을 때 해당 주소로 "이동"해줄 수 있게 한다.
//가령 클릭이벤트 같은거 했을시




export const UseNavigateEx01 = () => {

    // useNavigate() 의 리턴값 역시 함수이다.

    let naviegate = useNavigate();

    // 따라서 naviegate 도 함수인데

    // 매개변수로 '경로'
    // 매개변수로 '음수' -> 이전페이지로
    // 매개변수로 '양의정수' -> 다음페이지로 뭐 이런게 가능하다.

    //역시 새로고침 없이 이동이다.


let location=useLocation();
console.log("네비게이터의타겟이 아니면 스테이트는 전달이 않됨")
console.log(location)

    return (<>
        <h1>df</h1>
        <button onClick={() => {

            { naviegate('/openclass') }


        }}>클릭시에 네비게이터로 오픈를래스페이지로이동</button>

    </>)

}