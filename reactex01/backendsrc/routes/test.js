const express = require('express');
const router = express.Router();
const path = require('path')
const marialpool = require('../mariadb/mariadbpool')

router.post('/go',function (req, res) {

    marialpool.getConnection((err, conn) => {
 
req.session.sexsex=req.body.id;
      req.session.save((req,res,err)=>{
        if(err){console.log("난 에러 출력담당")}
        else{
            console.log("난 세션에 잘 저장된후 로직 담당");
        res.redirect('/main')
        }
       
      });


           
     

    })
})
module.exports = router;
