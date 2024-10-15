import { useEffect } from 'react'



//이 번 예제는 그냥 리액트에서 스크립트 태그로 자바스크립트 파일을 우찌 불러오는지 만 보고
// console.log 만 찍어보는 예제 입니다.
 export const NaverLogin = () => {

    // 리엑트에선 index.html 파일이 한개로 그쪽에 넣어도 되나
    //리엑트는 간지나게 
// 자바스크립트를 이용한 동적 스크립트 태그 삽입기법을 이용한다.


//반드시 개발자도구에서 스크립트 가 추가되는지만 확인
   const naverscript1= document.createElement("script");
   const naverscript2= document.createElement("script");
   const naverjquery= document.createElement("script");



   naverscript1.src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js";
   naverscript2.src="http://code.jquery.com/jquery-1.11.3.min.js";
   naverjquery.src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"

   naverscript1.async = true;
   document.head.appendChild(naverscript1);
   naverscript2.async = true;
   document.head.appendChild(naverscript2);
   naverjquery.async = true;
   document.head.appendChild(naverjquery);





 
            return(<>
            <h1>그냥 스크립트 확인용 라우터입니다.</h1>
            </>);

        


}