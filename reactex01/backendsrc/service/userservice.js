const bcrypt = require('bcrypt');
const marialpool = require('../model/maria/mariadbpool');
const korean = require('moment')
module.exports.loginservice = async function loginservice(req) {
  // console.log(req.body.id)
  // console.log(req.body.password)
  
//리엑트 테스트 전용
// 리엑트에서 axios 요청시!query에 담긴다.
// ㅇㅇ 로그인 잘됨 확인됨 그래서 리엑트 에서 요청한 req는 주석처리함.
  // let id = req.query.id;
  // let password = req.query.password;

  // //서버단 전용
  let id = req.body.id;
  let password = req.body.password;
  // //서버단 전용 끝
  var json = {}
  const conn = await marialpool.pool2.getConnection();
  const compareforsql = 'select * from user where id=?'
  const excutequery = await conn.query(compareforsql, [id])
  // console.log(excutequery[0].length);
  // console.log(excutequery[0][0]);
  if (excutequery[0].length == 1 && excutequery[0][0] != null) {
    const passwordcheck = await bcrypt.compare(password, excutequery[0][0].password);
    if (passwordcheck) {
      json.check = true;
      json.data = excutequery[0][0].id
      json.user_where = excutequery[0][0].user_where
      // console.log("아이디는 맞고 비번도 ok json")
      // console.log(json)
      return Promise.resolve(json);
    } else {
      console.log("아이디는 맞았으나 비번이 틀린경우 json")
      console.log(json)
      json.check = false;
      return json;
    }

  } else if (excutequery[0].length == 0) {
    console.log("아예 아이디 자체가 틀린경우 json")
    console.log(json)
    json.check = false;
    return json;

  }


}





module.exports.dupuliccheckservice = async function dupuliccheckservice(id) {
  console.log(id)
  const conn = await marialpool.pool2.getConnection();
  const sql = 'select * from user  where id=?'
  const excutequery = await conn.query(sql, [id]);
  console.log(excutequery);


  if (excutequery[0][0] == null) {
    return true;
  } else {
    return false;
  }
}
//그냥 mysql 
// module.exports.dupuliccheckservice =  function dupuliccheckservice(id) {

//   const conn =  marialpool.pool1.getConnection(err, conn);
//   const sql = 'select * from user  where id=?'
//   conn.query(sql, [id], (err, row, fields) => {
//     if (row[0].id == null) { return true; }
//     else { return false; }

//   })
// }


module.exports.insertmembershipservices = async function insertmembershipservices(id, password, user_where) {
  let json = {}
  let saltRounds = 10;
  //회원가입후 이동된 페이지에서 뒤로가기 버튼을 누른후 또 가입 을 누르면 같은 아이디가 계속 가입됨을 막자...
  const alreadyexistcheckidconn = await marialpool.pool2.getConnection();
  const existcheckidsql = 'select * from user where id=?'
  const excutequery1 = await alreadyexistcheckidconn.query(existcheckidsql, [id]);

  if (excutequery1[0][0] == null) {
    console.log("암호화전->" + password)
    const haspassword = await bcrypt.hash(password, saltRounds)
    console.log(haspassword);
    const conn = await marialpool.pool2.getConnection();
    let sql = 'insert into user (user_where,id,password) values(?,?,?);'
    const excutequery2 = await conn.query(sql, [user_where, id, haspassword]);
    json.check = true;
    return json;

  } else {
    console.log("이미있는 아이디")
    json.check = false;
    return json;
  }




}


module.exports.presentpwdcheck = async function presentpwdcheck(id, password) {
  console.log("id가 안넘어오나")
  console.log(id)
  let json = {}
  let saltRounds = 10;
  if (id == null) {
    return "wrongpath"
  } else {

    const hashpwd = await bcrypt.hash(password, saltRounds)

    const presentpwdcheckconn = await marialpool.pool2.getConnection();
    const presentpwdchecksql = 'select * from user where id=?'
    const excutequery1 = await presentpwdcheckconn.query(presentpwdchecksql, [id]);

    if (excutequery1[0][0] != null) {

      const passwordcheck = await bcrypt.compare(password, excutequery1[0][0].password);
      console.log(passwordcheck);
      return passwordcheck;
    }
    else {
      return false;
    }
  }
}

module.exports.changepwdcheck = async function changepwdcheck(id, password) {
  let json = {}
  if (id == null) {
    jons.check = "wrongpath"
  } else {
    let saltRounds = 10;
    const hashpwd = await bcrypt.hash(password, saltRounds);
    const changepwdcheckconn = await marialpool.pool2.getConnection();
    const presentpwdchecksql = 'update user set password=? where id=? '
    const excutequery1 = await changepwdcheckconn.query(presentpwdchecksql, [hashpwd, id]);
    console.log("비밀번호 업데이트 쿼리문 결과");
    console.log(excutequery1[0].changedRows);
    console.log(excutequery1);
    if (excutequery1.length == 1 && excutequery1[0].changedRows == 1) {
      json.check = true
      return json
    } else {
      json.check = false;
      return json
    }


  }


}

module.exports.getpossiblereserve=async function(ispossible){

let json = {}
let  possibleday=[]
 
  const alreadyexistcheckidconn = await marialpool.pool2.getConnection();
  const existcheckidsql = 'select reserve_reception  from reserve where reserve_reception=?'
 
  for(let k=0; k<ispossible.length; k++){
// console.log("배열속의 값은->>>>"+ispossible[k])
excutequery1 = await alreadyexistcheckidconn.query(existcheckidsql, [ispossible[k]]);


if(excutequery1[0][0]==null){
  possibleday.push(ispossible[k])

}else{
  // console.log(excutequery1[0][0].reserve_reception)

}

  }
 

return possibleday


}

//
module.exports.getpossiblereserve2=async function(ispossible){

  let json = {}
  let  possibleday=[]
   
    const alreadyexistcheckidconn = await marialpool.pool2.getConnection();
    const existcheckidsql = 'select reserve_reception  from reserve where reserve_reception=?'
   
    for(let k=0; k<ispossible.length; k++){
  // console.log("배열속의 값은->>>>"+ispossible[k])
  excutequery1 = await alreadyexistcheckidconn.query(existcheckidsql, [ispossible[k]]);
  
  
  if(excutequery1[0][0]==null){
    possibleday.push(ispossible[k])
  
  }else{
    // console.log(excutequery1[0][0].reserve_reception)
  
  }
  
    }
   
  
  return possibleday
  
  
  }
//



//0 10 20 30...
// module.exports.forpagingbtn = async function forpagingbtn(forpaging) {
//   let excutequeryarray;
//   let excutequerylength;
//   let json ={};

//   //주의!: 버튼 한개당 10개의 페이징인데
//   // 지금 버튼의 최대 갯수가 5개 씩이므로
//   // forpaging*5를 해주자.
//   const conn = await marialpool.pool2.getConnection();
//   // let sql = " SELECT seq FROM BOARD  where seq >= ? "
//   let sql = " SELECT seq FROM BOARD  limit  ? ,10"
//   if (forpaging == 0) {
//     const excutequery = await conn.query(sql, [(forpaging * 5) + 50]);
//     json.excutequerylength = 5;
//     return json;
//   }
//   else {
//     //[(forpaging * 5)] 에 대한 쿼리가 잘받아오면
//     // 1개버튼:10 2버튼:10 ....5개버튼:10 총 50개의 로우 데이터가 있다는 거임
//     // 즉 forpaging=10 이면  SELECT seq FROM BOARD  limit  10 ,10"
//     // 1번 버튼은  SELECT seq FROM BOARD  limit  10 ,10"
//     // 2번 버트은  SELECT seq FROM BOARD  limit  20 ,10"
//     //..5번 버튼은  SELECT seq FROM BOARD  limit  50 ,10"

//     // 즉 forpaging=20 이면  SELECT seq FROM BOARD  limit  60 ,10"
//     // 1번 버튼은  SELECT seq FROM BOARD  limit  70 ,10"
//     // 2번 버트은  SELECT seq FROM BOARD  limit  80 ,10"
//     // 3번 버트은  SELECT seq FROM BOARD  limit  90 ,10"
//     // 4번 버트은  SELECT seq FROM BOARD  limit  90 ,10"
//     //..5번 버튼은  SELECT seq FROM BOARD  limit  100 ,10"

// //5번째 버튼의 존재성 알아내기
    
//     // 1개버튼:10 2버튼:10 ....5개버튼:10 총 50개의 로우 데이터가 있다는 거임
//     // 즉 forpaging=10 이면  SELECT seq FROM BOARD  limit  10 ,10"
//     // 1번 버튼은  SELECT seq FROM BOARD  limit  10 ,10"
//     // 2번 버트은  SELECT seq FROM BOARD  limit  20 ,10"
//     //..5번 버튼은  SELECT seq FROM BOARD  limit  50 ,10" =[(forpaging * 5)+50

//     // 즉 forpaging=20 이면  SELECT seq FROM BOARD  limit  60 ,10"
//     // 1번 버튼은  SELECT seq FROM BOARD  limit  70 ,10"
//     // 2번 버트은  SELECT seq FROM BOARD  limit  80 ,10"
//     // 3번 버트은  SELECT seq FROM BOARD  limit  90 ,10"
//     // 4번 버트은  SELECT seq FROM BOARD  limit  90 ,10"
//     //..5번 버튼은  SELECT seq FROM BOARD  limit  100 ,10"=[(forpaging * 5)+50




    
//     const excutequery = await conn.query(sql, [(forpaging * 5)+ 50]);

//     // excutequery[0].length == 0 인 상황은 1개버튼:10 2버튼:10 ....5개버튼:10 총 50개의 로우 데이터가
//     // 아님을 의미. 그래서 나머지 버튼의 갯수가 몇개인지 구하는 거임
//     if (excutequery[0].length == 0) {
//       let sql2 = " SELECT seq FROM BOARD "
//       let lastexcutequery = await conn.query(sql2);
//       let qutiont = Math.floor(lastexcutequery[0].length / 10);
//       let rest = lastexcutequery[0].length % 10;
//       console.log("총로우수->>" + lastexcutequery[0].length);
//       console.log("목->>" + qutiont);
//       console.log("버튼 한개당 몫목->>" + Math.floor(qutiont / 10));
//       console.log("나머지->>" + rest);
   
//       let nthrest = Math.floor(qutiont / 10);
//       excutequerylength = nthrest + rest;
//       json.excutequerylength=excutequerylength
//       json.restbtn=Math.floor(qutiont / 10)
//       return json;

//     } else {
//       console.log("엘스문")
//       console.log(excutequery[0])
//       excutequerylength = 5;
//       json.excutequerylength= excutequerylength;
//       return  json;

//     } 


//   }



// }

module.exports.totalrow = async function totalrow() {

  let totalrow;
  let json ={};

  const conn = await marialpool.pool2.getConnection();
 
  let sql = " SELECT seq FROM BOARD "

  excutequery = await conn.query(sql);
  totalrow=excutequery[0].length

  console.log(totalrow.length)
  conn.release();
   return totalrow;
}










module.exports.forpagingbtn = async function forpagingbtn(forpaging) {
  let excutequeryarray;
  let excutequerylength;
  let json ={};

  //주의!: 버튼 한개당 10개의 페이징인데
  // 지금 버튼의 최대 갯수가 5개 씩이므로
  // forpaging*5를 해주자.
  const conn = await marialpool.pool2.getConnection();
  // let sql = " SELECT seq FROM BOARD  where seq >= ? "
  let sql = " SELECT seq FROM BOARD  limit  ? ,10"
  if (forpaging == 0) {
    const excutequery = await conn.query(sql, [(forpaging * 5) + 50]);
    json.excutequerylength = 5;
    return json;
  }
  else {

    const excutequery = await conn.query(sql, [(forpaging * 5)+ 50]);

    // excutequery[0].length == 0 인 상황은 1개버튼:10 2버튼:10 ....5개버튼:10 총 50개의 로우 데이터가
    // 아님을 의미. 그래서 나머지 버튼의 갯수가 몇개인지 구하는 거임
    if (excutequery[0].length == 0) {
      let sql2 = " SELECT seq FROM BOARD "
      let lastexcutequery = await conn.query(sql2);
      let qutiont = Math.floor(lastexcutequery[0].length / 10);
      let rest = lastexcutequery[0].length % 10;
      console.log("총로우수->>" + lastexcutequery[0].length);
      console.log("목->>" + qutiont);
      console.log("버튼 한개당 몫목->>" + Math.floor(qutiont / 10));
      console.log("나머지->>" + rest);
   
      let nthrest = Math.floor(qutiont / 10);
      excutequerylength = nthrest + rest;
      json.excutequerylength=excutequerylength
      json.restbtn=Math.floor(qutiont / 10)
      return json;

    } else {
      console.log("엘스문")
      console.log(excutequery[0])
      excutequerylength = 5;
      json.excutequerylength= excutequerylength;
      return  json;

    } 


  }



}














//처음 상품 페이지 진입시, 데이터베이스에서
// 사진파일명만! 가져와본다.
module.exports.getfirstproduct = async ()=>{
  let firstproductarray=[];
  let excutequeryrow;
 
  const conn = await marialpool.pool2.getConnection();
  let sql = " SELECT  *  FROM product limit ? , 10 "
  try{  
   
  const excutequery = await conn.query(sql, [0]);

    excutequeryrow = excutequery[0];
console.log("실행")
// console.log(excutequery[0])
for(let i=0; i<excutequery[0].length; i++){
  console.log("반복문속실행")
  console.log(excutequery[0][i])
  // firstproductarray.push(excutequery[0][i].product_img);
  firstproductarray.push(excutequery[0][i]);
}



    conn.release();
    return firstproductarray;
    // return excutequery[0][0].product_img;

  }catch(err){
   console.log("케치문속 err")
 
   return "err";
  }




}



module.exports.getboad = async function getboad(forpaging) {
  let excutequeryrow;
 
  const conn = await marialpool.pool2.getConnection();
  let sql = " SELECT * FROM BOARD limit ? , 10 "
  try{  
    console.log("forpaging->>"+forpaging)
  const excutequery = await conn.query(sql, [forpaging*10]);

    excutequeryrow = excutequery[0];
    conn.release();
    
    return excutequeryrow;
  }catch(err){
   console.log("케치문속 err")
   conn.release()
   return "err";
  }finally{
    conn.release();
  }
}


module.exports.lastpagegetboad = async function lastpagegetboad(forpaging) {
  let excutequeryrow; 

  const conn = await marialpool.pool2.getConnection();
  let sql = " SELECT * FROM BOARD limit ? , 10 "
  if (forpaging > 0) {
   
    const excutequery = await conn.query(sql, [forpaging] * 5);
    excutequeryrow = excutequery[0];

    return excutequeryrow;
  }
  else {
    const excutequery = await conn.query(sql, [forpaging]);
    excutequeryrow = excutequery[0];

    return excutequeryrow;
  }


}


module.exports.showboard = async function showboard(seq){
  const conn = await marialpool.pool2.getConnection();
  const sql="select * from board where seq=?";
  
  const sql2 ="update board set cnt=? where seq=?"; 
try{
 
}catch(e){

console.log("에러는"+e);
}finally{
  const excutequery= await conn.query(sql,[seq])

  
  conn.release();
  return excutequery[0][0];
} 


}













module.exports.forbackpagingbtn = async function forbackpagingbtn(forpaging) {
  let excutequeryarray;
  let excutequerylength;
  let countingbtn = [];

  //주의!: 버튼 한개당 10개의 페이징인데
  // 지금 버튼의 최대 갯수가 5개 씩이므로
  // forpaging*5를 해주자.
  const conn = await marialpool.pool2.getConnection();
  // let sql = " SELECT seq FROM BOARD  where seq >= ? "
  let sql = " SELECT seq FROM BOARD  limit  ? ,10"
  if (forpaging == 0) {
    const excutequery = await conn.query(sql, [(forpaging * 5) + 50]);
    excutequerylength = 5;
    return excutequerylength;
  }
  else {
    const excutequery = await conn.query(sql, [(forpaging * 5) + 50]);

    if (excutequery[0].length == 0) {
      let sql2 = " SELECT seq FROM BOARD "
      let lastexcutequery = await conn.query(sql2);
      let qutiont = Math.floor(lastexcutequery[0].length / 10);
      let rest = lastexcutequery[0].length % 10;
      console.log("총로우수->>"+lastexcutequery[0].length);
      console.log("목->>"+qutiont);
      console.log("버튼 한개당 몫목->>"+ Math.floor(qutiont / 10));
      console.log("나머지->>"+rest);
      let nthrest = Math.floor(qutiont / 10);
      excutequerylength = nthrest + rest;
      return excutequerylength;
    } else {
      console.log("엘스문")
      console.log(excutequery[0])
      excutequerylength = excutequery[0].length = 5;
      return excutequerylength;

    }  

  }
}
















module.exports.backgetboad = async function backgetboad(forbackpaging) {
  let excutequeryrow;
  console.log("씨발 매개변수가 융통성없나")
  const conn = await marialpool.pool2.getConnection();
  let sql = " SELECT * FROM BOARD limit ? , 10 "
  if (forbackpaging > 0) {
    const excutequery = await conn.query(sql, [(forbackpaging * 5) - 50]);
    excutequeryrow = excutequery[0];
    console.log("하씨발 벡 비티엔 시 쿼리결과")
    console.log(forbackpaging)
    console.log(excutequery[0])
    return excutequeryrow;
  }
  else {
    const excutequery = await conn.query(sql, [forbackpaging]);
    excutequeryrow = excutequery[0];

    return excutequeryrow;
  }


}




module.exports.getboardlist = async function getboardlist(page) {
  console.log("설비스??")
  console.log(page)
  //리밋절에서 10의 배수 단위로 만들려고
  //가령 page가 1 dlaus 1 부터 10 개의 로우만 가져온다.
  //가령 page가 3 이면  20부터 10개의 로우만 가져온다. 
  let pages = (page - 1) * 10;
  const conn = await marialpool.pool2.getConnection();
  let sql = " SELECT * FROM BOARD limit ? , 10 "
  const excutequery = await conn.query(sql, [pages]);

  return excutequery[0];

}



module.exports.fornextpagebtn = async function fornextpagebtn(next) {

  const conn = await marialpool.pool2.getConnection();
  next = parseInt(next * 10);

  let sql = " SELECT seq FROM BOARD where seq>?"
  const excutequery = await conn.query(sql, [next]);
  // console.log(" excutequery[0].length->>" + excutequery[0].length)

  if (excutequery[0].length > 0) {
    if (excutequery[0].length % 10 != 0) {
      excutequery[0].length = Math.floor((excutequery[0].length) / 10) + 1
      // console.log("btn 개수는  ->>"+excutequery[0].length)
      return excutequery[0].length
    } else if (excutequery[0].length % 10 == 0) {
      excutequery[0].length = (excutequery[0].length) / 2
      console.log("btn 개수 ->>" + excutequery[0].length)
      return excutequery[0].length
    }


  } else if (excutequery[0] == 0) {
    return 0;
  }



}




module.exports.forbackpagebtn = async function forbackpagebtn(back) {
  let json = {}
  let countingbtnarray = [];

  //각 버튼당 10개의 페이징이고
  // 버튼의 최대값은 5개임!!
  console.log(back)
  const conn = await marialpool.pool2.getConnection();
  let sql = " SELECT * FROM BOARD limit ? , 10 "
  if (back / 5 == 1) {
    back = 0

    const excutequery = await conn.query(sql, [back]);
    json.data = excutequery[0];
    json.countingbtn = excutequery[0].length
    countingbtnarray.length = 5;

    countingbtnarray[0] = 1;
    for (let i = 1; i < countingbtnarray.length; i++) {
      countingbtnarray[i] = countingbtnarray[i - 1] + countingbtnarray[0]
    }

    json.data = excutequery[0];
    json.countingbtn = excutequery[0].length
    json.countingbtnarray = countingbtnarray;
    return json
  } else if (back % 5 == 0) {

    const excutequery = await conn.query(sql, [back]);
    countingbtnarray.length = 5;
    countingbtnarray[0] = back - 4;
    for (let i = 1; i < countingbtnarray.length; i++) {
      countingbtnarray[i] = countingbtnarray[i - 1] + 1;
    }
    json.data = excutequery[0];
    // console.log("5의 배수니??")
    // console.log(countingbtnarray)
    json.countingbtn = excutequery[0].length
    json.countingbtn = excutequery[0]
    json.countingbtnarray = countingbtnarray;
    return json
  }
}


module.exports.insertboard= async function insertboard(title,writer,content){
  const conn = await marialpool.pool2.getConnection();
  const sql = 'insert into board (title,writer,content) values(?,?,?)'
  try{  
    const excutequery = await conn.query(sql, [title,writer,content]);
    excutequeryrow = excutequery[0];
    console.log(excutequeryrow)
    conn.release();
  } catch(err){
console.log("인설트문 에러 확인해보자.")
console.log(err)

  }


  
}







// bcrypt.compare(password, hash, function(err, result){
//   console.log('my password', result);
// if(result){



// }else{

// }

// })
//남의 패스워드, 즉 자신의 패스워드와 다르므로 다른 패스워드로 결과가 도출되는 코드다.
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result){
//     console.log('other password', result);
// })










// marialpool.pool2.getConnection((err, conn) => {
//   // let sql='insert into user (user_code,user_where,id,password,naver_id,user_tell,user_address,user_name) values(user_code,user_where,id,password,naver_id,user_tell,user_address,user_name)'
//   conn.query(sql, [id, password, user_where], (err, row, fields) => {
//     if (!err) {
//       console.log("인설트문의 row는 뭐가 출력이 되려나");
//       console.log(row);

//     } else {


//     }

//   })

// });

