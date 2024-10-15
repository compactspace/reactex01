
import react, { useEffect } from 'react'




export const NaverLogin3 = () => {


   
console.log(process.env)



    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디
    const REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI // Callback URL
    const STATE = "flase";

console.log(NAVER_CLIENT_ID)
console.log(REDIRECT_URI)
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=http://localhost:3000/NaverloginCompleteEx01`;
  
    const NaverLogin = () => {
     window.location.href = NAVER_AUTH_URL;




    };
  





    return <button onClick={NaverLogin}>네이버 로그인</button>;
}
// NAVER_AUTH_URL url 타고 로그인 성공후
// 우리가 작성한 콜백(리다이렉트) url 에 code값과 state 값이 URL 문자열로 전송됩니다. code 값은
// 접근 토근  발급 요청시에 사용됨

//https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=jyvqXeaVOVmV&client_secret=527300A0_COq1_XV33cf&code=EIc5bFrl4RibFls1&state=9kgsGTfH4j7IyAkg 
// 에 접근 토근을 요청하며 이제 이걸 백엔드에서 처리하고
//if else 속에서 또
// 유저 프로필을 호출하는 url을 하고
// 또 그 상태에서 데이터베이스 삽입을 시도해보자.



    // https://nid.naver.com/oauth2.0/authorize?
    // response_type=code
    // &client_id=oIB_pADeJKcErdJaXoqA
    // &state=STATE_STRING
    // &redirect_uri=http://localhost:3000/NaverLoing3


    //이 url 에서 접근 토큰을 준다.
    //AAAAPC_TTDv9Es6ROEObDFqDK1d1tadl_p_1JIunP_7s9SwYWi1dkf6SH1DBSfnFod1WPpiuqQXdx1L8IYYLk2AGupI
    // https://nid.naver.com/oauth2.0/token?
    // grant_type=authorization_code
    // &client_id=oIB_pADeJKcErdJaXoqA
    // &client_secret=xhm_mwBHDx
    // &code=yEHzt7eM0AWv1D1eEY
    // &state=STATE_STRING


    // 공식문서 씨발놈들아
    // 니들이 적은 순서가 아니라 그 반대로다

    //병신들이 또 curl 요청으로 해놨네
    // curl  -XGET "https://openapi.naver.com/v1/nid/me" \
    //  -H "Authorization:
    //  Bearer AAAAPIuf0L+AAAAPC_TTDv9Es6ROEObDFqDK1d1tadl_p_1JIunP_7s9SwYWi1dkf6SH1DBSfnFod1WPpiuqQXdx1L8IYYLk2AGupI="
    //// 가 아니라 위치를 바꿔야한다.
    // curl  -H "Authorization: Bearer AAAAPIuf0L+AAAAPC_TTDv9Es6ROEObDFqDK1d1tadl_p_1JIunP_7s9SwYWi1dkf6SH1DBSfnFod1WPpiuqQXdx1L8IYYLk2AGupI="
    // -XGET "https://openapi.naver.com/v1/nid/me" \

    //AAAAPC_TTDv9Es6ROEObDFqDK1d1tadl_p_1JIunP_7s9SwYWi1dkf6SH1DBSfnFod1WPpiuqQXdx1L8IYYLk2AGupI

