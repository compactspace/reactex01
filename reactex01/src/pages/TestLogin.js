
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const TestLogin = () => {
    let navi = useNavigate();


    let id;
    const Chnage = () => {
        id = document.getElementById('ids').value;

    }

    const Login = () => {
        if (id != undefined && id != null) {


            axios.get('http://10.0.2.2:4000/testlogin?id=' + id).then((res) => {

                alert("왓더퍽")
                if (res.data.status != -1) {
                    window.localStorage.setItem("id", id);

                    if (res.data.teacher != null && res.data.teacher != undefined) {
                        window.localStorage.setItem("teacher", "teacher");
                        window.localStorage.setItem("onedayclass_num",3);                        
                        navi('/openclass');
                        return;
                    }
                    navi('/main2')

                } else {
                    alert("아이디는 신원찬 과 큐티민지 뿐입니다.!")

                }


            }).catch((err)=>{
                alert(JSON.stringify(err));
            })



            // axios.get('http://localhost:4000/testlogin?id=' + id).then((res) => {

            //     if (res.data.status != -1) {
            //         window.localStorage.setItem("id", id);

            //         if (res.data.teacher != null && res.data.teacher != undefined) {
            //             window.localStorage.setItem("teacher", "teacher");
            //             window.localStorage.setItem("onedayclass_num",3);                        
            //             navi('/openclass');
            //             return;
            //         }
            //         navi('/main2')

            //     } else {
            //         alert("아이디는 신원찬 과 큐티민지 뿐입니다.!")

            //     }


            // })

        }

    }

    return (<>
        <div>
            <input id='ids' type="text" onChange={Chnage}></input>
            <button onClick={Login}>로그인</button>
        </div>

    </>);


}
