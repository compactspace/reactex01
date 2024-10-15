const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mairiasession = require('../model/maria/mariasession')
const axios = require('axios');
const marialpool = require('../model/maria/mariadbpool');

// const createError = require('http-errors');
const cors = require("cors");
const app = express()
// const cookieParser = require("cookie-parser");

const redis = require('redis');
const schedule = require('node-schedule');

// rexp.set("myKeyByTimeout", "myValue").timeout(60000); // key will be expire in 60sec

var x;





const coolsms = require("coolsms-node-sdk").default;
const messageService = new coolsms("ENTER_YOUR_API_KEY", "ENTER_YOUR_API_SECRET");


const mainrouter = require('../routes/MainRouter')
const userrouter = require('../routes/UserRouter');
//server 파일에서 한번 세팅 해주면 다른 라우터 파일에서 req.query 나 req.body를 인식한다.!!!!!
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//appuse 의 어떤 미들웨어들은 서버 만 켜도 실행되는 것도 있다. 지금 마리아 세션 처럼
//서버만 켜도 데이터베이스에 자동으로 sessions 테이블이 생성됨 팩트 체크함
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(mairiasession.mariasession)
// app.use(cookieParser("free"));

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));





//use 로  url /login 라우팅 사용
//모든 url 요청이 /login 이라면 이걸 탐.
//모든 url 요청이 그다음 userrouter 에서 
// app.use((req, res) => {

//    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // 특정 도메인 허용
// });
app.use('/main', express.static(path.join(__dirname, '../../frontendsrc/webapp/imgs')), mainrouter);

app.use('/user', express.static(path.join(__dirname, '../../frontendsrc/webapp/imgs')), userrouter, (req, res) => {
  res.status(404).send('Sorry cant find that!');
})

app.use('/test1', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/test1.html'))
});
app.use('/test2', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/test1.html'))
});



const client = redis.createClient({ port: 6379 });

const redisconnect = async (req, res, next) => {

  const check = await client.connect();

  // console.log(check)
  next();
}

app.get('/specialdiscount', redisconnect, async (req, res) => {


  const q = await client.get("item");
  if (q <= 0 || q == null) {
    await client.disconnect();
    res.send("품절");


  } else {
    // await client.decr("item");
    await client.disconnect();
    res.send(q);
  }

})

//리엑트전ㄴ용
app.post('/specialdiscountadd', redisconnect, async (req, res) => {
  console.log("시간끌기가 먹히나");
  const already = await client.sIsMember(`sale${req.data1}`, `${req.data2}`);

  // await client.watch("item");
  if (!already) {

    await client.multi().sAdd(`sale${req.data1}`, `${req.data2}`).decr("item").exec();
    // await client.sAdd(`sale${req.data1}`, `${req.data2}`);
    // await client.expire(`sale${req.data1}`, 10);
    // await client.decr("item");

    await client.disconnect();
    res.send("noalready");
  } else {

    await client.disconnect();
    res.send("already");
  }

})


//여기서 부터는 익스프레스 스케쥴러
// 각 자리마다 초 분 시  등등 인데
// 초 분 시 까지만 알자
// * 만 있으면 매 초 매분 매시 이다.
const updateviewingcount = require('../ScheduleController/ScheduleController');
const { error } = require('console');
// schedule.scheduleJob('30 * * * * *',  (req,res)=>{ 

//   updateviewingcount.updateviewingcount();

//   });

schedule.scheduleJob('30 * * * * *', (req, res) => {

  client.disconnect();

});


app.listen(4000, async () => {
  console.log("~서버온~")


})







