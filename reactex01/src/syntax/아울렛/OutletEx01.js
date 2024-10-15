import { Outlet } from 'react-router-dom'

//Outlet 은
//네스티드 라우터에서

// 분기점에서 프롭스가 아닌 컴포넌트를 던질때 사용한다.
//router2.js를 보아라.


//프롭스전달은 불가능하거나 하더라도 좆나 어려울듯 그냥 이런거구나 생각하면 될듯

export const OutletEx01 = () => {


   
    return(<>
     <>
        <h1>특정경로에 아울렛으로 컴포넌트를 끼워 넣기</h1>
       
        <Outlet >
        </Outlet>

    </>
    </>)

}