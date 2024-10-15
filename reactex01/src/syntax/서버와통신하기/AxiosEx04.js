import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';





const Loding=styled.div`


position: fixed;

top:600px;
left:300px;
background-color: red;
height: 600px;


`





export const AxiosEx04 = () => {

    let [prosobj, setProsobj] = useState([])
    let [prosopen, setProsopen] = useState(false)
    let [list, setList] = useState(1);
    let [loding, setLoding] = useState(false);

    //숙제 
    //버튼을 누른 직후엔 "로딩중입니다" UI띄우기
   //요청이 성공하거나 실패하면 없애고 성공 직전에만 띄우기


    let morearray = [...prosobj]

    const ClickAixos = async () => {
        console.log(list);
        setLoding(true)
        if (list >= 1 && list < 3) {
            axios("http://localhost:4000/data" + `${list}` + ".json").then((result) => {

                result.data.map((obj, i) => {
                    morearray.push(obj);

                })
                setProsobj(morearray);
                setProsopen(true);
                setList(list + 1);

           
                setLoding(false)
            }).catch(() => {
                setLoding(false)
                console.log("뭔가잘못됨")
            })


        } else if (list >= 3) {
          
            setList(1);
            setLoding(false)
            console.log("3보다크거나같다.")
            let close = [];
            setProsobj(close);
        }





    }

    return (<>

        {list >= 3 ? <button onClick={ClickAixos}>접기</button>
            :
            <button onClick={ClickAixos}>상품더보기</button>}

{loding?  <Loding >로딩중이다자식다.</Loding> :null}
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