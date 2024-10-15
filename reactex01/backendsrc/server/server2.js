const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mairiasession = require('../model/maria/mariasession')
const marialpool = require('../model/maria/mariadbpool');
const axios = require('axios');

// const createError = require('http-errors');
const cors = require("cors");
const app = express()
// const cookieParser = require("cookie-parser");

const redis = require('redis');
const schedule = require('node-schedule');

// rexp.set("myKeyByTimeout", "myValue").timeout(60000); // key will be expire in 60sec

var x;


const client = redis.createClient({ port: 6379 });

const redisconnect = async (req, res, next) => {

  const check = await client.connect();

  // console.log(check)
  next();
}

//특가 상품은 그냥 여기서 처리하자.

// app.use(redisconnect, async ()=>{
//   await client.hIncrBy("sexcount", "sex", 50);
//  await client.hGet('sexcount', 'sex');

//   await client.disconnect();
// })



app.get('/a',(req,res)=>{
  // console.log(req)
  for(key in req){
       console.log(key);
  }
})



//미들웨어임
// app.get('/university/turkey', redisconnect, async (req, res) => {


//   const chekcredisdata = await client.get("testCashing")

//   console.log(chekcredisdata);
//   if (chekcredisdata == null) {
//     try {
//       const universityInfo = await axios.get('http://universities.hipolabs.com/search?name=university&country=turkey');

//       // response에서 data 가져오기
//       const universityData = universityInfo.data;
//       await client.set("testCashing", JSON.stringify(universityData))
//       // expire 의 숫자 옵션은 초 단위임 10 이면 10초 이렇게
//       //만료이자 redis에서 자동 삭제가 된다.
//       await client.expire("testCashing", 2);
//       await client.disconnect();
//       return res.json(universityData);
//     } catch (error) {

//       console.error(error);
//       return res.status(500).json(error);
//     }
//   } else {

//     await client.disconnect();
//     return res.send(chekcredisdata)
//   }

// }

// );




// app.get('/uptest/1', redisconnect, async (req, res) => {

//   if (true) {
//     try {
//       await client.hIncrBy("sexcount", "sex", 1)
//       x = await client.hGet('sexcount', 'sex')

//       await client.disconnect();
//       return res.send("하하하증가");
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json(error);
//     }
//   } else {
//     await client.disconnect();
//     return res.send(chekcredisdata)
//   }

// }

// );








// app.get('/testtime2', async (req,res)=>{
//   run();

//   await  setVal("test","tost")
//    test=  await getVal("test")
//   const albumId = req.query.albumId
//   console.log(albumId);
//   const {data} = await axios.get(
//     'https://jsonplaceholder.typicode.com/photos',
//     {params : {albumId}},
//     )

// res.json(data)
// })







// async function setVal(key, value) {
//   await client.set(key, value)
// }

// async function getVal(key) {
//   return await client.get(key)
// }










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



// app.get('/specialdiscount', redisconnect, async (req, res) => {


//   const q = await client.get("item");
//   if (q <=0 || q == null) {
//     await client.disconnect();
//     res.send("품절");


//   } else {
//     // await client.decr("item");
//     await client.disconnect();
//     res.send(q);
//   }

// })


//리엑트전ㄴ용
// app.post('/specialdiscountadd', redisconnect, async (req, res) => {
//   // console.log(req.query);
//   const already = await client.sIsMember(`sale${req.data1}`, `${req.data2}`);
//   await client.watch("item");
//   if (!already) {
    
//     await client.multi().sAdd(`sale${req.data1}`, `${req.data2}`).decr("item").exec();
//     // await client.sAdd(`sale${req.data1}`, `${req.data2}`);
//     // await client.expire(`sale${req.data1}`, 10);
//     // await client.decr("item");

//     await client.disconnect();
//     res.send("noalready");
//   } else {

//     await client.disconnect();
//     res.send("already");
//   }

// })
//포스트맨+리엑트+ 유령읽기 테스트용
app.get('/testspecialdiscount', redisconnect, async (req, res) => {
  

  const q = await client.get("item");
  console.log("유령읽기 실패/_>>>"+q);
  await client.disconnect();
  res.send("실패");
})


//포스트맨+리엑트 전용
//app.post('/specialdiscountadd/:data1/:data2'
app.get('/specialdiscountadd', redisconnect, async (req, res) => {
  // console.log("req.params.data1->>"+req.query.data1);
  // console.log("req.params.data2->>"+req.query.data2);
  const con=  await marialpool.pool2.getConnection();
  const sql2="select * from testq";
  const excutequery2 = await con.query(sql2);  
  const sql="update testq set quana=?";
  const value=excutequery2[0][0].quana-1;
  const excutequery = await con.query(sql,value);
try{
  await client.watch("item");
  const already = await client.sIsMember(`${value}`, `${value}`);
  console.log("!already->>>"+!already);
  console.log("아이템->>>"+value);
  if (!already) {
   // console.log(await client.get("item"));
 //  console.log(await client.decr("item"));
 //  await client.multi().sAdd(`${req.params.data1}`, `${req.params.data2}`).decr("item").exec();

  await client.multi().sAdd(`${value}`, `${value}`).decr("item").exec();
 // await client.sAdd(`${value}`, `${value}`);
 // await client.decr("item");
 
  
 //   // await client.decr("item");

   await client.disconnect();
   return  res.send("noalready");
 } else {

 }

}catch(err){
  

  console.log("에러")
 

}
await client.disconnect();
return  res.send("already");
}
)


app.get('/specialdiscountadd2', redisconnect, async (req, res) => {
 
  await client.incr("item");

  await client.disconnect();
  return  res.send("already");

})







// // 유령읽이를 위한 동시성 테스트 전용
// app.get("/testaddcart", async(req,res)=>{
//   const con=  await marialpool.pool2.getConnection();
//   const sql="select * from testq";
//   const excutequery = await con.query(sql);
//   console.log("유령읽기값이 나와야함->>"+excutequery[0][0].quana);
//   con.release();
//   res.send("답변");
// })


// //유령 읽기를 통한 잘못된 업데이트 동시성 테스트 전용
// app.get("/testminuscart", async(req,res)=>{
//   // console.log("매핑확인용");
//   const con=  await marialpool.pool2.getConnection();
//   const sql2="select * from testq";
//   const excutequery2 = await con.query(sql2);  
//   const sql="update testq set quana=?";
//   const value=excutequery2[0][0].quana-1;
//   const excutequery = await con.query(sql,value);
 
//   con.release();
//   res.send("답변");
 
// })









//리엑딴에서 axios get 요청은 req.query 에 담김 
//  app.get('/testlogin', (req,res)=>{

//  console.log(req)

// });

// app.post('/testlogin', (req,res)=>{
//    console.log("악시오스 포스트매핑확인")
//    console.log(req.body)
//    console.log(req.params)
//    console.log(req.query)
//   });

// app.get('/cookie', (req,res)=>{
//     console.log("헤더에쿠키확인용")   
//   console.log(req);

// });



//  app.use('/testcookie', mairiasession.mariasession,(req,res)=>{

//    console.log(req.session);
//    req.session.age="1"
//    req.session.save((err) => {   
//       res.sendFile(path.join(__dirname,'../../frontendsrc/webapp/views/testcookie.html'))

//   })  
// });{


//여기서 부터는 익스프레스 스케쥴러
// 각 자리마다 초 분 시  등등 인데
// 초 분 시 까지만 알자
// * 만 있으면 매 초 매분 매시 이다.
const updateviewingcount = require('../ScheduleController/ScheduleController');
const { error } = require('console');
// schedule.scheduleJob('30 * * * * *',  (req,res)=>{ 

//   updateviewingcount.updateviewingcount();

//   });




app.listen(4000, async () => {
  console.log("~서버온~")


})







