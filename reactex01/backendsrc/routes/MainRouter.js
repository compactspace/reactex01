const express = require('express');
const router = express.Router();
//받는쪽에선 받은변수명.모듈익스폴트명 으로 해준다.!!
const Maincontroller=require('../controller/MainCotroller');
const redis=require('redis')





//받는쪽에선 받은변수명.모듈익스폴트명 으로 해준다.!!
router.get('/',Maincontroller.Maincontroller);


module.exports=router;
