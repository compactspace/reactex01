import React, { useState } from "react";
import styled, { css } from 'styled-components'
import { PropsModalEx01 } from './propsModalEx01'



//사이트를 참조하자 코딩애플 누가 올려논거임
//https://velog.io/@changonna/11.-input-1-%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80-%EC%9E%85%EB%A0%A5%ED%95%9C-%EA%B8%80-%EB%8B%A4%EB%A3%A8%EA%B8%B0%EB%93%B1%EB%A1%9D-%EC%82%AD%EC%A0%9C

//기존에 있던 코드 인데요

//사용자의 입력을 받아 데이터를 추가하는 방법을 추가해보도록하자.


//1.먼저 사용자가 inpute 태그를 통애 작성하면 state에 저장 시키고

//2. 그다음 추가하기 누르면 실제로 추가가 되도록 해보자.



//두번째 숙제
//사용자가 입력한 글을 저장해라 스테이트에

export const EventEx01 = () => {

    const [입력값, 입력값변경] = useState();

    const [index, setIndex] = useState(0);
    const [병신좋아요, 좋아요구걸] = useState([0, 0, 0])
    const [modal, setModal] = useState(false);

    const [title, setTitle] = useState(["안양맛집", "영등포맛집", "민지맛집"]);







    const Titles = title.map((obj, index) => {

        return (<>
            <div className="title" key={index}>
                <h1 onClick={() => {
                    setIndex(index);
                    if (modal == false) {
                        setModal(true)
                    } else {
                        setModal(false)
                    }

                }}>제목 :{`${obj}`}</h1>

                <span onClick={() => {

                    let deep = [...병신좋아요];
                    deep[index] += 1;
                    좋아요구걸(deep);
                }}>좋아요 구걸해라 병신아 :{`${병신좋아요[index]}`}</span>
                <button type='button' key={index} onClick={(e) => {

                    let copy = [...title];
                    copy.splice(index, 1);  // arr.splice : index 번째부터 1개만큼 삭제.
                    setTitle(copy);


                }}>글삭제버튼씨발</button>
            </div>

        </>);
    })

    return (<>
        {Titles}
        <h1>글추가해보기</h1>
        <input onChange={(e) => {
            let 글내용 = e.target.value;
            console.log(글내용)
            입력값변경(글내용);
        }}></input><button type="button" onClick={() => {

            //그냥 순서대로 밑에 쌓이는경우
            // if (입력값 != null) {
            //     //일차원 배열의 깊은 복사
            //     let newtitle = [...title];
            //     let new병신좋아요 = [...병신좋아요];
            //     newtitle.push(입력값);
            //     new병신좋아요.push(0)
            //     좋아요구걸(new병신좋아요);
            //     setTitle(newtitle);

            // }

//맨위 상단으로 올리는경우
            if (입력값 != null) {
                //일차원 배열의 깊은 복사
                let newtitle = [...title];
                let new병신좋아요 = [...병신좋아요];
                newtitle.unshift(입력값);
                new병신좋아요.push(0)
                좋아요구걸(new병신좋아요);
                setTitle(newtitle);

            }


        }}>등록</button>




        {/* 씨발 set함수도 프롭스로 넘길수있네?? */}
        {modal ? <PropsModalEx01 index={index} titlenum={title} title={title} setTitle={setTitle}></PropsModalEx01> : null}

    </>);

}





export const PropsEx02 = () => {


    return (<><h1>게씨발</h1></>)


}