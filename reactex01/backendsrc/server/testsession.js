const express=require('express')
const mairiasession = require('express-session')
const app=express();

app.use(mairiasession({
    secret: '12345',
    resave: false,
    saveUninitialized: false,

}),(req,res)=>{
    req.session.test = "test string";
    req.session.save(function(err){
        console.log(req.session);
        res.send('세션 생성 완료');
    })

})

app.listen(3000,()=>{
    console.log("서버다")
})