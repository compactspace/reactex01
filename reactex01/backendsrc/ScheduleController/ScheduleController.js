const userservices = require('../service/userservice');
const path = require('path')
const marialpool = require('../model/maria/mariadbpool')
const redis = require('redis');
const client = redis.createClient({ port: 6379 });

const redisconnect = async (req, res, next) => {

    await client.connect();
  
}



module.exports.updateviewingcount = async () => {
     console.log("매시간의 1분마다 매 3초 마다 호출!");

    redisconnect();
    const con = await marialpool.pool2.getConnection();
    
    // let test =await client.keys("check*")
    // console.log(test==test)
    //서버가 1분단위로 게시글의 조회수를 한번에 업데이트 시킬것인데
    //단 최신글 기준이고
    //지금은 버튼 1개당 열개의 게시글이고 버튼 한개당 10개씩의 개시글이 있다.

    for (let i = 0; i < 5; i++) {
//i==0 버튼 1에대한 것임

        if (i == 0) {
            for (let j = 0; j < 10; j++) {

                const query = "select cnt,seq from board limit 0,10";
                const excutequery = await con.query(query);
                // console.log(excutequery[0][j].seq);
                x= await client.hGet(`${excutequery[0][j].seq}`,'num');            
              
          if(x!=null){
           
            const queryupdatecnt = "update board set cnt=? where seq=?";
            await con.query(queryupdatecnt,[x,`${excutequery[0][j].seq}`]);
       
          }
              
            }
           
        }
        // else는 버튼이 2~5 까지에 대한것임
        else {
            for (let j = 0; j < 10; j++) {
                const query = "select cnt,seq from board limit ?,10";
                const excutequery = await con.query(query,i*10);
                x= await client.hGet(`${excutequery[0][j].seq}`,'num');
                if(x!=null){
                    // console.log(excutequery[0][j].seq);
                    const queryupdatecnt = "update board set cnt=? where seq=?";
                    await con.query(queryupdatecnt,[x,`${excutequery[0][j].seq}`]);
                }
              
            }
        }



    }   
    client.disconnect();
    con.release();

}


// module.exports.updateviewingcount = async () => {
//     redisconnect();
//     const con = await marialpool.pool2.getConnection();    
   
//     for (let i = 0; i < 5; i++) {
// //i==0 버튼1 에대한 것임

//         if (i == 0) {
//             for (let j = 0; j < 10; j++) {
                
//                 const query = "select cnt,seq from board limit 0,10";
//                 const excutequery = await con.query(query);            

//                 x= await client.hGet(`${excutequery[0][j].seq}`,'num');  
//           if(x!=null){
          
//             const queryupdatecnt = "update board set cnt=? where seq=?";
//             await con.query(queryupdatecnt,[x,`${excutequery[0][j].seq}`]);
       
//           }
              
//             }
           
//         }
//         // else는 버튼이2~5 까지에 대한것임
//         else {

//             for (let j = 0; j < 10; j++) {

//                 const query = "select cnt,seq from board limit ?,10";
//                 const excutequery = await con.query(query,j*10);
//                 x= await client.hGet(`${excutequery[0][j].seq}`,'num');
//                 if(x!=null){
//                     const queryupdatecnt = "update board set cnt=? where seq=?";
//                     await con.query(queryupdatecnt,[x,`${excutequery[0][j].seq}`]);
//                 }
              
//             }
//         }
//     }   
//     client.disconnect();
//     con.release();

// }