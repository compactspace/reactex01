const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require("cors");
const app = express()






//server 파일에서 한번 세팅 해주면 다른 라우터 파일에서 req.query 나 req.body를 인식한다.!!!!!

// app.use(bodyParser.urlencoded({ extended: true }));
// //appuse 의 어떤 미들웨어들은 서버 만 켜도 실행되는 것도 있다. 지금 마리아 세션 처럼
// //서버만 켜도 데이터베이스에 자동으로 sessions 테이블이 생성됨 팩트 체크함
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// 또이놈은 리엑트의 포트 3000 을 허용해주겠다는거임 에휴 씨발
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(  
//     "/data2.json",
//     createProxyMiddleware({
//        target: "https://www.notion.so/express-react-f945006bbf6347a29fecc70caf0c0bd0?showMoveTo=true",
//       changeOrigin: true,
//     })
//   );
// };

app.get("/data1.json", async (req,res)=>{

  const data = await axios.get('https://codingapple1.github.io/shop/data2.json');
  console.log(data.data)
res.send(JSON.stringify(data.data));
});

app.get("/data2.json", async (req,res)=>{

  const data = await axios.get('https://codingapple1.github.io/shop/data3.json');
  console.log(data.data)
res.send(JSON.stringify(data.data));
});




app.get("/axiosmain", async (req,res)=>{
  res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/test1.html'));

});



app.get("/usequery", async (req,res)=>{

let data= await axios.get("https://codingapple1.github.io/userdata.json");



 res.send(data.data);


})




app.listen(4000, async () => {
  console.log("~서버온~")


})







