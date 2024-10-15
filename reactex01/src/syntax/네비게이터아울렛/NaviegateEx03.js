import { Routes, Route, Link, useNavigate, useLocation,Outlet } from "react-router-dom"



export const UseNavigateEx03 = () => {

    // useNavigate() 와 useLocation 는 짝궁이다.
    // 먼저 useNavigate 의 옵션

    //useNavigate('경로',[state:{key:value}],[{replace:true}])
// 페이지 이동경로와 state를 넘겨주고, 이동시 relplace로 할려?


//useLocation 는 네비게이터의 타겟 으로
// 경로 에대한 컴포넌트에서 import { useLocation} from "react-router-dom"  불러오고
//const location = useLocation();  로 생성뒤
// console.log(location) 찍어보아라.
    let naviegate = useNavigate();

    
    return (<>
        <h1>네비게이터의 타겟 경로로 전달</h1>
        <button onClick={() => {

            { naviegate('/main',{state:{sex:"남성"}}) }


        }}>클릭시에 네비게이터로 오픈를래스페이지로이동</button>

<h1>네비게이터의 타겟 이 아닌 경로 가서 로케이션 찍어보기</h1>
<button onClick={() => {

{ naviegate('/UseNavigateEx01') }


}}>클릭시에 네비게이터로 오픈를래스페이지로이동</button>

    </>)

}