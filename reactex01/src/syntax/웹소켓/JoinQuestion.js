
import { WebSocketEx01 } from '../웹소켓/WebSocketEx01';
import { useState, useEffect } from 'react';
export const JoinQuestion = () => {


    let [joinbtn, setJoinbtn] = useState(false);

    const ToJoinOnedayclass = () => {
        setJoinbtn(true);
    }

    return (<>
        {joinbtn ?
            <WebSocketEx01></WebSocketEx01>
            : <>
                <button onClick={ToJoinOnedayclass}>선생님 일대일 문의</button>
            </>}
    </>);


}