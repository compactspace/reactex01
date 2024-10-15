

const noneusermodel = require('../reactmodel/noneusermodel')


module.exports.openclassinfoService =async(req, res)=>{

    return await noneusermodel.openclassinfoModel(req, res);
};


module.exports.FindOutRestService =async(req, res)=>{

    return await noneusermodel.FindOutRestModel(req, res);
};

