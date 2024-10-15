
import axios from "axios";
import '../../src/login.css'
import  {Mainpage}  from "../pages/Mainpage";
import React, { useState, useEffect, useRef} from "react";
import styled,{css} from "styled-components";
import {useMediaQuery} from 'react-responsive'
import {useNavigate} from 'react-router-dom'
import {Nav} from '../nav/nav'
import {MainBody} from '../body/mainbody'
import {Footer} from '../footer/footer'
import {Experiencefooter} from'../footer/experiencefooter.js'
import {ProductBody} from '../body/productbody'

import  StarRating , {Navforproduct} from '../nav/navforproduct'

axios.defaults.withCredentials = true;

export const Login = function () {
    console.log("로그인 컴포넌트 매핑확인")

    const navigate=useNavigate();

    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);
        
    const key = localStorage.getItem("key")  
    const [islogin, setIslogin] = useState(false)
    
    const [afterlogout, setAfterlogout] = useState(false);

    // 또 훅이다. 
    // const [cookies, setCookie, removeCookie] = useCookies('');
    // 그냥 인라인 레벨로 이벤트 함수를 익명으로 적고 여기서 함수를 선언함.
    const changedId = (e) => {
        // console.log(e);
        //이벤트가 매칭시에 state를 setter로 재 초기화해둠
        setId(e.target.value);
    }

    const changedPassword = (e) => {
        // console.log(e);
        //이벤트가 매칭시에 state를 setter로 재 초기화해둠
        setPassword(e.target.value);
    }

    useEffect(() => {
       
        if (key === null) { 
            console.log("쿠키키록 삭제") 
    } else if (key === "20") {
        console.log("키값 일치")
        setIslogin(true) 
        console.log(islogin)
       }

        return () => {
        
            console.log("죽어있던값입니다.")
            if (islogin === true) {
                console.log("새로고침")
                setIslogin(false)

            }
            
        }
    }, [islogin]);    

    //흠... 모르겠네
    // axios.get 는
    //데이터를 보내려면 두번째 매개인자는 null 로 하자.
    //그리고 params key 로 해야 서버 단에서 req의 query객체에 담김
    // body는 씹힌다.
    

    
    const Logingo = (e) => {

        axios.post('http://localhost:4000/user/login', null, {
            params: {
                "id": id,
                "password": password
            }
            //콜백의 매개인자는 서버로 부터 받은 거며
            // 데이터는 data 를 key 가진다.
            //즉 res 이름은 자유이고 data 는 key 이다!!
        }, {
            withCredentials: true,
        }).then((res) => {
            setIslogin(true);
            localStorage.setItem("key", "20");
            navigate('/cookieManager');  
        
            // console.log("리엑트속 res스는")
            // console.log(res)   
            // 불완전 하지만 우선 이제 쿠키가 담겨있긴함
            //게 씨발 범인을 찾았다.,.!! setCokie 때문에 강제로 쿠키가 object object 언디피니드 가 또 떳던거임 
            //setCookie(res)
        })


    }


  
    return (   
        <div class="all">
<div class="divwrapper">
	<div class="alldivwrapper">
		<div class="imgdiv">		

		</div>
		<div id="loginformwrapper">
            <span>Login </span>

<form class="loginform container" action="/user/login" method="post">
    <div class="iddiv">
        <h3>아이디</h3>
   
        <input type="text" class="idinput" placeholder="ID" id="id"
            name="id" value={id} onChange={changedId}></input>
    </div>
    <div class="passworddiv">
        <h3>비밀번호</h3>
 
        <input type="password" class="passwordinput" placeholder="Password"
            id="password" name="password" value={password} onChange={changedPassword}></input>
    </div>
    


    <div class="login_membershipdivwrapper">
     
        <button type="button" onClick={Logingo}>로그인</button>
      
        <div class="membershipdiv" type="button"
     
            href='/join'><a  href='/join'>회원가입</a></div>
      
        <div class="kakaologindiv" type="button"
            onclick="javascript:location.href='phonesms.jsp?id=핸드폰로그인'">핸드폰로그인</div>
        <div class="naverlogindiv">
            <button type="button" id="naver">네이버로그인</button>
        </div>
       
        
    
        
<div class="gohmoe" onclick="javascript:location.href='worklist.jsp'">
    <img id='gohmoeicon' src="./img_icon/homeicon.png"></img></div>
    </div>
</form>

		</div>
	</div>
</div>
</div>
    )
}// Login 컴포넌트 종료~


// 회원가입 컴포넌트 시작
export const Join = function () {



    return(<><h1>어휴 만들어둔적이없네 ㅅㅂ</h1></>)
    
    
}// 회원가입 컴포넌트 종료~

//게시판 컴포시작

export const Board = ()=>{

    axios.get("http://localhost:4000/user/board");

return (<><h1>하하씨바.</h1></>)

}


//게시판 컴포종료



export  const Logout= ()=>{
console.log("로그아웃 컴포넌트호출")
    const [iscookie, setIscookie]=useState(false)
    
    axios.get('http://localhost:4000/user/logout').then((res) => {
        console.log("로그아웃성공")
        setIscookie(false)
        localStorage.removeItem("key"); 

})

return   (<>
 <Nav iscookie={iscookie} /> 
<MainBody />
<Footer/></>)

}



export   const  Firstproduct= ()=>{
//  const navheight=useRef()
    
    const [navheight, setNavheight]=useState();
    const [img,  setImg]=useState();
    const [proinfo,  setProinfo]=useState();  
    let check = localStorage.getItem("key");

const navheightset=(number)=>{
   
     setNavheight(number);
   console.log(number)
}



useEffect(()=>{
   
    axios({
           method:'GET',
           url:"http://localhost:4000/user/getfirstproduct"        
       })
       .then((res) => {

    // setImg(res.data)

    setProinfo(res.data)

       })
       .catch(e => {
           console.log(`error === ${e}`)
       })
   
   
   },[])






if(proinfo!=null){
    console.log("널이아니면 ProductBody 컴포넌트를 호출해라잉")    
    


    return   (
   <>
   {check==null? <>
    <Navforproduct  navheightset={navheightset} ></Navforproduct>
    <ProductBody prevent={false} firstproduct={proinfo} navheight={navheight}></ProductBody>
   </>
     : <>
<Navforproduct iscookie={true} navheightset={navheightset} ></Navforproduct>
    <ProductBody prevent={false} firstproduct={proinfo} navheight={navheight}></ProductBody>    
     </>}
   
   </>)
   ;
}




}
 


// 상위컴포 테스트
export const Reviews = props => {
    const [star, setStar] = useState('');
    
    const getStarRating = num => {
        console.log("num->>>"+num)
      setStar(num);
    };
    
    return (
        <StarRating 
          getStarRating={getStarRating} 
          star={star} 
      />
    );
  };









const Bodywrapper=styled.div`
display: flex;
flex-direction: column;
height:${(props)=>{if(props.bodyheight!=null){return props.bodyheight }}}px;
${(props)=>props.match? css`

height:${(props)=>{if(props.bodyheight!=null){return (props.bodyheight-(props.bodyheight/5)) }}}px;

`:css``}

`

const Row1=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height:17%;


text-align: center;
`
const Row1Col1=styled.h1`
margin-top: 0px;
padding-top:40px;
margin-bottom: 0px;
`
const Row1Col2=styled.p`
color: #697278;
    padding-top:10px;
    font-family: Kia Signature Light,Arial,sans-serif,Hevetica;

    font-size:${(props)=>{if(props.match){return 15}else{ return 20}} }px;

    font-weight: 400;
    margin-bottom: 0px;
    margin-top: 0px;


`


const Row2=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height:85%;
`
const Row2Col1=styled.div`
height: 60%;
display: flex;
flex-direction: column;
align-items: center;
margin-left: auto;
margin-right: auto;
width:${(props)=>{if(props.match){return 90}else{ return 60}} }%;
background-color: #f8f8f8;

`

const Row2Col1Row1=styled.div`
height: 50%;
width: 60%;
background-color: wheat;
width:${(props)=>{if(props.match){return 90}else{ return 60}} }%;
`

const Row2Col1Row1Col1=styled.div`
padding-top: 20%;
height: 30%;
text-align: center;
    display: flex;
    justify-content: center;

`




const Row2Col1Row2=styled.div`
height: 50%;
width: 60%;

background-color: gray;
`
const Atage=styled.a`

width:40%;

height:${(props)=>{if(props.match){return 10}else{ return 20}} }px;
padding: 10px 10px;
margin-left: 2px;
margin-right: 2px;
border: 1px solid black;
background-color: white;
display: inline-block;
`




  export const Experience=()=>{   
    const ismatchcheck = useMediaQuery({ query: '(max-width:500px)' })
    const [match,setMatch]=useState(false)
    const [navheight, setNavheight]=useState();  
    const [proinfo,  setProinfo]=useState(); 
    const [bodyheight, setBodyheight]=useState() 
    let check = localStorage.getItem("key");

    console.log(window.innerHeight);
    console.log(navheight)




// useref는 리턴문이 끝난후 만들어진 DOM을 참조하게 되어. 
// 어쩔수 없이 하위 컴포넌트에서 역으로 받아와 세팅하자.
const navheightset=(number)=>{   
    setNavheight(number); 
}

useEffect(()=>{
 if(navheight!=null){
    let x=window.innerHeight-navheight;
     setBodyheight(x);  
}   

},[navheight])

useEffect(()=>{

    if(ismatchcheck){
        setMatch(true);
    }else{
        setMatch(false);
    
    }

})






    return (
    <>
 
   {check==null? <>
    <Navforproduct navheightset={navheightset}  ></Navforproduct>
    <Bodywrapper bodyheight={bodyheight} match={match}>
<Row1 classname='row1'>
<Row1Col1>체험신청</Row1Col1>
<Row1Col2 match={match}>일반 학원같은 등록제수업이 아닌 체험신청입니다. 비용이 많이들어가는 미술도구를 제공해드립니다.</Row1Col2>    
</Row1>
<Row2 classname='row2'>
<Row2Col1 match={match}>
<Row2Col1Row1 classname='Row2Col1Row1' match={match}>
    <h1 style={{textAlign:"center", marginBottom:"0px"}}>하하하</h1>
    <Row2Col1Row1Col1><Atage href='/goreserve' match={match}>예약</Atage>
<Atage match={match}>Q&A</Atage>
</Row2Col1Row1Col1>

</Row2Col1Row1>
<Row2Col1Row2>

</Row2Col1Row2>

</Row2Col1>

</Row2>
    </Bodywrapper>
  <Experiencefooter classname='bodyfooter' match={match}/>

   </>
     : <>
<Navforproduct   iscookie={true} navheightset={navheightset} ></Navforproduct>
<Bodywrapper bodyheight={bodyheight} >
<Row1 classname='row1'>
<Row1Col1>체험신청</Row1Col1>
<Row1Col2>일반 학원같은 등록제수업이 아닌 체험신청입니다. 비용이 많이들어가는 미술도구를 제공해드립니다.</Row1Col2>   

</Row1>
<Row2 classname='row2'>
<Row2Col1 match={match}>
<Row2Col1Row1 classname='Row2Col1Row1' match={match}>
    <h1 style={{textAlign:"center", marginBottom:"0px"}}>하하하</h1>
<Row2Col1Row1Col1><Atage href='/goreserve' match={match}>신청</Atage>
<Atage match={match}>Q&A</Atage>
</Row2Col1Row1Col1>

</Row2Col1Row1>
<Row2Col1Row2>


</Row2Col1Row2>
</Row2Col1>
</Row2>

</Bodywrapper>
<Experiencefooter classname='bodyfooter' match={match}/>
     </>}
   

    </>
    
    )
    
    }






    
// export   const  Firstproduct2= ()=>{
  
//     const [testdata, setData]=useState();

// useEffect(()=>{

//     axios.get('http://localhost:4000/user/getboad/1', null, {  

// }, {
//     withCredentials: true,
// }).then( (res)=>{
//     console.log("렌더링 될때마다 실행");
//     console.log(res)
//     setData(res)
// })


// })
// }

// export   const  Firstproduct3= ()=>{  
//     const [testdata, setData]=useState();
//     axios.get('http://localhost:4000/user/getboad/1', null, {  
              
// }, {
//     withCredentials: true,
// }).then( (res)=>{
//     console.log("렌더링 될때마다 실행");
//     console.log(res)
//     setData(res)
// })
// return (<><h1>씨발...</h1></>)
// }



//이건 미리보기 같은거 사용할때 하면 좋을듯//
// export   const  미리보기= ()=>{
    // const [img,  setImg]=useState();
   
// useEffect(()=>{

//     axios.get('http://localhost:4000/user/getfirstproduct', null, {   responseType:'blob'
        
// }, {
//     withCredentials: true,
// }).then( (res)=>{
    
//     const url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] } ));
//     // setData(res.data)
//     // setData(url)
//     console.log(url)
//   console.log(res.data)
// })
// },[])



// let url = 'http://localhost:4000/user/getfirstproduct';
// let xhr = new XMLHttpRequest();
// useEffect(()=>{
//     xhr.open('GET', url, true);

// xhr.responseType = 'blob'; // 핵심
// xhr.send(); 
// xhr.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200){
//         let url = window.URL || window.webkitURL;
//         let imgsrc = url.createObjectURL(this.response);
//         console.log(imgsrc)
//         setImg(imgsrc);
//     }
// }
// },[])


// useEffect(()=>{

//  axios({
//         method:'GET',
//         url:"http://localhost:4000/user/getfirstproduct",
//         responseType:"Blob",
//     })
//     .then((res) => {
//  console.log("리엑트에서 받은거는?");
//  console.log(res.data)
        
//       const url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] } ));
// //  console.log(url)
//  setImg(url)
//     })
//     .catch(e => {
//         console.log(`error === ${e}`)
//     })


// },[])






// if(img!=null){
//     console.log("널이아니면 ProductBody 컴포넌트를 호출해라잉")

 
    

//     // return   (<ProductBody prevent={false} firstproduct={testdata}></ProductBody>);
// }

// return (
//     <>
//     <h1>하하하</h1>
//     <img src={img}></img>
//    </>
// )



// }
 

//이건 미리보기 종료//

   
  
  
   




    
    