
import axios, { AxiosRequestConfig } from "axios";
import $ from 'jquery';
//지금 예제는 이클립스 , 작업 폴더는 바탕화면의 javawokr의
//APIServerTest 프로젝트의 MainServer.java를 실행한뒤 해라

export const JavaSocketEx01 = () => {
    // GET 요청을 보낼 때 사용할 헤더
    const headers = {
        ContentType :"Control-Allow-Headers"
    };

    const data = {
        username: 'john',
        password: 'secret'
    };

    const ClickAixos =  () => {


         
        // get 요청을 보냅니다.
       axios('http://localhost:8000', {
        method: "get",
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "HelloWorld":"java",
            "Authorization":"autho"
            
        }
    }

        )
            .then(response => {
                // 성공적인 응답을 처리합니다.
                console.log(response.data);
            })
            .catch(error => {
                // 에러를 처리합니다.
                alert("뭔가망함");
                console.error(error);
            });
        
        }

    //이놈은 다이렉트로 요청하는건데 됨
    const ClickAixos2 = async () => {
        await axios("https://jsonplaceholder.typicode.com/comments/1", {
            method: "get",
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then((result) => {
            console.log(result.data)

        }).catch(() => {
            console.log("뭔가잘못됨")
        })



    }





    return (<>
        <h1>자바 소켓서버와 통신하기</h1>
        <button onClick={ClickAixos}>자바 소켓 통신하기 클릭!</button>
        <br></br>
        <button onClick={ClickAixos2}>JSON데이터 사이트 통신하기 클릭!</button>
    </>);




}