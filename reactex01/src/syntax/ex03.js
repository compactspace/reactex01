import React, { useState } from "react";
import { useEffect } from "react";
const Ex03 = () => {
    const [up, setUp] = useState(0);
    const [down, setDown] = useState(100);

    useEffect(() => {
        console.log("렌더링될때마다 호출됨 이up->>" + up)
    });

    useEffect(() => {
        console.log("최초랜더링시에만 호출이 된다. up->>" + up)

    }, []);

    useEffect(() => {
        console.log("state 나 props 이 업데이트 될때마다 호출이 된다. up->>" + up)     
    }, [up]);


    useEffect(() => {
        console.log("마툰트" + up);

        return () => {
            console.log("마운트후 state값이 확정되어 화면에 나올시 호출된다.=state종료, 가 한번은 되고 state값이 변경시"+"\n"+"전단계=죽어버린 ->up" + up);
        }
    }, [up]);


    return (
        <div>
            <p>{up}</p>
            <p>{down}</p>
            <button onClick={() => { setUp(up + 1) }}>+1</button>
            <button onClick={() => { setDown(down + 1) }}>-1</button>
        </div>
    )


};

export default Ex03;