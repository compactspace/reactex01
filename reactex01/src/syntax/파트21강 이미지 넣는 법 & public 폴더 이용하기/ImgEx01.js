

//1. import 작명 from './이미지경로
import art from '../../img/art.jpg'



// 외부 호스팅 즉, 복붙, 하려는 이미지 넣기


//어디에? css 파일 이나, js 파일에

//단
// public 폴더에 있는 이미지 사용할때
// /이미지경로 만 쓰면 됨 (import 필요 없음). css 파일에서도 /이미지경로 만 쓰면 됨.
//리엑트가 내무적으로 public폴더를 뭔가 검사하는듯
export  const ImgEx01 =()=>{

return(<>    
{/* 
// pubilc 폴더에 존재하는 사진을 넣을시는 /사진이름 + import 조자 필요 없다.
// 그냥 아무폴더에 있는 사진은 넣을시는 import를 해야한다.

*/}
    <h1 style={{ width:'200px',height:'200px',backgroundImage : 'url("/main.jpg")' }}></h1>

{/* 
//일반 폴더속에 있는 이미지를 불러올시는 맨위 를 보라, import를 해와야한다.

*/}
    <h1 style={{ width:'200px',height:'200px',backgroundImage : 'url('+art+')' }}></h1>

{/* 
외부에서 제공하는 이미지는 풀경로를 복붙하여 복사한다.

*/}
    <h1 style={{width:'200px',height:'200px',backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG/1920px-%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG")'}}></h1>

    </>);
}