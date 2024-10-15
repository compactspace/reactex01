const express = require('express');


const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');
const userrouter = require('../reactroutes/userroutes');
const noneuserrouter = require('../reactroutes/noneuserrouter');
const ReactNoneUserRouter = require('../routes/ReactNoneUserRouter');
const excuteWebsocket = require('../websocketUtil/websocketutil');

const jwtUtile = require('../reactUtile/jwtutile').verify
const mairiasession = require('../model/maria/mariasession')
// const mairiasession = require('../model/maria/mariasession')
const marialpool = require('../model/maria/mariadbpool');
const jwt = require('jsonwebtoken');
const websocketopen = require('../websocketUtil/websocketutil')


require("dotenv").config();
let secret = process.env.secret;
// console.log(secret)
const app = express();
const server = require('http').createServer(app);

app.use(mairiasession.mariasession)
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// 또이놈은 리엑트의 포트 3000 을 허용해주겠다는거임 에휴 씨발
//https://velog.io/@diorjj/React-CORS-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
//위 사이트가 그나마 cors 오리진 해결책준다...
app.use(cors({ origin: ['http://localhost:3000','http://'+`${process.env.REACT_APP_SMARTPHONE_IP}`+':3000'], credentials: true }));

//잠시 상식 app.use 를 해야 url경로가 쌓이면서 진행되는 것임
//즉 app.use '/경로이름' 해야 /경로이름/경로/경로.. 이런식으로 쌓임
//네이버 로그인후 콜벡 url 담당.
//app.use('/naver', userrouter);

//즉 app.use '/경로이름' 해야 /경로이름/경로/경로.. 이런식으로 쌓임
//app.use 사용 않하고 get post 로 하면 리엑트에서 요청시 병신같은 오류남
//네이버 로그인후 콜벡 url 담당.
// 하씨발 또 지금 axios 비동기 요청이면 미들웨어를 연달아 작업 못한다.
// 즉 app.use('/naver',userrouter,미들웨어1,미들웨어2) 해도 /user 가 비동기 요청으로
// 미들웨어 ,미들웨어1,미들웨어2 가 씹힌다.
app.use('/naver', userrouter)



//무적권! use -> 라우터 ->컨트롤러 -> 서비스 순으로 으로 처리하고
// 리턴은 되돌아와서 컨트롤러 또는  라우터에서 응답객체로 응답


app.use('/noneuser', ReactNoneUserRouter);


//토큰 유효기간 처리등 미들웨어는 잠시 주석처리
// app.use('/user', jwtUtile, userrouter)
app.use('/user', userrouter)


//정체불명 라우터로 주석처리
//app.use('/noneuser', noneuserrouter)




//토큰 발급 테스트
//주의: 포트원은 fetch 를 써서 난 악시오스를 쓸거라 살짝 세팅하는게 다루다.
//또한; 발급 받은 접근 토큰은 리엑트서버의 웹브라우저 로컬스토리지에 저장 시킨다.
app.use('/getToken', (req, res) => {

    axios.post("https://api.iamport.kr/users/getToken",
        {
            imp_key: `${process.env.REST_API_access_token}`, // REST API 키
            imp_secret: `${process.env.REST_API_Secret}`, // REST API Secret            
        }

        , {
            headers: { "Content-Type": "application/json" },
        }


    ).then((res) => {
        //status haeders 등 나온다.

        //  console.log(res);
        // for(x in res){
        //     console.log(x);
        // }       
        // console.log(res.status)
        // console.log(res. statusText)


        if (res.status == 200 && res.statusText == 'OK') {
            console.log(res.data.response.access_token);

            let AccessToken = res.data.response.access_token;


        } else if (res.status == 401 && res.statusText == 'Unauthorized') {


        }



    })

})



//테스트 Xss공겨

app.use('/Xss', (req,res)=>{

console.log(req);

})



//테스트 로그인
app.use('/testlogin', (req, res) => {

    console.log(req);
    let idlist = ['신원찬', '큐티민지', '섹시장군', '돌장군'];


    let { id } = req.query
    let loginsuccess = idlist.indexOf(id);
    let obj = { "status": loginsuccess }
        obj.id=id;
    if (id == '큐티민지') {
        obj.teacher="teacher";
        obj.onedayclass_num="3";
    }

    console.log(loginsuccess)
    res.json(obj)



})






app.use('/authuser', (req, res) => {
    // console.log("authuser 매핑 확인");
    // console.log(req.headers)
    let token = req.headers.token;
    console.log("또 지랄병이네 토큰값은")
    console.log(token)

    //로그인 없은 놈이나 쿠키 지운 놈들은 널이니 널포인트 익셉션 때문에 if문 만듬
    if (token == null) {

    } else {
        let newaccessToken;
        const expires = jwt.verify(token, secret, (result) => {
            // console.log(result)
            // console.log(`유효기간 만료토큰 ${token}`)
            // console.log(err);

            // console.log(`재발급 토큰 ${newaccessToken}`)
            return result;
        })
        console.log(expires);
        if (expires != null) {
            console.log("만료기간이 지난경우")
            //재발급이 자꾸 기존꺼에서 쌓임으로 초기화해준다.
            token = "newtoken";
            newaccessToken = jwt.sign({ token: token }, secret, { expiresIn: "10m" });
            console.log(`재발급 토큰 ${newaccessToken}`)
            return res.send({ newaccessToken })
        } else {

            // console.log("아오 이건 또 않탐?")
            return res.send({ newaccessToken: token })
        }



    }

})








// 데이터베이스는 동시에 모두 삽입 되던지 안되던지 하는 예제;

//그냥 트랜잭션 테스트용도임 콘솔만 봐라
// 비긴 커밋 롤백 이 없으면
//   let sql = "insert into tran1 values(1)" 
//insert into tran2 values(병신)
// 두개의 쿼리문이 동시에 실패해거나 동시에 성공 해야 하는데
//let sql = "insert into tran1 values(1)"  성공 insert into tran2 values(병신) 에러가난다.
//비긴 커밋 롤백 을 해주자.
//아직까진 별겨 없다 딱 저 정도로만 이해해두자.
app.use('/transaction', async (req, res) => {
    let con = await marialpool.pool2.getConnection();
    try {
        await con.beginTransaction();
        let sql = "insert into tran1 values(1)"
        await con.query(sql);
        sql = "insert into tran2 values(병신)"
        await con.query(sql);
        await con.commit();
    } catch (err) {
        console.log(err)
        await con.rollback();

    } finally {
        // con.release();

        //conn.release() 를 통해 Pool 에 반납
        //그이상 그의미를 아직 두지 말자. 어설프게 알지말자 아오
    }
})



//만약 순차적이 아닌 동시에
//결제를 한다면 자리수계산이 옳바르게 될지 테스트 해보자.
// 상황은 다음과 같다.
// 먼저 유저가날린 fk ticket_id= 1 로 고정을 하고 
// select  total_amount from ticket where ticket_id=req.ticket_id
//  reserved_amount <total_amount 이면
// total_amount-1을 해주고
// update ticket set reserved_amount=req.ticket_id+1 뭐 대충 이렇게 해보자
//jemeter 로 요청 80개 100개 등 날려보자.
//그러나 이상하게 제대로 작동하지 안는다.
// 씹히거나 부족하거나 그런 현상이 있음
app.use('/transaction2', async (req, res) => {
    let con = await marialpool.pool2.getConnection();
    let executequery;
    let result1;
    let result2;
    try {
        await con.beginTransaction();
        let sql = "select reserved_amount ,total_amount from ticket where ticket_id=1"
        executequery = await con.query(sql);
        result1 = executequery[0][0].total_amount
        result2 = executequery[0][0].reserved_amount
        console.log(result1)
        console.log(result2)
        if (result2 < result1) {
            sql = "update ticket set reserved_amount=?"
            executequery = await con.query(sql, [result2 + 1]);
            let result3 = executequery[0][0]
            await con.commit();
        }
    } catch (err) {
        console.log(err)
        await con.rollback();
    } finally {
        con.release();
        res.send("허하")

    }
})



app.use("/smartphonetest",(req,res)=>{
    console.log("스마트폰")
})












//ticket 테이블에
//ticket_id=1 reserved_amount=0 total_amount=1000 인상황에서
//jemeter로 1000개 요청시
//Error: Deadlock found when trying to get lock; try restarting transaction
//가 발생하는 경우 
app.use('/transaction3', async (req, res) => {
    let con = await marialpool.pool2.getConnection();
    let executequery;
    let result1;
    let result2;
    try {
        await con.beginTransaction();
        let sql = "select reserved_amount ,total_amount from ticket where ticket_id=1 for update"
        executequery = await con.query(sql);
        result1 = executequery[0][0].total_amount
        result2 = executequery[0][0].reserved_amount

        console.log(result1)
        console.log(result2)
        if (result2 < result1) {
            sql = "update ticket set reserved_amount=?"
            executequery = await con.query(sql, [result2 + 1]);
            let result3 = executequery[0][0]

        }
        await con.commit();
    } catch (err) {
        console.log(err)
        await con.rollback();
    } finally {
        con.release();

    }
})




//이놈도 업데이트는 개판인데
// 마리아디비 오토커밋 false후  update 문에 where 절을 추가하니 데드락 에러 메세지는 안뜸 씨발 뭐하자는거냐?
//근데 또 code: 'ER_LOCK_WAIT_TIMEOUT' 는 뜸 씨발 뭐하자는거임
app.use('/transaction4', async (req, res) => {
    let con = await marialpool.pool2.getConnection();
    let executequery;
    let result1;
    let result2;
    try {
        let sql = "select reserved_amount ,total_amount from ticket where ticket_id=1 for update "
        await con.beginTransaction();
        executequery = await con.query(sql);

        result1 = executequery[0][0].total_amount
        result2 = executequery[0][0].reserved_amount
        await con.commit();
        console.log(result1)
        console.log(result2)
        if (result2 < result1) {
            await con.beginTransaction();
            sql = "update ticket set reserved_amount=? where ticket_id=1 "
            executequery = await con.query(sql, [result2 + 1]);
            let result3 = executequery[0][0]
            await con.commit();
        }

    } catch (err) {
        console.log(err)
        await con.rollback();
    } finally {
        con.release();
        res.send("허하")

    }
})

//리액트 JWTex02 파일과 연동되는 문법용임
//그냥 토큰 값 그리고 필요한 유저의 아디디를 따로 저장 해서 보내는거임 그이상 그이하도 아님
app.use('/jwt', (req, res) => {
    console.log("jtw 매핑 확인");
    let { data1 } = req.query;

    const accessToken = jwt.sign({ what: data1 }, secret, { expiresIn: '100s' });
    const userId = jwt.sign({ what: data1 }, secret, { expiresIn: '100s' });
    console.log(accessToken);
    res.json({ accessToken, userId });
})

//팁: try catch 문에서 err 는 적절히 알아서 에러를 만들어준다. 다음 형식을 그냥 눈에 익히자.
//팁: 에러 메시지 값으로 분기점을 주자.
//팁: 이제 리엑트 서버에서 인증이 필요할시마다, 미들웨어로써 이를 등록하자.
//즉 JDBC utile 처럼 미만들어두고 등록을하자.
app.use('/jwtautho', jwtUtile, async (req, res) => {
    console.log("jtw 유효성검사  매핑 확인");
    let { accessToken } = req.query;
    let expires

    try {
        expires = jwt.verify(accessToken, secret)
        console.log(expires);
        res.json(expires);
    } catch (err) {
        if (err.message == "jwt expired") {
            res.send("토큰만료됨");
            console.log(err.message);
        } else {
            console.log(err);
        }

    }

})


//문법용으로 토큰이 유효한지 거치는 미들웨어 등록으로 바꾸어 보자.
//팩트 체크를 하였으니 이제 인증이 필요한 곳 마다 미들웨를 다음처럼 등록하면 될듯
app.use('/jwtauthocheck', jwtUtile, async (req, res) => {
    console.log("토큰이 유효할시에만 뜹니다...")
})

//http 서버 = 요청을 해야 응답을 해주는 서버
app.listen(4000, async (req, res) => {
    console.log(`그냥 http서버 시작`)
})


//websoket 서버 = 서버가 능동적으로 요청이 없어도 클라이언트에게 응답을 할 수 있는 서버
websocketopen.websocketopen();









