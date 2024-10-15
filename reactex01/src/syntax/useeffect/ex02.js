import React, { useEffect, useState } from 'react';

import styled from 'styled-components';


const Box = styled.div`

width: 400px;
height: 400px;
background-color: yellow;


`

export const UseEffectEx01 = () => {
  const [del, setDel] = useState(false);


  //useEffect 안에 적은 코드는 html 렌더링 이후에 동작합니다.
// 같은말로 컴포넌트가 랜더링이 되엇을시 즉 지금 파일 UseEffectEx01 컴포넌트가 랜더링 되었을때


  //=>실제로  console.log("유즈스테이트보다 빠름") 가 먼저 실행된다.
  //컴포넌트의 핵심기능은 html 렌더링이라 그거 외의 쓸데없는 기능들은 

  // useEffect안에 적으라는 소리입니다. 

  // (오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거)

  // 오늘의 숙제 페이지 안에 노란박스를 만들고, Detail 페이지 방문 2초 후에 박스가 사라지게 만들기.


  //https://velog.io/@wooooongee/Lifecycle%EA%B3%BC-useEffect-1
  useEffect(() => {
    console.log("유즈이페트는 html코드 렌더링 이후에 동작")

    //세타임아웃은 몇초뒤에~ 실행 될 함수
    setTimeout(() => {

      setDel(true);

    }, 2000)

  });
  console.log("유즈스테이트보다 빠름")

  return (
    <>
      {
        del ? null :
          <Box>

          </Box>

      }
    </>
  );
}