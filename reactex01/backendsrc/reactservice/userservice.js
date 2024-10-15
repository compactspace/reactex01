

const usermodel = require('../reactmodel/usermodel')
module.exports.NaverLoingService = async (req, res, result) => {


    let data = result.data;

    let check = await usermodel.NaverLoingModel(req, res, data);

    return check;



}


module.exports.ReserveService = async (req, res) => {

    return await usermodel.ReserveModel(req, res);

}

module.exports.restService = async (req, res) => {

    return await usermodel.restModel(req, res);

};



module.exports.modalService = async (req, res) => {

    return await usermodel.reservemoadlModel(req, res);

};


module.exports.openclassinfoService = async (req, res) => {

    return await usermodel.openclassinfoModel(req, res);
};

module.exports.paymentService = async (req, res) => {

    return await usermodel.paymentModel(req, res);
};





module.exports.paycancleService = async (req, res) => {

    return await usermodel.paycancleModel(req, res);

}

module.exports.getReviewService = async(req,res)=>{

    //get 요청은   query: { ' limit': '0 ', ' onedayclass_num': '1' },
    // 이렇게 쿼리 에 담김
    
  return  await usermodel.getReviewModel(req,res);

}

module.exports.getnextReviewService =async(req,res)=>{    
    return  await usermodel.getnextReviewModel(req,res);
}

module.exports.getbackReviewService= async(req,res)=>{

    return  await usermodel.getbackReviewModel(req,res);
}

module.exports.mypageService =async(req,res)=>{
    return  await usermodel.mypageModel(req,res);
}

module.exports.checkreceiptService = async (req, res)=>{

    return  await usermodel.checkreceiptModel(req,res);
};

module.exports.writingreviewService = async (req,res)=>{


    return  await usermodel.writingreviewModel(req,res);
    
}