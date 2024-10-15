import { NavLink } from 'react-router-dom';


//NavLink 는 Link와 비슷하며 2가지 속성이 있다.


//리엑트 1.8 기준 그리고
//   "react-router-dom": "^6.21.2", 기준으로

// 인터넷에 떠돌아 댕기는 exact activeStyle 속성은 폐기되었다.

// exact : 그냥 적기만 하면되며 경로와 100프로 일치

//activeStyle={ {속성명 :"속성값"} }  그냥 속성 주는거 


//이제부터는 isAactive
//<NavLink> 컴포넌트에서 style 또는 className을 설정할 때
// {isActive: boolean}을 파라미터로 전달받는 함수 타입의 값을 전달함.
//아래처럼 해라.
// 일딴은 사용법을 암기해야지뭐...
// 출처: https://s-young01.tistory.com/39 [s._.young01:티스토리]
//또다른 예제
//https://velog.io/@minsu2344/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EB%A3%A8%EB%8A%94-%EA%B8%B0%EC%88%A0-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99%EC%9D%84-%EB%8B%A4%EB%A3%A8%EB%8A%94-useNavigate%EC%99%80-Link%EC%9D%98-%ED%8A%B9%EB%B3%84%ED%95%9C-%EB%B2%84%EC%A0%84-NavLink



export const LinkEx02 = () => {

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
      };


    return (
        <>
            <ul> 
                <li>
                    <NavLink to="/LinkEx02" style={({isActive})=>isActive? activeStyle : null}  className={({isActive})=>isActive? "섹스보지털":null}>Link 훅으로 메인화면</NavLink>
                </li>
                <li>
                    <NavLink to="/">Link 훅으로 메인화면</NavLink>
                </li>
                <li>
                    <NavLink to="/openclass"> Link 훅으로 클래스열기</NavLink>
                </li>

                <li>
                    <a href="/">a링크로 메인화면</a>
                </li>
                <li>
                    <a href="/openclass">a링크로 오픈클래스열기</a>
                </li>

            </ul>

            <NavLink
  to="/LinkEx02"
  activeStyle={
    {fontWeight:"bold",
    color: "red"}
  }
>
  FAQs
</NavLink>




        </>


    );
}