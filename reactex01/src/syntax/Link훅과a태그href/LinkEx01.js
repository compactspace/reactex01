import { Link } from 'react-router-dom';



//-a tag: 앱을 새로고침하면서 경로를 이동합니다.

//Link  함수 = 훅은  브라우저의 주소를 바꾸고,맞는 Route 로 화면을 변경합니다.



//실제로 실행우 비교해보면 Link훅으로 하면 새로고침이 없은데

//a태그와 herf로 이동하면 새로고침이 되면서 이동한다.
export const LinkEx01 = () => {
    return (
        <ul>
            <li>
                <Link to="/">Link 훅으로 메인화면</Link>
            </li>
            <li>
                <Link to="/openclass"> Link 훅으로 클래스열기</Link>
            </li>       

            <li>
                <a href="/">a링크로 메인화면</a>
            </li>     
            <li>
                <a href="/openclass">a링크로 오픈클래스열기</a>
            </li>    

        </ul>
    );
}