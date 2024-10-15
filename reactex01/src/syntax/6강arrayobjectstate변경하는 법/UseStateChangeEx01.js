import {
    useState



} from "react";


export const UseStateChangeEx01 = () => {
    // useState 함수를 활용하여 버튼을 누르면 제목이 가나다순으로 되게 만들기

    let [list, Setlist] = useState(["바", "리을", "동롸", "가", "나"]);







    return (<>

        <h1 onClick={() => {
            let deepcopy=[...list.sort()];
            Setlist(deepcopy);


        }}>
            현재 스테이트에 담긴 글제목을 가나다순으로 정렬하기
            {list}


        </h1>
    </>);
}