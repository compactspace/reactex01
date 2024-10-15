const jwt = require('jsonwebtoken');
require("dotenv").config();
let secret = process.env.secret;


//별거 없음 그냥 객체 key : value 형태로 등록해보자.
// 단 노드제이에스 는 exports 할시는 조심
// 반드시 module.exports 키워드와 객체급 은 바로 = {} 으로 작성해준다잉..
module.exports = {
    sign: async (req, res) => {       
    }
    ,
    verify: async (req, res,next) => {
        let accessToken = req.query.accessToken;
        let userId = req.query.userId;        
        // console.log(`그냥 확인용 접근 토큰은 ${accessToken} 그리고 유저 Id는 ${userId}`)

        if(accessToken ==null){return res.send("토큰을 먼저 발급 받으슈")}
        let check;
        try {
            check = jwt.verify(accessToken, secret);

        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
            return res.send("expired");
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
       
                return res.send("invalid")
            } else {
                console.log("err");
                return res.send("err")
            }
        }
        next();
    }



}