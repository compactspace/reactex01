const session=require('express-session');
//데이터베이스를 finall 에서 react 데이터베이스로 변경함
const mariasession=require('express-mysql-session')(session);
const express=require('express');
const option={
    host:'localhost',
    port:'3306',
    user:'root',
    password:'1111',
    database:'react',

}
const mariasessionstore=new mariasession(option);

exports.mariasession= session({
    key:"free",
    secret:"secret",
    store:mariasessionstore,
    resave: false,
    saveUninitialized: false,
        cookie:{           
            maxAge:700000
                }


    });

