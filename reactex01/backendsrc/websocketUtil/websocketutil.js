
const getChatlist = require('../chat/chat');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});

module.exports.websocketopen = () => {
    server.listen(5000, function () {
        console.log(`채팅 포트 ${5000} 서버 시작.`)
    })
}



//  enterance 네임 스페이스를 만들고
// 네임스페이스에서 컨낵션과, 각종 이벤트(그 이벤트가 아니라 이름을 맞춤해주는)를 만든다.
const enterancename = io.of('/enterance')

enterancename.on('connection', async (socket) => {   


    //여기서의 testid는 글쓴이를 가르키는거임 헷갈리지 말것
    socket.on('chatstart', async ({ value, testid,room_num }) => {

        console.log("value: "+value+" id "+testid)
          
        let obj = await getChatlist.insertChatlist(testid, value,room_num);


        let writerOther=testid;
        let contentOther=value
        let createdAt =new Date().toLocaleDateString();
        socket.broadcast.emit('chatstart',{ writerOther, contentOther,createdAt });    

    });


    //최초 입장시 필요한건 고객 id와 클래스 번호임 헷갈리지 말것 
    //페이지 처음 진입시 지난 대화기록을 불러오기 위한것임
    socket.on('enterancedata',async (data)=>{
        let id=data.id;
        let onedayclass_num=data.onedayclass_num
        let obj = await getChatlist.getEnteranceChatlist(id,onedayclass_num);
        console.log(obj)
        socket.emit('enterancedata',obj);

    })
  
})


const forteacheralter= io.of('/forteacheralter');

forteacheralter.on('connection',(socket)=>{

console.log(` ${socket.id} 님이 입장 했다. 자식아`)

    // socket.on('chatsubmit',(data)=>{
    //     console.log("아하하하하:   "+data)
    //     socket.emit('alert',"ㅇㅇㅇㅇ");

    // })
    socket.on('chatapplication',(data)=>{
      console.log("~~~채팅신청~~~");
      console.log(data);
        data.connection=true;
        data.socketid=socket.id;
        let stinfo=data;

      //주의해라, broadcast 를 해야핝다.
      // 내 소켓이 아닌 다른 소켓에 보내는 방법이다. 안그러면 선생님쪽 소켓으로 가지질 않는다...
            socket.broadcast.emit("chatsubmit",stinfo)
    })


    socket.on('confirm',(data)=>{
        socket.broadcast.emit('confirm',{"resstatus":data});
    });


    socket.on('disconnect', (reason) => {
        console.log(`기본유저 ${socket.id}님이 ${reason}의 이유로 퇴장하셨습니다. `)
        let newobj=new Object();
        newobj.connection=false;
        newobj.socketid=socket.id;

        socket.broadcast.emit('chatsubmit',newobj);
    }
    );


})






//신기허네.. 익스폴트 한거 호출 않해도 반응을 해버리네
// module.exports.connection = io.on("connection", (socket) => {
//     let map = socket.nsp.sockets;
//     let id = socket.id;
//     // console.log(map.size);
//     if (map.size >= 3) {
//         socket.emit('message', 'wait');
//         socket.disconnect(socket.id);
//         return;
//     }

//     console.log(`${socket.id} 유저님이 입장`);





//     //씨발 온이 있으면 아래쪽은 진행이 않됨 지 좆대로네 on 안에서 emit으로 처리하자.
//     socket.on('message', async (x) => {
//         console.log(`${socket.id} 님이 보낸 메시지 :  ${x}`);
//         let obj = await getChatlist.getChatlist();
//         console.log(`채팅방 이력 ${obj}`);
//         socket.broadcast.emit("message", obj);
//         //   socket.broadcast.emit("message", x);
//     }
//     );
//     //여기서 응답으로 강제로 연결을 해주어야함.. 우선은
//     socket.emit('message', '퍽유');



//     //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
//     socket.on('disconnect', (reason) => {
//         console.log(`기본유저 ${id}님이 ${reason}의 이유로 퇴장하셨습니다. `)
//     }
//     );
// });

