import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from "react";


//씨발 오류가 중첩이였다.

//1.  axios가 비동기로, 데이터를 가져오기도 전 끝날 수 있으니
// sync,와 await 키워드를 잊지 말자.

//2. 번째 오류
// 리턴값을 res 에 잘 받자. 그러면  res 자바스크립트 object 인데
// JSON.stringify 로 변환 해줘야
// 리엑트 엘리먼트로 출력이 가능하단다.
// 뭘러 씨발 에휴



export const UseQueryEx01 = () => {







    const result = useQuery({
        queryKey: ["querykey"],
        staleTime:11,
        gcTime:10,
        queryFn: async () => {
            let res = (await axios.get("http://localhost:4000/usequery")).data;
            // console.log(res);


            //밑에서 result.data 를 바로 출력하면 자바스크립트 오브젝트를 출력한다고
            // 오류가 뜨니, JSON.stringify(res) 로 제이슨화 스트링해주자.
            return JSON.stringify(res);
        }


    });

// console.log(result.isFetched)



// Object.keys(result).map((obj) => {

//     console.log(obj)

// })




//실제로 JSX 리턴부에 바로 자바스크립트 오브젝트는 출력이 불가능하다고
// 리엑트 차일드 블라블라 뜸
// let obje={x1:"x"}
return (
    <>
        {/* 게씨발 JSX 문법 족같네 출력하기 이렇게 힘드니 원 */}
        {/* 게씨발 result 의 모든 값들은 정체를 모르겠네 죄다 JSON.stringify 때려야햐나ㅔ  */}
        {/* {JSON.stringify(result.isFetched)}; */}
        {/* {`${result.staleTime}`}; */}
        {/* {`${result.isFetched}`} */}

        { `이즈로딩  ${result.isLoading}`  }
        {  ` 이즈 패치드 ${result.isFetched}`  }
      {/* { result.isFetched && `데이터가져옴`} */}
      {/* { result.data  } */}
    </>
);


}







