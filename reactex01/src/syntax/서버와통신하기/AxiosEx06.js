import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Loding = styled.div`
position: fixed;
top:600px;
left:300px;
background-color: red;
height: 600px;

`
export const AxiosEx06 = () => {

    const [classinof, setClassinfo] = useState(null);
    const [infokey, setInfokey] = useState(null);
    let key;
    let resultobj;
    useEffect(() => {
        axios.get("http://localhost:4000/noneuser/openclassinfo")
            .then((result) => {
                //어짜피 컬럼명은 다 동일하니 result.data[0] 으로 해도 괜찬 ㅎ
                key = Object.keys(result.data[0]);
                resultobj = result.data
                setClassinfo(resultobj);
                setInfokey(key)

                resultobj.map((obj, index) => {

                    return (key.map((obj2, index2) => {
                        console.log(obj[obj2]);
                    }));

                })




            }).catch(() => {
                console.log("뭔가 좆망")
            })


    }, [])

    // console.log(classinof);
    // console.log(infokey);
    return (<>

{classinof !=null ?

<>
{

classinof.map((obj, index) => {

    return (infokey.map((obj2, index2) => {
        return <h1>{obj[obj2]}</h1>
    })
);
})


}


</>

:null}


    </>)

}