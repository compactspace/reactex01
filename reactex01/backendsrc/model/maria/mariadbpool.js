const mariapool2=require('mysql2/promise')
const mariapool1=require('mysql')


//데이터베이스를 finall 에서 react 데이터베이스로 변경함

module.exports.pool2=mariapool2.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'1111',
    database:'react',
    timezone : "Asia/Seoul",
    connectionLimit: 500
    });


    
    // module.exports.pool1=mariapool1.createPool({
    //     host:'localhost',
    //     port:'3306',
    //     user:'root',
    //     password:'1111',
    //     database:'react',
    //     connectionLimit: 200
    //     });



