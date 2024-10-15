import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';




export const AxiosEx02 = () => {

    let [prosobj, setProsobj] = useState([])
    let [prosopen, setProsopen] = useState(false)


    //숙제 애플코딩이 제공하는 url의 데이터를 받아온후
    // 더보기 버튼을 누르면 그 데이터를 출력해보세요
    // 그리고 더보기 버튼을 계속 클릭해도 데이터가 중복으로 출력이 않되고 접기 버튼 도 활성화해보자.



    const ClickAixos = async () => {


        if (prosobj.length == 0) {
            axios("http://localhost:4000/data2.json").then((result) => {

                result.data.map((obj, i) => {
                    prosobj.push(obj);

                })
                setProsobj(prosobj);
                setProsopen(true);
            }).catch(() => {
                console.log("뭔가잘못됨")
            })


        } else if (prosobj.length > 1) {
          let closeobj=[]
          setProsobj(closeobj);
        }





    }

    return (<>

        {prosopen.length >=0 ? <button onClick={ClickAixos}>접기</button>
            :
            <button onClick={ClickAixos}>상품더보기</button>}


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