const path = require('path')
const helmet = require('helmet')
//주는 쪽에선 아래처럼 작성 하고 받는 쪽에선, require 후 
module.exports.Maincontroller= function mainhome(req,res){
   
    console.log("메인홈의 세션ID ?->>>"+req.sessionID)
    console.log("메인홈의 req ? 시작")
    console.log(req)
    console.log("메인홈의 req ? 종료")
    id=req.session.userid;
      

if(id==null){
    // console.log("비로그인자는  if문");
    // console.log("id->>"+id);
   
 res.render(path.join(__dirname,'../../frontendsrc/webapp/views/main.ejs'),{
    img:"img_mainhome/AE.11037861.1-removebg-preview.png"
 })
}else{

 
   console.log("로그인후 세션아이디->>"+req.sessionID);

    res.render(path.join(__dirname,'../../frontendsrc/webapp/views/main.ejs'),{
        userId: req.session.userid,
        user_where: req.session.usercheck
    })

}
}

