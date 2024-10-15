import axios from 'axios';
import { useState } from 'react';


//외부와의 통신 방법은?
// 아작스

// XMLHttpRequest라는 옛날 문법 쓰기

// fetch() 라는 최신 문법 쓰기

// axios 같은 외부 라이브러리 쓰기

//=> axios 를 써보자.   


axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = "https://codingapple1.github.io/shop/data2.json";
export const AxiosEx01 = () => {

    let [prosobj, setProsobj] = useState([])


    //  axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    // src/setupProxy.js


    //여기 파트는 설정이좀 애매하다.
    //그러니 넘긴다.
    // 지금 리엑트 포트에서만 어떻게 cors 처리 할수가없음
    //노드제이에느 서버등 그런게 필요함
    //아마 코딩애플에서 뭔가 막아둔듯... 나만 접근이 불가함....



    //이놈은 다이렉트로 요청하면 불가능이고, 익스프레스 서버를 거처야 가능
    /// 가능하게 하고 싶으면 axiosserver.js 의 http://localhost:4000/data2.json url로 수정해라
    const ClickAixos = async () => {

        axios("http://localhost:8000/data2.json").then((result) => {




            result.data.map((obj, i) => {
                console.log(obj)
                prosobj.push(obj);

            })
            setProsobj(prosobj);




        }).catch(() => {

            console.log("뭔가잘못됨")

        })








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
        <button onClick={ClickAixos}>버튼</button>
        <button onClick={ClickAixos2}>버튼</button>
        {prosobj = !null ?
        
        prosobj.map((obj, index) => {

            return (<>
            <h1 className={index}>상품명{obj.title}</h1>
            <h1 className={index}>상품내용{obj.content}</h1>
            <h1 className={index}>상품가격{obj.price}</h1>
            </>
            
            );
        }
        ) 
        : 
        null
        }

    </>)

}