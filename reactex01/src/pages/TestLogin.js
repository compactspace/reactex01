
import axios from "axios"
import { useNavigate } from "react-router-dom";
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
 // axios.defaults.baseURL = "http://localhost:3000";
export const TestLogin = () => {
    let navi = useNavigate();


    let id;
    const Chnage = () => {
        id = document.getElementById('ids').value;

    }

    const Login = () => {

     
        
        if (id != undefined && id != null) {


            axios.get('http:192.168.0.52:4000/testlogin?id=' + id).then((res) => {

                alert("?")
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
                    alert("아디디는 신원찬 이라니깐?");

                }


            }).catch((err)=>{
               alert(JSON.stringify(err));
            })

// const PROXY ='/proxy';

//   let data={"id":id};

//             let headers={"content-type":"applcation/json"}

           
//  axios.post('http://localhost:4000/testlogin2',data,{headers}).then((res) => {

               
                
//                 if (res.data.status != -1) {
//                     window.localStorage.setItem("id", id);

//                     if (res.data.teacher != null && res.data.teacher != undefined) {
//                         window.localStorage.setItem("teacher", "teacher");
//                         window.localStorage.setItem("onedayclass_num",3);                        
//                         navi('/openclass');
//                         return;
//                     }
//                     navi('/main2')

//                 } else {
//                     alert("아이디는 신원찬 과 큐티민지 뿐입니다.!")

//                 }


//             }).catch((err)=>{
//                 alert(JSON.stringify(err));
//             })







            
            

        
            
            // axios.post('http://localhost:4000/testlogin2',data,{headers}).then((res) => {

                
                
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


            // }).catch((err)=>{
            //     alert(JSON.stringify(err));
            // })





            





            
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
