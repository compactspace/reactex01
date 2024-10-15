const app = require('express')();

const server = require('http').createServer(app);

const cors = require('cors')

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});




app.use('/fulllist', () => {

    console.log(io._nsps);

})



// io.on("connection", (socket) => {
//     let map = socket.nsp.sockets;
//     console.log(map.size);
//     if (map.size >= 3) {
//         socket.emit('message', 'wait');
//         socket.disconnect(socket.id);
//         return;
//     }

//     console.log(`${socket.id} 유저님이 입장`);

//     //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
//     //씨발 온이 있으면 아래쪽은 진행이 않됨 지 좆대로네 on 안에서 emit으로 처리하자.
//     socket.on('message', (x) => {
//         console.log(x);
//         socket.emit('message', x);
//     }
//     );

//     //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
//     socket.on('disconnect', (reason) => {
//         console.log(`기본유저 ${id}님이 ${reason}의 이유로 퇴장하셨습니다. `)
//     }
//     );




// });






io.on("connection", (socket) => {



    let map = socket.nsp.sockets;
    console.log(map.size);
    if (map.size >= 3) {
        socket.emit('message', 'wait');
        socket.disconnect(socket.id);
        return;
    }

    console.log(`${socket.id} 유저님이 입장`);

    //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
    //씨발 온이 있으면 아래쪽은 진행이 않됨 지 좆대로네 on 안에서 emit으로 처리하자.
    socket.on('message', (x) => {   
        console.log(`${socket.id} 님이 보낸 메시지 :  ${x}`);
        socket.broadcast.emit("message", x);
    }
    );
    //여기서 응답으로 강제로 연결을 해주어야함.. 우선은
    socket.emit('message', '퍽유');
    let id = socket.id
    let nsp = socket.nsp;


    //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
    socket.on('disconnect', (reason) => {
        console.log(`기본유저 ${id}님이 ${reason}의 이유로 퇴장하셨습니다. `)
    }
    );




});




// io.on("connection", (socket) => {

//     let map=socket.nsp.sockets;
//     console.log(map.size);
//     if(map.size>=3){
//         socket.emit('message', 'wait');
//         socket.disconnect(socket.id);
//         return;
//     }

//  console.log(`${socket.id} 유저님이 입장`);

//  //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
//  //씨발 온이 있으면 아래쪽은 진행이 않됨 지 좆대로네 on 안에서 emit으로 처리하자.
//  socket.on('message',(x)=>{

//      console.log(x);
//      socket.emit('message','sex');
//     }
// );
// console.log("씨발 퍽유좀 되라")
// socket.emit('message','퍽유');


//   console.log("--기본연결---")
//   // console.log(socket.nsp.sockets);
//     console.log("--기본연결---")
//     // getkey(socket);
//     let id = socket.id
//     let nsp = socket.nsp;


//     //클라이언트쪽에서의 새로고침을 하면  transport close 라고 로그가 찍힌다.
//     socket.on('disconnect', (reason) => {
//         console.log(`기본유저 ${id}님이 ${reason}의 이유로 퇴장하셨습니다. `)
//     }
//     );
// });






// NameSpace: 서버쪽에선 /이름 으로만 적어 주고
// 프론트엔드 쪽에선 풀네임으로 http://localhost:4000/name1 이렇게 적어준다.
const namespace = io.of("/name1");

namespace.on("connection", (socket) => {
    console.log("-----------------네임스페이스연결----------------------")
    console.log(socket.nsp);
    console.log("------------------네임스페이스연결--------------------")

    socket.on("sendMessage", (message) => {
        socket.broadcast.emit("respondMessage", message);
    });

    socket.on("disconnect", (reason) => {
        console.log(`네임스페이스 유저 ${socket.id} 님이 ${reason} 이유로 종료함`);
    });


});





function getkey(x) {
    console.log("---------------key 리시트 시작----------------------");
    for (key in x) {

        console.log(key);
    }
    console.log("-------------key 리시트 종료------------");

}



// io.on("connection", (socket) => {
//     socket.on("message", (x,y,z) => {

//         socket.name=x;
//         socket.join(y);
//         socket.room=z

//         // console.log(socket.nsp);

// // for(key in socket.nsp){
// //     console.log(key);
// // }
// console.log(socket.nsp.sockets);

//       });

//     });









// io.on('connection', (socket) => {
//     // rooms 키에 클라이언트 쪽에서 연결을 요청한 개수만큼 담긴다.
//     console.log(socket)
//     socket.on('message', ({ name, message }) => {
//         // console.log(name+" "+message);
//         io.emit('message', ({ name, message }))
//     })

// }
// )

server.listen(4000, function () {
    console.log('포트  4000 시작한다잉');
})