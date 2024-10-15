const path = require('path');
const axios = require('axios');
const userservice = require('../reactservice/userservice')
const importUtile = require('../reactUtile/importutile')



module.exports.NaverLogin = async (accesscode, req, res) => {
    //      console.log("컨트롤러 매핑 성공~")
    // console.log(`접근 코드 값은 ${accesscode}`)
    let check;
    let userId;
    await axios.get(`
    https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=oIB_pADeJKcErdJaXoqA&client_secret=xhm_mwBHDx&code=${accesscode}&state=STATE_STRING 
    `)
        .then(async (result) => {
            // console.log("네이버 님들아..좀 키명이라도 알려줘라 따 찍어봐야알겠따.. 응답값은 JSON이자 키명은 data이다.")
            // console.log(result.data)
            let { access_token } = result.data

            if (access_token != null) {
                // console.log("접근토큰 받았음")
                // console.log(`access_token 의 값은? ${access_token}  입니다.`);

                //네이버에 있는 회원의 정보를 주는 네이버 api 주소
                await axios.get("https://openapi.naver.com/v1/nid/me", {

                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }).then(async (result) => {
                    // console.log("회원정보조회값")
                    // console.log(result)
                    // console.log(result.data.response)

                    //네이버 가 주는 고유 식별 아이디로, 이걸로 db를 재설계 하라는 추천을하니 이걸로 만들자.
                    userId = result.data.response.id
                    //  console.log("네이버가 주는 고유 식별 id: "+userId);
                    check = await userservice.NaverLoingService(req, res, result);
                    // console.log("컨트롤러의 리턴값")
                    // console.log(check)               

                });
            }

        }).catch(() => { console.log("뭔가 좆망") });
    return { check: check, userId: userId };
}

module.exports.Reserve = async (req, res) => {

    return await userservice.ReserveService(req, res);

}


module.exports.rest = async (req, res) => {

    return await userservice.restService(req, res);

};


module.exports.openclassinfo = async (req, res) => {


    return await userservice.openclassinfoService(req, res);
};









//현재 다른 메서드를만드는 중으로 주석처리
// module.exports.reservedmodal = async (req, res) => {

//     return await userservice.modalService(req, res);
// };



module.exports.review = async (req, res) => {
    //get 요청은   query: { ' limit': '0 ', ' onedayclass_num': '1' },
    // 이렇게 쿼리 에 담김
    let obj = await userservice.getReviewService(req, res);

    res.json(obj);
}

module.exports.nextreview = async (req, res) => {

    let obj = await userservice.getnextReviewService(req, res);

    res.json(obj);
};

module.exports.backreivew = async (req, res) => {
    let obj = await userservice.getbackReviewService(req, res);

    res.json(obj);

}


module.exports.payment = async (req, res) => {
    //import 에서 토큰을 발급받자 
    let access_token = await importUtile.getImportAccessToken(req, res);

    let statusNum = await userservice.paymentService(req, res);

    let obj = {
        ImportAccessToken: access_token,
        StatusCode: statusNum
    }


    if (statusNum == -1) {
        console.log("---------------환불시작----------");
        importUtile.paycancleImport(req, res, access_token);
        obj.StatusCode = -1;

    }

    res.json(obj);

};

module.exports.paycancle = async (req, res) => {

    let access_token = await importUtile.getImportAccessToken(req, res);

   // console.log("결제 취소를 위한 발급받은 토큰 :  " + access_token); 

    let statusCode = await importUtile.paycancleImport(req, res, access_token);

    console.log("statusCode:  "+statusCode);

    if (statusCode == 1) {

        await userservice.paycancleService(req, res);

    }

    let obj={"statusCode":statusCode};
    res.json(obj)

}




module.exports.mypage = async (req, res) => {
    let obj = await userservice.mypageService(req, res);

    res.json(obj);

}
module.exports.checkreceipt = async (req,res)=>{

    let obj = await userservice.checkreceiptService(req, res);

    res.json(obj);

}


module.exports.writingreview= async (req,res)=>{

    let obj = await userservice.writingreviewService(req, res);

    res.json(obj);

};

