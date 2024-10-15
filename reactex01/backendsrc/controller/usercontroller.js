const userservices = require('../service/userservice');
const path = require('path')
const nocache = require('nocache')
const coolsms = require("coolsms-node-sdk").default;
const messageService = new coolsms("NCSY4BTX5OIPQLWB", "MUKUA17KEOWARC69L8WJRTJ5VY3RWWKA");


//익스프레스는 jsp 와 다르게, html/ejs 파일에서  내장태그나, jstl같은걸로 세션값을 스스로 꺼낼수 없고
// 수동적으로 서버에서 주는것만 받을 수 잇어서 로그인/비로그인자 를 jstl같이 처리하기 힘들다 그래서
// 차라리 session 유무 판단 미들웨어를 만들자.

module.exports.isesssionexist = async function isesssionexist(req, res) {
    let id = req.session.userid;
    if (id == null) {
        return false
    } else {
        return true
    }


}



module.exports.logincheck = async function logincheck(req, res) {   
// console.log("로그인 컨트롤러에서 세션아이디->>>"+req.sessionID)


    let usercheck = await userservices.loginservice(req);
    // console.log(usercheck);

    if (usercheck.check) {
// //여기서부턴 리엑트를 위한 코드 
    //     req.session.userid = usercheck.data
    //     req.session.usercheck = usercheck.user_where
       
    //     req.session.save((err) => { 
    //         console.log(res)
    //     //   console.log(req.cookies);
    //     //   console.log(res.cookies);  
            
    // res.end();


    //     })//여기서부턴 리엑트를 위한 코드 종료


        // 서버단 전용은 잠시 주석처리 리엑트 의 요청을 위해
        req.session.userid = usercheck.data
        req.session.usercheck = usercheck.user_where

        req.session.save((err) => {
        console.log(req);
            res.render(path.join(__dirname, '../../frontendsrc/webapp/views/main.ejs'), {
                userId: req.session.userid,
                user_where: req.session.usercheck,

            })

        })// 서버단 전용은 범위 끝
    } else if (!usercheck.check) {

        res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/login.html'));
    }



}

module.exports.logoutcheck = function logoutcheck(req, res) {
    console.log("로그아웃 컨트롤러")
    const json = {}
    // console.log("req.query");리엑트
    // console.log(req.query);
    req.session.destroy(() => {
        console.log("세션파괴");
        //   json.userId=null;
        //   json.user_where=null;
        //   json.data=true;
        //   res.send(json);
//리엑트 전용코드
res.end();
//리엑트 전용코드종료


        // //express 서버전용코드
        // res.render(path.join(__dirname, '../../frontendsrc/webapp/views/main.ejs'), {
        //     userId: null,
        //     user_where: null

        // })
        //   //express 서버전용코드 종료
    });

}

// module.exports.nocache = function nocache() {
//     return function nocache(_, res) {/       



//     };
//   };






module.exports.smsautho = function smsautho(req, res) {

    let authonumber = (Math.floor(Math.random() * 9999) + 10000).toString();


    messageService.sendOne({
        to: "01093130686",
        from: "01093130686",
        text: authonumber,
        subject: "인증번호받아라"// LMS, MMS 전용 옵션, SMS에서 해당 파라미터 추가될 경우 자동으로 LMS 변경처리 됨
    }).then(res => console.log(res));


    req.session.authonumber = authonumber
    console.log(req.session)
    res.send(authonumber);
}

//이건 나중에 타이머함수 하고 하자. 우선 실행됨은 확인했고
//이거 관련 함수는 그냥 다 날림
module.exports.timeoutautho = function timeoutautho(req, res) {
    console.log("1초뒤 유효기간 만료")
    req.session.destroy(() => {
        res.send("유효기간 만료")
    });


}

module.exports.authocheck = function authocheck(req, res) {
    console.log("authochecka 매핑")

    const authnumber = req.body.authnumber
    console.log(authnumber)
    console.log(req.session.authonumber)
    if (authnumber === req.session.authonumber)
        req.session.destroy(() => {
            console.log("세션파괴완료")
            res.render(path.join(__dirname, '../../frontendsrc/webapp/views/membership.ejs'))

        })


}

module.exports.dupuliccheck = async function dupuliccheck(req, res) {
    console.log("중복체크아작스 매핑")

    let id = req.body.id;

    let idcheck = await userservices.dupuliccheckservice(id)
    console.log("idcheck");
    console.log(idcheck);
    res.send(idcheck);


}

// module.exports.dupuliccheck=  function  dupuliccheck(req,res){
//     console.log("중복체크아작스 매핑")

//     let id=req.body.id;

//     let idcheck=  userservices.dupuliccheckservice(id)
// console.log("idcheck");
// console.log(idcheck);
//         res.send(idcheck);


//     }



module.exports.insertmembership = async function insertmembership(req, res) {

    let id = req.body.id;
    let password = req.body.password;
    let user_where = req.body.user_where;

    const alreadyidcheck = await userservices.insertmembershipservices(id, password, user_where);
    console.log("또 비동기인가");
    console.log(alreadyidcheck.check);
    if (alreadyidcheck.check) {
        res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/login.html'));
    } else {
        console.log("이미있는 아이디 엘스문")
        //ejs 파일을 실수로 sendFile 로 보내면 다운로드 현상이 일어아니 주의
        res.render(path.join(__dirname, '../../frontendsrc/webapp/views/membership.ejs'), { alreadyidcheck: false });

    }


}

module.exports.presentpwdcheck = async function presentpwdcheck(req, res) {

    let id = req.session.userid;
    // console.log("세션값 id를 못받아온다고??");
    // console.log(id);
    // console.log("req.session도? 못받아온다고??");
    // console.log(req.session);
    let password = req.body.password;
    // let user_where=req.body.user_where;   

    const presentpwdcheck = await userservices.presentpwdcheck(id, password);
    console.log("패스워드채크컨트롤러");
    console.log(presentpwdcheck);
    if (presentpwdcheck === true) {
        console.log(" 비밀번호변경");
        res.send(true);
    } else if (presentpwdcheck === false) {
        console.log(" 비밀번호변경실패");
        res.send(false);

    } else if (presentpwdcheck === "wrongpath") {
        console.log("비정상적인 경로 비밀번호변경");
        res.send("wrongpath")
    }


}

module.exports.changepwdcheck = async function changepwdcheck(req, res) {
    let password = req.body.afterpassword;
    let id = req.session.userid;
    console.log("아작스 통신시 키도 스트링으로 보내서 그런가 암튼 req.body 출력");
    console.log(req.body)

    const presentpwdcheck = await userservices.changepwdcheck(id, password);
    if (presentpwdcheck === "wrongpath") {
        res.send("wrongpath")
    } else if (presentpwdcheck) {
        res.send('true')
    } else { res.send('false') }


}

module.exports.getfirstproduct =async (req,res)=>{

  return  await userservices.getfirstproduct()
}





module.exports.getboad = async function getboad(req, res) {
    

    let json = {};

    let forpaging = parseInt(req.params.forpaging);

    //userservices.totalrow() 메소드는
    //오직 페이징 버튼 개수를 위한 배열 렝스만 구하는 거임
    
    //또한 주의 하자  현재 DB풀을 사용하기 위한 컨넥션은 2개 이다.!!
    //totalrow(); 와  getboad(forpaging);
    // 위 메소드속에서   conn.release(); 해주지 않으면!
    // 여러분의 공간 클릭시 한 유저당  pool을 2개씩이나 사용하고 반납도 하지 않게된다.!!
     let totalrow=await userservices.totalrow();
    
     
     let pagelist = await userservices.getboad(forpaging);
     json.pagelist = pagelist;
     json.totalrow =totalrow;
     return json;

  
}


module.exports.onlynextboad = async function onlynextboad(req, res) {
    console.log("다음버튼 컨트롤러에서 세션아이디->>>"+req.sessionID)
    let json = {};
    let check = parseInt(req.params.check);  
     let pagelist = await userservices.getboad(check);
     json.pagelist = pagelist;     
     return json;  
}

module.exports.onlybackboad = async function onlybackboad(req, res) {
    console.log("이전버튼 컨트롤러에서 세션아이디->>>"+req.sessionID)
    let json = {};
    let check = parseInt(req.params.check)-5;
    if(check==1){
        let pagelist = await userservices.getboad(0);
        json.pagelist = pagelist;     
        return json;  
    } else{
        let pagelist = await userservices.getboad(check);
        json.pagelist = pagelist;     
        return json;  
    } 
     
     
}


module.exports.onlypersonelboad = async function onlypersonelboad(req, res) {

    let json = {};
    let check = parseInt(req.params.check)   
        let pagelist = await userservices.getboad(check);
        json.pagelist = pagelist;     
        return json;  
   
     
     
}


module.exports.showboard= async function showboard(seq){

   const excutequery= await userservices.showboard(seq);
return excutequery;
}

module.exports.insertboard= async function insertboard(req){
    console.log(req.body)
    const title=req.body.title;
    console.log("title->"+title)
    const writer=req.body.writer;
    console.log("writer->"+writer)
    const content=req.body.content;
    console.log("content->"+content)

    await userservices.insertboard(title,writer,content);
  

}



module.exports.getpossiblereserve= async function(ispossible){

   return await userservices.getpossiblereserve(ispossible);
    
}

module.exports.getpossiblereserve2= async function(ispossible){

    return await userservices.getpossiblereserve2(ispossible);
     
 }





// module.exports.backgetboad = async function backgetboad(req, res) {

//     let json = {};
//     let countingbtn = [];

//     let forbackpaging = parseInt(req.params.forbackpaging);
// console.log("께씨발값->>"+forbackpaging);

//     //오직 페이징 버튼 처리만을 위한 함수임.
//     // 정수값만 리턴받음 씨발
//     let forpagingbtn = await userservices.forbackpagingbtn(forbackpaging)
//     if (req.params.forpaging == 0)
//      { countingbtn[0] = parseInt(req.params.forbackpaging); }
//     else {
//          countingbtn[0] = parseInt(req.params.lastbtnnum) - 9; }
//     for (let i = 1; i < forpagingbtn; i++) {
//         countingbtn[i] = countingbtn[i - 1] + 1
//     }
//     // console.log("벡btn")
//     // console.log(countingbtn)

//     //리미트절의 실행 row수를 배열로 받아옴
//      let pagelist = await userservices.backgetboad(forbackpaging);
//     // console.log("pagelist")
//     // // console.log(pagelist)

//    json.countingbtn = countingbtn;
//      json.pagelist = pagelist;
//    return json;

// }






