const express = require('express');
 const cookieParser = require("cookie-parser");
const app = express()
const cors = require("cors");
// 우선 팩트 쳌크함 아래 두 미들웨어 주석 처리하면 cors 에러남
//  app.use(cors({ origin: true, credentials: true }));

app.use(cookieParser("sex"));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// 쿠키 옵션 설정
const cookieConfig = {
  httpOnly: true, 
  maxAge: 1000000,
 signed: true 
};

// 쿠키 설정
app.get('/set', (req, res) => {
    console.log("하서버") 
    res.cookie('cookie', 'cookie', cookieConfig).end();
    console.log( req.signedCookies );
});

// 쿠키 확인
app.get('/get', (req, res) => {
     console.log(req)
 
});

app.listen(4000, () => {

    console.log("리엑트위한서버온")
})
