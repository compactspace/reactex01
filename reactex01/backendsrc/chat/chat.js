const marialpool = require('../model/maria/mariadbpool');





module.exports.getEnteranceChatlist = async (id, onedayclass_num) => {

    console.log("최초 방 입장시  id: " + id + " onedayclass_num:  " + onedayclass_num)


    let con;
    let room_num;
    try {
        con = await marialpool.pool2.getConnection();
        await con.beginTransaction();
        let existChatroom = "SELECT * FROM chatroom WHERE onedayclass_num=? AND id=? for update";
        let excutequery = await con.query(existChatroom, [onedayclass_num, id]);
        let status = excutequery[0].length;
        console.log("status:  " + status);

        //씨발 선생님 id 를 또 가져와야 되네 아오 즉 지금은 학생이랑 선생이란 대화한적이 없던경우임.
        if (status == 0) {
            let teachersql = "select tid from teacher where onedayclass_num=? "
            excutequery = await con.query(teachersql, [onedayclass_num]);
            let tid = excutequery[0][0].tid;
            console.log("선생아이디: " + tid);
            teachersql = "insert into  chatroom (onedayclass_num,id,tid) values(?,?,?)";
            await con.query(teachersql, [onedayclass_num, id, tid]);
            await con.query(existChatroom, [onedayclass_num, id]);

        }

        room_num = excutequery[0][0].room_num;
        console.log(excutequery[0][0].room_num)


        let sql = "SELECT * FROM dialogue WHERE room_num=?;"
        let excute = await con.query(sql, [room_num]);
        let obj={"excute":excute[0],"room_num":room_num}

       // return excute[0];
       return obj;
    }
    catch (err) {
        console.log(err)
        con.rollback();
    } finally {
        con.commit();
        con.release();
    }

}

module.exports.insertChatlist = async (id, value,room_num) => {
    console.log("value: " + value + " id " + id+" room_num: "+room_num)
    let con;
    try {
        con = await marialpool.pool2.getConnection();
        await con.beginTransaction();
        let startslq = "select * from dialogue for update ";
        await con.query(startslq);
        let sql = "INSERT INTO dialogue  (room_num,writer,content) values (?,?,?) "
        let excute = await con.query(sql, [room_num,id, value]);
        return excute[0];
    } catch (err) {

        con.rollback();

        console.log(err)
    } finally {
        con.commit();
        con.release();
    }

}