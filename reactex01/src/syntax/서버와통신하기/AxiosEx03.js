import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';




export const AxiosEx03 = () => {

    let [prosobj, setProsobj] = useState([])
    let [prosopen, setProsopen] = useState(false)
    let [list, setList] = useState(1);

    //숙제 애플코딩이 제공하는
    
    //http://localhost:4000/data2.json
    //http://localhost:4000/data3.json

    // 이렇게 2개의 데이터를 각각 받아오고
    // 더보기를 클릭시 2번 까지만 출력하고
    // 더보기 3번이상은  중복으로 출력이 않되고 접기 버튼 도 활성화해보자.


    let morearray = [...prosobj]

    const ClickAixos = async () => {


        if (list >= 1 && list < 3) {
            axios("http://localhost:4000/data" + `${list}` + ".json").then((result) => {

                result.data.map((obj, i) => {
                    morearray.push(obj);

                })
                setProsobj(morearray);
                setProsopen(true);
                setList(list + 1);

                console.log(morearray)
            }).catch(() => {
                console.log("뭔가잘못됨")
            })


        } else if (list >= 3) {
            console.log("2보다크거나같다.")
            let close = [];
            setProsobj(close);

        }





    }

    return (<>

        {list >= 3 ? <button onClick={ClickAixos}>접기</button>
            :
            <button onClick={ClickAixos}>상품더보기</button>}


        {prosobj = !null ?

            prosobj.map((obj, index) => {

                return (<>
                    <h1 className={index} style={{ color: "red" }}>상품명{obj.title}</h1>
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