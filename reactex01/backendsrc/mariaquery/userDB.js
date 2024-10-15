const conn =require('../mariadb/mariadb');
const express=require('express')


exports.userDBlogin= function login(req,res){
    conn.connect();
    conn.query("select * from fornodejs",(err,row,fields)=>{
        console.log("row의값"+"\n");
        console.log(row);
    })
    
};

