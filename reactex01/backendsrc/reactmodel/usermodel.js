
const marialpool = require('../model/maria/mariadbpool');

const ENV = require('dotenv').config();




module.exports.NaverLoingModel = async (req, res, data) => {
    // console.log("모델 매핑 성공");
    // console.log(data)
    let checkId = data.response.id
    let checkName = data.response.name;
    let checkMobile = data.response.mobile;
    let checkEmail = data.response.email;


    console.log(`네이버가 주는 고유 아이디 ${checkId} 이름은 ${checkName}  핸드폰은 ${checkMobile} 이메일은 ${checkEmail}`);


    const con = await marialpool.pool2.getConnection();
    let sql = "select * from user where id=?";
    let excutequery = await con.query(sql, [checkId]);
    // console.log("쿼리 실행결과")



    if (excutequery[0].length == 0 || excutequery[0][0].id == null) {
        console.log("if문 탐?")
        //rQE_RsS0i5F8jxIgoh88swhDV1UZerijF96octiN2aM
        sql = "insert into user (id ,user_tell,user_name,email) values(?,?,?,?)";

        try {
            //우선 저 query 속의 콜백함수가 없어도 되는데 인터넷엔 다들 적어서 적어는봄..
            excutequery = await con.query(sql, [checkId, checkMobile, checkName, checkEmail], (err, field) => {
                console.log(err)
                console.log(field)
            });
            console.log("try 문 탐?")
            return true;

        } catch (error) {
            return false
        }

        //세션은 ㅈㄴ 병신이라 jwt로 할것이라 그냥 주석처리함 무시 ㄱ
        // req.session.userid = checkId;
        // console.log(req.session)
        // req.session.save((err) => {

        //     res.send({cookie:req.session.userid});
        // })

        //else 문 즉 이미 기회원 인경우임
    } else {
        // console.log("엘스문 문 탐?")
        return false
    }



}

module.exports.ReserveModel = async (req, res) => {
    console.log("모델 매핑 안됨?");
    let sql = "insert into reserved (id, openclass_id,application_day) values(?,?,?)";
    let duplicate = "SELECT count(*) FROM reserved WHERE openclass_id=? AND id=? and application_day=?";
    let executequery;
    let id = req.query.userId;
    let openclass_id = req.query.openclass_id;
    let application_day = req.query.application_day
    // console.log(`모델에서 받은 id ${id} 이고 받은 오픈클래스 아디니는 ${openclass_id}`)

    const con = await marialpool.pool2.getConnection();
    try {
        console.log("트라이문 씹힘?");

        executequery = await con.query(duplicate, [openclass_id, id, application_day])
        console.log("실행수 받은 행수");
        console.log(executequery)
        // 객체의 key를 알고있으면 배열인덱스속에 키 명을 집어 넣어도됨
        // console.log(executequery[0][0]['count(*)'])
        let duplic = executequery[0][0]['count(*)'];
        if (duplic >= 1) {
            return false;
        } else {
            executequery = await con.query(sql, [id, openclass_id, application_day])
            return true;
        }


    } catch (err) {
        console.log(err)

    }
}


module.exports.restModel = async (req, res) => {
    let sql;
    let excutequery;

    let openclass_id = req.query.openclass_id;
    let eacopenday = req.query.eacopenday;

    try {
        const con = await marialpool.pool2.getConnection();
        sql = "select rest from eachopenclass where openclass_id=? AND eacopenday=?;"
        excutequery = await con.query(sql, [openclass_id, eacopenday])
        // console.log("쿼리 실행결과값")
        // console.log(excutequery[0][0]);
        // console.log("실행결과종료")
        let resultint = excutequery[0][0]

        return resultint;


    } catch (err) {
        console.log(err)
        // 어쩔수 없음 일반 정수형으로  -1 res 보내면 애러남.. 그래서 객체처럼 보내자.
        return { rest: -1 };
    }


};


module.exports.reservemoadlModel = async (req, res) => {
    let id = req.query.userId;
    let application_day = req.query.application_day;
    let openclass_id = req.query.openclass_id;
    let sql = "SELECT NAME,mobile, openclass_name,openclass_time,openclass_price,reserved_num FROM  reserved inner join  snsuser  on  reserved.id=snsuser.id inner JOIN openclass ON reserved.openclass_id=openclass.openclass_id WHERE snsuser.id=? AND reserved.application_day=? AND openclass.openclass_id=?"
    let executequery;
    try {

        let con = await marialpool.pool2.getConnection();
        executequery = await con.query(sql, [id, application_day, openclass_id]);
        console.log("실행값")
        console.log(executequery)
        console.log(executequery[0][0]["reserved_num"]);
        let reserved_num = executequery[0][0]["reserved_num"];
        // 지금 manageropenclass 태이블 재고 완료 개념이 불안정 하니 결제 이후 다시 처리하자잉처럼 결제후 인원수 반영할것임
        // sql = "INSERT INTO manageropenclass (reserved_num,rest) VALUES(?,1);"
        // await con.query(sql, [reserved_num]);

        let result = executequery[0][0];
        return result
    } catch (err) {
        console.log(err)
    }

}


module.exports.openclassinfoModel = async (req, res) => {
    let sql = "select * from openclass"
    let executequery;

    try {
        const con = marialpool.pool2.getConnection();
        executequery = await con.query(sql);
        let result = executequery[0][0]

        console.log(result);

    } catch (err) {


    }
};



module.exports.getReviewModel = async (req, res) => {
    let start_flag = false;

    let end_flag = false;

    let buttoncnt = 0;

    let backbuttoncnt = 0;

    let reviews;

    let nextreivew = false;

    let backreview = false;

    let totalreviewcnt = 0;


    let answarobj = {

        nextreivew: nextreivew,

        backreview: backreview,

        start_flag: false,

        end_flag: false,

        buttoncnt: 0,

        backbuttoncnt: 0,

        reviews: null,

        totalreviewcnt: totalreviewcnt

    }




    let { limit, onedayclass_num } = req.query;


    let totalreviewcntsql = "select count(*) from review where onedayclass_num=?"

    let reviewssql = "select * from review where onedayclass_num=? limit ?, 10"



    let getreviewqeury;
    try {
        const con = await marialpool.pool2.getConnection();
        getreviewqeury = await con.execute(reviewssql, [onedayclass_num, limit]);
        // console.log("-------------------------");
        // console.log(getreviewqeury[0]);
        // console.log("-------------------------");

        if (getreviewqeury[0].length == 0) {

            answarobj.start_flag = true;
            answarobj.end_flag = true;
            answarobj.buttoncnt = 0;
            answarobj.backbuttoncnt = 0;
            return answarobj;
        }
        else {
            answarobj.reviews = getreviewqeury[0];
        }

        let totalcnt;

        let excutequery;

        excutequery = await con.execute(totalreviewcntsql, [onedayclass_num, limit]);


        totalcnt = excutequery[0][0]
        // key 명으로 빼와야 하는데 key가 특수 문자가 섞여있어.. 강제로 아래 배열처럼 빼옴.
        Object.values(totalcnt).forEach((v) => {
            totalcnt = v;
        })

        answarobj.totalreviewcnt = totalreviewcnt;


        buttoncnt = totalcnt / 10;


        //현재 기능이 하자가 없다면 따로 함수로 빼서 만들자 지저분 하긴하다.

        if (buttoncnt < 1) {
            buttoncnt = Math.floor(buttoncnt);
            answarobj.end_flag = true;
            answarobj.start_flag = true;
            answarobj.buttoncnt = buttoncnt;
            answarobj.nextreivew = false;
            answarobj.backreview = false;
        }

        else if (buttoncnt <= 5) {

            buttoncnt = 10;
            answarobj.start_flag = false;
            answarobj.end_flag = false;
            answarobj.buttoncnt = buttoncnt;
            answarobj.nextreivew = true;
            answarobj.backreview = false;
        }

        return answarobj;

    } catch (err) {
        console.log(err);
    }
}

module.exports.getnextReviewModel = async (req, res) => {
    console.log("--다음페이지--")
    console.log(req.query)
    console.log("--다음페이지--")
    let nextreivew = false;

    let backreview = false;

    let backbuttoncn = 0;

    let answarobj = {

        nextreivew: nextreivew,

        backreview: backreview,

        start_flag: false,

        end_flag: false,

        buttoncnt: 0,

        backbuttoncnt: 0,

        reviews: null

    }

    let { limit, onedayclass_num } = req.query;



    let totalreviewcntsql = "select count(*) from review where onedayclass_num=?"

    //주의해라, 이건, 클라이언트가 넥스트 페이지를 눌렀다면
    // 먼저 totalreviewcntsql 총 계산한걸 가져온뒤
    // 바로 아래 쿼리의 첫?:클라이언트가 누른 넥스트페이지 값   두번째?:위에서 구한 총 테이블로우수    에 집어 넣어어
    let nextrescntsql = "SELECT COUNT(*) FROM  (SELECT * from review where onedayclass_num=? LIMIT ?,?) AS t";


    let totalrowcnt;
    let excutequery;
    let nexttotalrowcnt;
    try {
        const con = await marialpool.pool2.getConnection();

        excutequery = await con.execute(totalreviewcntsql, [onedayclass_num]);

        Object.values(excutequery[0][0]).forEach((v) => {
            totalrowcnt = v;
        })
        console.log("전체게시글수:  " + totalrowcnt);


        excutequery = await con.execute(nextrescntsql, [onedayclass_num, limit, totalrowcnt]);

        console.log(excutequery);


        Object.values(excutequery[0][0]).forEach((v) => {
            nexttotalrowcnt = v;
        })

        console.log("다음페이지 이상 총 게시글수:  " + (nexttotalrowcnt));


        let getreviewqeury = "select * from review where onedayclass_num=? limit ?, 10";

        if (nexttotalrowcnt != 0) {

            excutequery = await con.execute(getreviewqeury, [onedayclass_num, limit]);
            getreviewqeury = excutequery[0];
            answarobj.reviews = getreviewqeury;



            let buttoncnt = nexttotalrowcnt / 10;
            answarobj.backbuttoncnt = (limit - 10);
            if (buttoncnt < 1) {
                buttoncnt = Math.floor(buttoncnt);
                answarobj.buttoncnt = buttoncnt;
                answarobj.end_flag = true;
                answarobj.start_flag = false;
                answarobj.nextreivew = false;
                answarobj.backreview = true;

                return answarobj;
            }


            if (buttoncnt >= 1 || buttoncnt >= 5) {
                buttoncnt = (parseInt(limit) + 10);
                answarobj.buttoncnt = buttoncnt;
                answarobj.end_flag = false;
                answarobj.start_flag = false;
                answarobj.nextreivew = true;
                answarobj.backreview = true;
                answarobj.backbuttoncnt = parseInt(limit)
                return answarobj;
            }
        } else {
            answarobj.end_flag = true;
            answarobj.start_flag = false;
            answarobj.backreview = true;
            answarobj.nextreivew = false;
            //  answarobj.backbuttoncnt=parseInt(limit)-10;
            answarobj.backbuttoncnt = parseInt(limit)
            return answarobj;
        }
    } catch (err) {
        console.log(err)
    }
};


module.exports.getbackReviewModel = async (req, res) => {

    console.log("--이전페이지--")
    console.log(req.query)
    console.log("--이전페이지--")

    let start_flag = false;

    let nextreivew = false;

    let backreview = false;

    let backbuttoncn = 0;

    let buttoncnt = 0;

    let reviews = null;

    let { limit, onedayclass_num } = req.query;



    //망할... limit 값 문자열 0 그리고  투르 펠스가 문자열로 오고 있었음.. 아오
    //또 limit도 아마 리엑트에서 `${}` 이렇게 보내서 그런듯
    if (parseInt(req.query.limit) == 0) {
        console.log("첫페이지")
        start_flag = true;
        backbuttoncn = 0;
        buttoncnt = 10;
    }
    else {

        backbuttoncn = (req.query.limit) - 10;
        buttoncnt = parseInt(req.query.limit) + 10;

        console.log("buttoncnt!!!!!!!!!!!:    " + buttoncnt);

    }


    let answarobj = {

        nextreivew: nextreivew,

        backreview: backreview,

        start_flag: start_flag,

        end_flag: false,

        buttoncnt: buttoncnt,

        backbuttoncnt: backbuttoncn,

        reviews: null

    }

    let backreivewsql = 'select * from review where onedayclass_num=? limit ?, 10';
    let executebackreivewquery;


    try {
        const con = await marialpool.pool2.getConnection();

        executebackreivewquery = await con.execute(backreivewsql, [onedayclass_num, limit]);

        reviews = executebackreivewquery[0];

        answarobj.reviews = reviews;


        return answarobj;





    } catch (err) {

        console.log(err)
    }
};


module.exports.mypageModel = async (req, res) => {

    console.log(req.body);
    let { id } = req.body;
    let joinsql = 'SELECT * FROM  reserveinfo AS r INNER JOIN onedayclass AS o ON r.onedayclass_num=o.onedayclass_num INNER JOIN user AS u WHERE r.id=?';
    let excutequery;
    let resobj;
    try {
        let con = await marialpool.pool2.getConnection();
        excutequery = await con.execute(joinsql, [id]);
        console.log(excutequery[0]);
        resobj = excutequery[0];
        return resobj;
    } catch (err) {

        console.log(err)
    }
}









//테이블의 남은 자리를 업데이트 처리 하자.
module.exports.paymentModel = async (req, res) => {

    let statuscod;
    console.log(req.body);
    for (key in req.body) {
        if (key == undefined || key == null) {
            throw new Error("리엑트 쪽에서 쿼리스트링을 잘못세팅해서줌");
        }
    }


    let { merchant_uid, onedayclass_num, openday, id, reserve_name, reserve_tell } = req.body


    //결제하는 도중 다른사람들도 할수있으니 다시한번 남은 자리수를 확인하자.
    let sql = "select rest from reserverest where onedayclass_num=" + onedayclass_num + " and openday like '%" + `${openday}` + "%"
        + "'";

    let executequery;

    let resultobj;



    const con = await marialpool.pool2.getConnection();

    try {

        executequery = await con.query(sql, onedayclass_num);
        let result = executequery[0][0];
        let restcnt = result.rest;

        // 결제하는 도중 다른사람들도 할수있으니 다시한번 남은 자리수를 확인하자.
        if (result == undefined || restcnt < 0) {
            throw new Error("원데이 클래스 번호 잘못 받아 왔거나 남은자리가 0임!!");

        }
        await con.beginTransaction();
        sql = 'insert into reserveinfo (merchant_uid,onedayclass_num,openday,id,reserve_name,reserve_tell) values (?,?,?,?,?,?) for update '
        result = await con.execute(sql, [merchant_uid, onedayclass_num, openday, id, reserve_name, reserve_tell]);




        sql = "select rest from reserverest where onedayclass_num=" + onedayclass_num + " and openday like '%" + `${openday}` + "%"
            + "'";


        result = await con.execute(sql);

        //  throw new Error("남은자리가 0임!!");
        let nowrestcnt = parseInt(result[0][0].rest);
        if (parseInt(nowrestcnt) <= 0) {
            throw new Error("남은자리가 0임!!")

        }
        nowrestcnt--;

        console.log("nowrestcnt:  " + nowrestcnt);
        sql = 'update reserverest set  rest=' + nowrestcnt + " where onedayclass_num=" + onedayclass_num + " and openday like'%" + `${openday}` + "%'";

        await con.execute(sql);

        statuscod = 1;
    } catch (err) {
        console.log(err)
        con.rollback();
        con.release();
        statuscod = -1;

    } finally {
        con.commit();
        con.release();

        return statuscod;
    }
};







//환불처리 하자.
//
module.exports.paycancleModel = async (req, res) => {
    // console.log(req.body);
    let { merchant_uid, onedayclass_num, openday, id, reserve_name, reserve_tell } = req.body;

    //db에선 되는데 그냥 쿼리 분리하자.
    // let sql1 = "UPDATE reserverest AS t SET rest=(SELECT rest FROM reserverest WHERE  onedayclass_num="+`${onedayclass_num}`+" and openday LIKE '%"+`${openday}`+"%' ) +1000 WHERE  onedayclass_num="+`${onedayclass_num} for update`;
    let sql1 = "SELECT rest FROM reserverest WHERE  onedayclass_num=" + `${onedayclass_num}` + " and openday LIKE '%" + `${openday}` + "%' for update";
    let sql2 = "UPDATE reserverest  SET rest=? where onedayclass_num=?";
    let sql3 = "UPDATE reserveinfo SET reservestatus='paycancle' WHERE merchant_uid=? AND onedayclass_num=?";
    let con;
    try {
        con = await marialpool.pool2.getConnection();
        await con.beginTransaction();
        let excutequery = await con.execute(sql1);
        //  console.log(excutequery[0][0])
        let restcnt = parseInt(excutequery[0][0].rest) + 1;
        //  console.log("restcnt:  "+restcnt);
        excutequery = await con.execute(sql2, [restcnt, onedayclass_num]);

        excutequery = await con.execute(sql3, [merchant_uid, onedayclass_num]);

    } catch (err) {
        await con.rollback();
        console.log(err)
    } finally {
        con.release();
    }




}



module.exports.checkreceiptModel = async (req, res) => {

    let { reserveinfo_num } = req.query;

    let sql = 'SELECT * FROM reserveinfo WHERE reserveinfo_num=?';
    let con;
    let excutequery;
    let resobj;
    try {
        con = await marialpool.pool2.getConnection();
        excutequery = await con.query(sql, [reserveinfo_num]);

        // console.log(excutequery[0])
        // console.log(excutequery[0][0])
        // console.log(excutequery[0][0].length)



        if (excutequery[0].length == 0 || excutequery[0][0].length == 0) {
            resobj = -1
        }
        else {
            resobj = 1;
        }

        return resobj;


    } catch (err) {
        console.log(err)
    } finally {
        con.release();
    }

};


module.exports.writingreviewModel = async (req, res) => {


    let { id, onedayclass_num, review_name, review_comment } = req.body;


    let sql1 = "select user_code from user where id=?"

    let sql2 = "insert into review (review_comment,user_code,onedayclass_num,review_name)  values(?,?,?,?)"
    let con;
    let excutequery;
    let user_code;
        try {

        con = await marialpool.pool2.getConnection();
        excutequery = await con.query(sql1, [id]);
        user_code = excutequery[0][0].user_code;
        excutequery = await con.query(sql2, [review_comment, user_code, onedayclass_num, review_name]);


    } catch (err) {
        console.log(err)
        return -1;

    } finally {

        con.release();
        return 1;
    }


};