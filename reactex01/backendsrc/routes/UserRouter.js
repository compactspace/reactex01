const express = require('express');

const router = express.Router();
const path = require('path')
const usercontrller = require('../controller/usercontroller');
const { compareSync } = require('bcrypt');
const fs = require("fs");
const redis = require('redis');
var x;

router.get('/testupdate', (req, res) => {
    console.log("테스트매핑")

})


router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/login.html'));
})

router.get('/phonesms2', (req, res) => {
    console.log("리엑트 매핑확인->>"+req.params);
  
});



router.get('/phonesms/:id', (req, res) => {
    console.log("리엑트 매핑확인->>"+req.params);
    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/phonesms.ejs'), {
        id: req.params.id
    })
});


router.post('/autho', usercontrller.smsautho);
router.get('/authcheck', usercontrller.authocheck);
router.get('/timeoutautho', usercontrller.timeoutautho);
router.post('/duplicidcheck', usercontrller.dupuliccheck);
router.post('/insertmembership', usercontrller.insertmembership);


router.get('/myinfo', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/myinfochange.html'));
});
router.post('/presentpwdcheck', usercontrller.presentpwdcheck);
router.post('/changepwdcheck', usercontrller.changepwdcheck);




router.post('/login', usercontrller.logincheck);
router.get('/logout', usercontrller.logoutcheck);

router.get('/onedayclass', (req, res) => {
    let sessioncheck = usercontrller.isesssionexist;

    if (sessioncheck) {
        res.render(path.join(__dirname, '../../frontendsrc/webapp/views/onedayclass.ejs'), {
            userid: req.session.userid,
            user_where: req.session.usercheck
        })
    }
    else {
        res.render(path.join(__dirname, '../../frontendsrc/webapp/views/onedayclass.ejs'), {
            userid: null
        })

    }


})

router.get('/writer', (req, res) => {
    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/writer.ejs'))
})



// router.get('/firstgetboad/:page', async (req,res)=>{ 

//     let sessioncheck=usercontrller.isesssionexist;

//   let pagelist=   await usercontrller.firstgetboad(req);
//   console.log("라우테어서의 출력")
//   console.log(typeof pagelist)

//     if(sessioncheck){

//         res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'),{
//             userid:req.session.userid,
//             user_where:req.session.usercheck,
//             pagelist:pagelist
//         })      
//     }
//     else{
//         res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'),{
//             userid:null,
//             pagelist:pagelist
//         })      

//     }

// }
// )




//리엑트 전용 상품페이지
router.get('/getfirstproduct', async (req, res) => {
    // let array=[];
    // console.log("리엑트매핑확인")
    // for(let i=0; i<firstproductarray.length; i++){
    //     let productjpg=firstproductarray[i]

    //     array.push(fs.readFileSync(path.join(__dirname, '../../frontendsrc/webapp/imgs/img/'+productjpg)))
    // }
    // const file=fs.readFileSync(path.join(__dirname, '../../frontendsrc/webapp/imgs/img/product.jpg'))

    // res.write(file);
    // res.send(file)
    const firstproductarray = await usercontrller.getfirstproduct(req);
    res.send(firstproductarray)


});//리엑트 전용 상품페이지 전용



//리엑터 전용 첫 달력 펼쳣을이 예약 가능한지 여부

router.post('/possiblereserve', async (req, res) => {
    // console.log("매핑확인용도");
    // console.log(req.query.data);
    let ispossible = req.query.data;
    const getpossiblereserve = await usercontrller.getpossiblereserve(ispossible);
    console.log("배열돌림빵후 받아온거는?");
    console.log(getpossiblereserve)

    res.send(getpossiblereserve)
    // select * from reserve where reserve_reception ='2023-11-29';
})


//리엑트 전용 첫 달력 펼쳣을시 예약 가능한지 려부 종료

router.post('/reservationinfo', async (req, res) => {
    console.log("매핑확인용도");
    console.log(req.session.usercheck);
    console.log(req.session.userid);
    let json = {}
    json.name = req.session.userid;
    json.where = req.session.usercheck;
    // const reservationinfo=    await usercontrller.reservationinfo();
    // console.log("배열돌림빵후 받아온거는?");
    // console.log(getpossiblereserve)

    //  res.send(getpossiblereserve)
    // select * from reserve where reserve_reception ='2023-11-29';
    res.send(json)
})





//리엑트 전용 로그인자 정보로 예약자정보 끌고 오는 함수



//리엑트 전용 로그인자 정보로 예약자정보 끌고 오는 함수종료

router.get('/board/', async (req, res, next) => {
    //리엑트 전용코드시작//

    let data = await usercontrller.getboad(req);
    console.log(data);
    res.send(data);

    //리엑트 전용코드 종료//


    //익스프레스 전용서버 코드 시작
    // let data = await usercontrller.getboad(req);


    // if (data.pagelist === "err") {
    //     next(data.pagelist)
    // }
    // res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'), {
    //     userid: req.session.userid,
    //     user_where: req.session.usercheck,
    //     pagelist: data.pagelist,
    //     totalrow: data.totalrow,
    //     forpaging: 10,
    //     forbackpaging: 0
    // })


}
)


router.get('/getboad/:forpaging', async (req, res, next) => {
    //리엑트 전용코드시작//

    // let data = await usercontrller.getboad(req);
    // console.log(data);
    // res.send(data);

    //리엑트 전용코드 종료//


    //익스프레스 전용서버 코드 시작
    let data = await usercontrller.getboad(req);


    if (data.pagelist === "err") {
        next(data.pagelist)
    }
    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'), {
        userid: req.session.userid,
        user_where: req.session.usercheck,
        pagelist: data.pagelist,
        totalrow: data.totalrow,
        forpaging: 10,
        forbackpaging: 0
    })


}//익스프레스 전용서버 코드 종료//
)


router.get('/nextpagebtn/:check', async (req, res) => {

    let data = await usercontrller.onlynextboad(req);
    console.log(req.params.check);
    res.send({
        pagelist: data.pagelist

    })


}
)

router.get('/backpagebtn/:check', async (req, res) => {
    // console.log("백아작스매핑확인");
    let data = await usercontrller.onlybackboad(req);
    // console.log(req.params.check);
    res.send({
        pagelist: data.pagelist

    })


}
)

router.get('/personelpage/:check', async (req, res, next) => {
    console.log("개별페이지아작스매핑확인");
    let data = await usercontrller.onlypersonelboad(req);
    //  console.log(req.params.check);


    if (data.pagelist === "err") {
        next(data.pagelist)
    } else {

        res.send({
            pagelist: data.pagelist

        })

    }
}
)


// writer + "/"+seq+"/"+cnt

const client = redis.createClient({ port: 6379 });

const redisconnect = async (req, res, next) => {

    await client.connect();
    next();
}

//redis 에 잠시 사용자의 아이디 세션 와 조회수를 캐싱하자
router.get("/showboard/:writer/:seq/:cnt/:postman", redisconnect, async (req, res) => {
console.log("포스트맨요청 100개");
    const updatedata = {
        writer: req.params.writer.substring(1, req.params.writer.length - 1),
        seq: req.params.seq,
        cnt: req.params.cnt,
        postman:req.params.postman
    }
console.log(req.params.postman);

    // const isdupulcick2 = await client.sIsMember(
    //     `check:${req.session.userid}_:_${req.params.seq}`,
    //     `${req.params.writer}`
    // );

    const isdupulcick2 = await client.sIsMember(
        `check:${req.params.postman}_:_${req.params.seq}`,
        `${req.params.writer}`
    );



    if (!isdupulcick2) {
        try {        

            // await client.sAdd(
            //     `check:${req.session.userid}_:_${req.params.seq}`,
            //     `${req.params.writer}`
            // );

            await client.sAdd(
                `check:${req.params.postman}_:_${req.params.seq}`,
                `${req.params.writer}`
            );
           
           
                await client.hIncrBy(`${req.params.seq}`, "num", 1)
       

            await client.disconnect();
           
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    } else {

        await client.disconnect();
    }

    seq = req.params.seq
    // console.log("seq->>" + seq);
    excutequery = await usercontrller.showboard(seq)
    // console.log(excutequery)

    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboard.ejs'), {
        seq: excutequery.seq,
        title: excutequery.title,
        writer: excutequery.writer,
        content: excutequery.content,
        regdate: excutequery.regdate,
        cnt: excutequery.cnt,
        filename: excutequery.filename,
        num: excutequery.num
    })



})//redis 에 잠시 사용자의 아이디 세젼 와 조회수 캐싱 종료



//redis 에 잠시 사용자의 아이디 세션 와 조회수를 캐싱하자
router.get("/showboard/:writer/:seq/:cnt/:postman", redisconnect, async (req, res) => {
console.log("포스트맨요청 100개");
    const updatedata = {
        writer: req.params.writer.substring(1, req.params.writer.length - 1),
        seq: req.params.seq,
        cnt: req.params.cnt,
        postman:req.params.postman
    }
console.log(req.params.postman);

    // const isdupulcick2 = await client.sIsMember(
    //     `check:${req.session.userid}_:_${req.params.seq}`,
    //     `${req.params.writer}`
    // );

    const isdupulcick2 = await client.sIsMember(
        `check:${req.params.postman}_:_${req.params.seq}`,
        `${req.params.writer}`
    );



    if (!isdupulcick2) {
        try {        

            // await client.sAdd(
            //     `check:${req.session.userid}_:_${req.params.seq}`,
            //     `${req.params.writer}`
            // );

            await client.sAdd(
                `check:${req.params.postman}_:_${req.params.seq}`,
                `${req.params.writer}`
            );
           
           
                await client.hIncrBy(`${req.params.seq}`, "num", 1)
       

            await client.disconnect();
           
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    } else {

        await client.disconnect();
    }

    seq = req.params.seq
    // console.log("seq->>" + seq);
    excutequery = await usercontrller.showboard(seq)
    // console.log(excutequery)

    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboard.ejs'), {
        seq: excutequery.seq,
        title: excutequery.title,
        writer: excutequery.writer,
        content: excutequery.content,
        regdate: excutequery.regdate,
        cnt: excutequery.cnt,
        filename: excutequery.filename,
        num: excutequery.num
    })



})//redis 에 잠시 사용자의 아이디 세젼 와 조회수 캐싱 종료











router.post('/insertboard', async (req, res) => {
    console.log(req)

    excutequery = await usercontrller.insertboard(req)

})






//아작스에선 render 함수를 못쓰니 결국 하나 이상은 만들어야함 ㅠ
// router.get('/ajaxgetboad/:forpaging/:forbackpaging/:startbtnnum', async (req, res) => {
//      console.log("startbtnnum 값 확인")

//     let data = await usercontrller.getboad(req);
// console.log("돌려받은 배열버튼")
// console.log(data.countingbtn)
//     res.send({
//         pagelist: data.pagelist,
//         countingbtn: data.countingbtn,
//         forpaging: 10+parseInt(req.params.forpaging),
//         forbackpaging: 10+parseInt(req.params.forbackpaging),
//         startbtnnum : parseInt(req.params.startbtnnum)+5        
//     })


// }
// )



// router.get('/backajaxgetboad/:forpaging/:forbackpaging/:lastbtnnum', async (req, res) => {
//     console.log("벡아작스매핑 확인")
//     console.log(req.params.lastbtnnum)
//     let data = await usercontrller.backgetboad(req)

//     res.send({
//         pagelist: data.pagelist,
//         countingbtn: data.countingbtn,
//         forpaging: parseInt(req.params.forpaging)-10,
//         forbackpaging: parseInt(req.params.forbackpaging)-10,       
//         lastbtnnum : parseInt(req.params.lastbtnnum)-9
//     })


// }
// )









module.exports = router;

