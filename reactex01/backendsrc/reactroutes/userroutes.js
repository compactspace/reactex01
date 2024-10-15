const express = require('express');
const router = express.Router();
const usercontrller = require('../reactcontroller/usercontroller');
const jwt = require('jsonwebtoken');
require("dotenv").config();


let secret=process.env.secret;
// console.log(secret)
router.get("/", async (req, res) => {
    // console.log("라우터 매핑 성공")
    //const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=http://localhost:4000/naver`;
    let accesscode = req.query.code;
     console.log(accesscode);


  let obj = await usercontrller.NaverLogin(accesscode,req,res);

  // 하씨발.. 사실 값 확인 기회원은 필요 없을뜻 씨..
  //  console.log("값 확인 기회원?");
  //  console.log(check)

   let {code}=req.query;
   let {userId} =obj
  //  console.log("네이버가 고유하게 주는 아이디");
  // console.log(userId)

   const accessToken =  jwt.sign({token:code} ,secret,{ expiresIn: '100m' });
  //  console.log("accessToken값은");
  //  console.log(accessToken);
   res.send({ accessToken,userId });

});



router.get("/rest", async (req,res)=>{
//console.log(`라우터 매핑확인 클래스아이디 ${req.query.openclass_id} 이고, 각요일 선택값 ${req.query.eacopenday}`)

let  result= await usercontrller.rest(req,res);
console.log(" 라우터 리턴 직전값"+result);
console.log(result)
return res.send(result);

});

router.get('/reserve', async (req,res)=>{

let  result= await usercontrller.Reserve(req,res);
// express deprecated res.send(status): Use res.sendStatus(status) instead
// res.send 는 객체급만 가능한데 일반 숫자 자료형이 들어가면 위와 같은 오류가 떠서 수정 {result}로 수정해준것임
  res.send(result);
})






router.get("/openclassinfo", async(req,res)=>{

  console.log("/openclassinfo 라우터 매핑 확인")
  let resultobj=await usercontrller.openclassinfo(req,res);


})








//다른 메서드 만드는 중으로 주석처리
// router.get("/reservedmodal", async(req,res)=>{
//   let resultobj=await usercontrller.reservedmodal(req,res);
//   //
//   console.log(resultobj)
//   delete resultobj.reserved_num;
//   console.log(resultobj)
//   return res.send(resultobj); 
// })


router.get("/reivew", async(req,res)=>{

  await usercontrller.review(req,res);

})


router.get("/nextreivew",async(req,res)=>{

  await usercontrller.nextreview(req,res);

})


router.get('/backreivew', async (req,res)=>{

  await usercontrller.backreivew(req,res);

})


router.post("/payment", async(req,res)=>{
  await usercontrller.payment(req,res);
})


router.post("/paycancle", async(req,res)=>{
  await usercontrller.paycancle(req,res);
})




router.post('/mypage',async(req,res)=>{
  await usercontrller.mypage(req,res);
})


router.get('/checkreceipt',async(req,res)=>{

   await usercontrller.checkreceipt(req,res);
})


router.post("/writingreview",async(req,res)=>{
  console.log(req.body);

  await usercontrller.writingreview(req,res);

})






module.exports = router




















// router.get("/", async (req, res) => {
//     console.log("라우터 매핑 성공")
//     //const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=http://localhost:4000/naver`;
//     let accesscode = req.query.code;
//     console.log(accesscode)
//     console.log(req.query)
//     let { code } = req.query;
//     let { state } = req.query;
//     let { error } = req.query;
//     //console.log(`${code}  ${state}  에러는 ${error} `);
//     //즉 로그인 실패
//     if (error != null || error != undefined) {
        
//     }
//     else {
//     console.log("엘스문속의 컨트롤러 네이버로그인 메서드 호출")
//         usercontrller.NaverLogin(req,res);
        

//     }
// });

// module.exports = router