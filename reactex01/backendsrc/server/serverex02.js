const express=require('express');
const app=express();
const path=require('path')
const maria=require('../mariadb/mariadb')
const usercontrollers=require('../controller/usercontroller');
app.set('view engine','ejs');


app.get('/',(req,res)=>{
res.render('../../../frontendsrc/webapp/views/ajax.ejs');


})




app.post('/login',(req,res)=>{
    
    usercontrollers.loginDB();

})





app.listen(3000,()=>{
    console.log("ServerOn");
})