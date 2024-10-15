const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');
const userrouter = require('../reactroutes/userroutes');
const noneuserrouter = require('../reactroutes/noneuserrouter');
const ReactNoneUserRouter= require('../routes/ReactNoneUserRouter');

const jwtUtile = require('../reactUtile/jwtutile').verify
const mairiasession = require('../model/maria/mariasession')
// const mairiasession = require('../model/maria/mariasession')
const marialpool = require('../model/maria/mariadbpool');
const jwt = require('jsonwebtoken');
require("dotenv").config();
let secret = process.env.secret;
// console.log(secret)
const app = express();
app.use(mairiasession.mariasession)
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// 또이놈은 리엑트의 포트 3000 을 허용해주겠다는거임 에휴 씨발
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));



app.use('/transaction', async (req, res) => {
 

for(let i=0; i<100; i++){
   let x= await marialpool.pool2.getConnection();

  
  
   let sql = "select * from tran1"
   await x.query(sql);
   x.release();

}





    try {
     
        
    } catch (err) {
       
    } finally {
    
    }
})


app.use('/checkpool', async (req, res) => {
  
    for(key in marialpool.pool2.pool){
        console.log(key);
    }

// 마리아디비 에서 SHOW PROCESSLIST; 명령어 치면
// 아래 주석 처리 로그에서 id 값과 일치함을 확인


// console.log(marialpool.pool2.pool._allConnections )
//console.log(marialpool.pool2.pool._freeConnections);
//console.log(marialpool.pool2.pool.config);
})



app.listen(4000, async (req, res) => {

})








