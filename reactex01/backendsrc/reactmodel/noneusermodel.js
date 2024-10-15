
const marialpool = require('../model/maria/mariadbpool');


module.exports.openclassinfoModel = async (req, res) => {
    
    let onedayclass_num=req.body.onedayclass_num;

   // console.log(onedayclass_num);

    let sql = "select * from onedayclass where onedayclass_num=?"
    let executequery;

    try {
     
        const con = await marialpool.pool2.getConnection();
        executequery = await con.query(sql,onedayclass_num);    
        let resultobj=executequery[0]
        // console.log("트라이문 씹힘??")
        // console.log(resultobj);

        return resultobj;

    } catch (err) { 
        console.log(err);

    }
};



module.exports.FindOutRestModel = async (req, res) => {
    
    // let onedayclass_num=req.query.onedayclass_num;
    // let openday=req.query.openday;

    let { onedayclass_num,openday}=req.query;
    console.log("클래스번호: "+onedayclass_num+" openday: "+openday);

    let sql = "select rest from reserverest where onedayclass_num=? and openday like '%"+`${openday}`+"%'"
    let executequery;

    try {
     
        const con = await marialpool.pool2.getConnection();
        executequery = await con.query(sql,onedayclass_num);    
        let resultobj=executequery[0][0]
        console.log("트라이문 씹힘??")
        console.log(resultobj);

        return resultobj;

    } catch (err) { 
        console.log(err);
        return -1;

    }
};