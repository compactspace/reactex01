import axios from "axios";

import { useQuery ,useQueryClient} from '@tanstack/react-query'


import React, { useEffect } from "react";

export const UseQueryEx02 = (props) => {

//아가리 아닌 팩트 체크
//  useQuery 훅은 최초 컴포넌트 마운트 =즉 실행
// 알트탭으로 왓다리 갓다리 아니면 대른 텝 이동 등
// 일어 날씨 useQuery 쿼리 훅속의 함수를 실행해줌
// 여기선 axios가 됨

//병신 개발자 들이 또 이상한 용어쓰는데

//stale 은 신선도라고 하며

// staleTime: 옵션은 신선도의 유지 이다.


// 또 병신용어 데이터패칭

// 말그대로 데이터 가져 오는건데
// 위에서 신선도가 지나면, 리페칭이 된다. 어떻게? 알트탭 왓다리 갓다리 등으로


// 아갈 무새드리 캐싱이구요~ 지랄 떠는데 쥐좆도 않먹히며

//우선 지금은 gcTime 타임으로 용어가 바뀌었다고 한다.
//  gcTime: 0, 는 아갈무새들이 캐싱 어쩌고 하는다 쥐좆도 않먹힌다...


//또다른 제이슨 자료제공 사이트
//https://jsonplaceholder.typicode.com/users

const client=useQueryClient();



const result = useQuery(
    {
        queryKey: ["querykey1"],       
    
       

        queryFn: async () => {
      
            let    res = (await axios.get("http://localhost:4000/usequery")).data;
           
           

         
            return JSON.stringify(res);
        }


    }
   
);

   


// client.removeQueries();
console.log(` 리졸트는 ${JSON.stringify(result)}`) 

console.log(` \ 이즈 패칭? ${result.isFetching} 그다음 이즈로딩? ${result.isLoading} 그다음 데이터 그다음 이즈로딩? ${result.data}`)

 
// client.removeQueries();

    return (
        <>
            {`${result.isLoading}`}
         
           
            {result.isLoading && (
    <div>
   <h1>아갈무새로딩</h1>
    </div>
  )}






            {/* {`${result.isFetching}`} */}

            {result.isFetching && (
    <div>
   <h1>sex</h1>
    </div>
  )}
        </>
    );


}







