
const axios = require('axios');

//토큰 발급 테스트
//주의: 포트원은 fetch 를 써서 난 악시오스를 쓸거라 살짝 세팅하는게 다루다.
//또한; 발급 받은 접근 토큰은 리엑트서버의 웹브라우저 로컬스토리지에 저장 시킨다.


module.exports.getImportAccessToken = async (req, res) => {

    let AccessToken;

    await axios.post("https://api.iamport.kr/users/getToken",
        {
            imp_key: `${process.env.REST_API_access_token}`, // REST API 키
            imp_secret: `${process.env.REST_API_Secret}`, // REST API Secret            
        }

        , {
            headers: { "Content-Type": "application/json" },
        }


    ).then((res) => {
        //status haeders 등 나온다.

        // console.log(res);
        // for(x in res){
        //     console.log(x);
        // }       
        // console.log(res.status)
        // console.log(res. statusText)


        if (res.status == 200 && res.statusText == 'OK') {
            // console.log(res.data.response.access_token);

            AccessToken = res.data.response.access_token;

            // console.log("AccessToken:  " + AccessToken)

        } else if (res.status == 401 && res.statusText == 'Unauthorized') {
            /*
            여기서 토큰 만료가 지난 터이니 재발급 로직 짜면 될듯
            */
            console.log("내가 뜨면 좆망");
        }
    })

    return AccessToken;
}

module.exports.paycancleImport = async (req, res, access_token) => {
    let { merchant_uid } = req.body
    console.log("환불을 위해 전달받은 거래번호와 접근토큰    merchant_uid:  " + merchant_uid + " access_token: " + access_token);
    const url = "https://api.iamport.kr/payments/cancel";
    let data = {
        merchant_uid: merchant_uid,
        reason: "개발테스트가 환불이유다 자식아",
        amount: 100, // 고객사 클라이언트로부터 받은 환불금액
        checksum: 100, // [권장] 환불 가능 금액 입력

    };

    let headers = {
        "Content-Type": "application/json",
        Authorization: access_token // 포트원 서버로부터 발급받은 엑세스 토큰
    };
    
    let code;
    await axios.post(url, data, {headers}).then((res) => {
        //다날에서 환불취소시 환불 성공 으로 data:{code:0} 이렇게 준다고 하네
        // 이미 전액취소된 주문입니다 는 data: { code: 1, message: '이미 전액취소된 주문입니다.'} 이렇게
        code=res.data.code;
        // console.log(res.data)
        console.log(res.data.code);
    }).catch((err) => {

        console.log(err);

    })

    return code;

};