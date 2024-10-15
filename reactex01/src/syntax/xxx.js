// import React, { useState ,useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import './nav.css'

// function Nav(check,afterlogout) {
//   // const key = localStorage.getItem("key") 


//   console.log("Nav 컴포넌트 호출+새로고침");
//   const [loginave, setLoginave] = useState(false);
  
//   console.log("왓")
//   console.log(check.check)
//   console.log(afterlogout)
//   // console.log(props.name === "oklogin")

// // console.log(loginave);


//   // useEffect(()=>{

//   //   return  setLoginave(true)

//   // },[loginave])
  
//   // useEffect(()=>{

//   //   if ( props.name === null) {
//   //     setLoginave(false)
//   //   } else if (props.name === "oklogin") {
//   //     setLoginave(true)
      
//   //   }

//   // },[])


  

//   return (
// <div>

  
//     {check.check  ?
//     <div>
//      <Link to="/main">
//      <div class="mainhome"><button>메인 화면으로</button></div>
//    </Link>

        
// <Link to="http://localhost:4000/cookie">
//      <div class="product"><button>쿠키확인용</button></div> </Link>
//      <Link to="http://localhost:4000/cookie">
//      <div class="product"><button>장바구니</button></div> </Link> 
   
//      </div>
//      :

     
//      <div>
//      <Link to="/main">
//      <div class="mainhome"><button>메인 화면으로</button></div>
//    </Link>

// <Link to="/login">
// <div class="login">
// <button>로그인</button>
// </div>
// </Link>        
   
// <Link to="/loginform">
// <div class="login">
// <button>로그인폼으로</button>
// </div>
// </Link>        




//      </div>
//   }

// </div>


//     // <div class="navdiv">
//     //   <Link to="/">
//     //     <div class="mainhome"><button>메인 화면으로</button></div>
//     //   </Link>


//     //   <Link to="/login">
//     //     <div class="login">
//     //     <button>로그인</button>
//     //     </div>
//     //   </Link>


//     //   <Link to="http://localhost:4000/cookie">
//     //     <div class="product"><button>쿠키확인용</button></div> </Link>
//     // </div>
//   );
// }

// export default Nav;
