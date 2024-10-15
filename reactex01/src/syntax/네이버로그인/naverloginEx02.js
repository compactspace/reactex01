import React  ,{useEffect}from "react";

export const NaverLogin2=()=>{

 // 게씨발 
//  naverscript2.src="http://code.jquery.com/jquery-1.11.3.min.js"; 스크립트에서 가져오는 객체이다.

//  const { naver } = window 는  window 객체의 구조분해 할당이고, console.log 찍어보면 
// LoginWithNaverId 메소드 가지고 있음
const { naver } = window
  
	const NAVER_CLIENT_ID = "oIB_pADeJKcErdJaXoqA"
	const NAVER_CALLBACK_URL = "http://localhost:3000/NaverLoing"

    console.log(naver)
	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,

          // 팝업창으로 로그인을 진행할 것인지?           
			isPopup: false,
          // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()   
	}


useEffect(()=>{

    initializeNaverLogin();
},[])




	return (
        <div id="naverIdLogin" ></div>)
}
