const express=require('express');
const app=express();
const path=require('path')
const fs=require('fs');
const userRouter = require('../server/routebranchcut');
app.set('view engine','ejs');

//기본기 부터 잡자.
// url 요청 /main 을 하면 현재는 use 메소드로, 요청후에도 url는 여전히 /main 이다.
app.use('/main',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/test1.html'))
})

//기본기 부터 잡자.
// 현재 url이 /main 인  test1.html 에서 엑션태그 /user를 요청시에만
// 이 라우터가 작동된다.
app.use('/user', userRouter)




app.listen(3000,()=>{
    console.log("ServerOn");
})