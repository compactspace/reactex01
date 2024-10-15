import React, { useEffect, useState } from "react";

import { OneDayClassBody } from "../component/onedayclassbodycomponent/onedaybody";
import { useHistory, useParams } from 'react-router-dom'

import axios from "axios";


import oneday11 from '../img2/oneday11.jpg'
import oneday12 from '../img2/oneday12.jpg'
import oneday13 from '../img2/oneday13.jpg'
import oneday14 from '../img2/oneday14.jpg'
import oneday15 from '../img2/oneday15.jpg'
import oneday16 from '../img2/oneday16.jpg'
import oneday17 from '../img2/oneday17.jpg'




import oneday21 from '../img2/oneday21.jpg'
import oneday22 from '../img2/oneday22.jpg'
import oneday23 from '../img2/oneday23.jpg'
import oneday24 from '../img2/oneday24.jpg'
import oneday25 from '../img2/oneday25.jpg'
import oneday26 from '../img2/oneday26.jpg'
import oneday27 from '../img2/oneday27.jpg'






import oneday31 from '../img2/work_img1.jpg'
import oneday32 from '../img2/work_img2.jpg'
import oneday33 from '../img2/work_img3.jpg'
import oneday34 from '../img2/work_img4.jpg'
import oneday35 from '../img2/work_img5.jpg'
import oneday36 from '../img2/work_img6.jpg'
import oneday37 from '../img2/work_img7.jpg'



import oneday42 from '../img2/oneday41.jpg'
import oneday43 from '../img2/oneday42.jpg'
import oneday44 from '../img2/oneday43.jpg'
import oneday45 from '../img2/oneday44.jpg'
import oneday46 from '../img2/oneday45.jpg'
import oneday47 from '../img2/oneday46.jpg'


import oneday51 from '../img2/oneday51.jpg'
import oneday52 from '../img2/oneday52.jpg'
import oneday53 from '../img2/oneday53.jpg'
import oneday54 from '../img2/oneday54.jpg'
import oneday55 from '../img2/oneday55.jpg'
import oneday56 from '../img2/oneday56.jpg'
import oneday57 from '../img2/oneday57.jpg'



axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
 axios.defaults.baseURL = "https:192.168.0.52:4000";

export const OneDayClasspage = () => {


    let oneday41 = "https://videos.pexels.com/video-files/17486817/17486817-uhd_2560_1440_60fps.mp4";

    const [vmatch, setVmatch] = useState(false);
    const [fordb, setFordb] = useState(null);


    // 아래 훅은 옆의 윈도우객체로 받고 쌩쇼를 해야 원하는걸 뽑는걸 console.log(window.location.pathname)
    // 간단히 해주는 훅인듯
    let { id } = useParams();


    let data = { onedayclass_num: id };
    let detailinfoarr;
    useEffect(() => {
        axios
            .post("/noneuser/OneDayClasspage", JSON.stringify(data), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => {

                let OneDayclassinfoObj = res.data[0];

                //console.log(OneDayclassinfoObj);
                detailinfoarr = OneDayclassinfoObj.onedayclass_info.split('_');

                let fordbobj = {
                    onedayclass_name: OneDayclassinfoObj.onedayclass_name,
                    onedayclass_num: OneDayclassinfoObj.onedayclass_num,
                    onedayclass_price: OneDayclassinfoObj.onedayclass_price,
                    onedayclass_useTime: detailinfoarr[2]
                }


                // console.log(fordbobj);

                setFordb(fordbobj);
                setOnedayinfo(detailinfoarr);


            });
    }, [])

    const [paramid, setParamid] = useState([0, 1, 2,3,4]);

    // console.log(id == paramid[id])


    const [onedayimg, setOnedayimg] = useState([oneday11, oneday12, oneday13, oneday14, oneday15, oneday16, oneday17])

    const [onedayimg2, setOnedayimg2] = useState([oneday21, oneday22, oneday23, oneday24, oneday25, oneday26, oneday27])

    const [onedayimg3, setonedayimg3] = useState([oneday31, oneday32, oneday33, oneday34, oneday35, oneday36, oneday37]);

    const [onedayimg4, setonedayimg4] = useState([oneday41, oneday42, oneday43, oneday44, oneday45, oneday46, oneday47]);

    const [onedayimg5, setonedayimg5] = useState([oneday51, oneday52, oneday53, oneday54, oneday55, oneday56, oneday57]);


    const [onedayinfo, setOnedayinfo] = useState(["--불러오는중--"])




    const [dayinfo, setDayinfo] = useState({
        0: ["10자리", "11:00~12:00", "10자리", "2:00~3:00", "마감", "4:00~6:00"],
        1: ["1자리", "11:00~12:00", "1자리", "2:00~3:00", "10자리", "4:00~6:00"],
        2: ["22자리", "11:00~12:00", "2자리", "2:00~3:00", "10자리", "4:00~6:00"],
        3: ["13자리", "11:00~12:00", "4자리", "2:00~3:00", "오후 10시반 마감", "4:00~6:00"],
        4: ["15자리", "11:00~12:00", "11자리", "2:00~3:00", "11자리", "4:00~6:00"],
        5: ["11자리", "11:00~12:00", "7자리", "2:00~3:00", "14자리", "4:00~6:00"]

    }
    )


    let imgarray = [onedayimg, onedayimg2, onedayimg3,onedayimg4,onedayimg5];


    useEffect(() => {

        //네브바 색 반전은 뷰포트 기준 1320 부터 걸자.
        window.addEventListener('scroll', e => {

            // console.log(`ScrollY 는 뷰포트 기준->>> ${window.scrollY}`)
            if (window.scrollY >= 1320) {
                setVmatch(true)
            } else { setVmatch(false) }
        }

        );// 윈도우 이벤트 리스너 종료


    }, [vmatch])// 유즈이펙트 종료





    // window.onload = () => {


    //     let imgs = document.getElementsByClassName("imgs");
    //     let deep1 = [...choiceimg]
    //     // let deep2=[...choiceclick]
    //     for (let k = 0; k < imgs.length; k++) {

    //         imgs[k].addEventListener('click', () => {

    //             deep1[0] = k;
    //             setChoiceimg(deep1);

    //         })
    //         // deep2[k]=imgs[k]

    //     }

    //     // setChoiceclick(deep2);
    // }


    // console.log(choiceclick)


    // useEffect(() => {

    //     let deep1 = [...choiceimg]

    //     deep1 = []
    //     setChoiceimg(deep1);
    // }, [choiceimg])



    return (<>

        {id == paramid[id] ?
            <OneDayClassBody onedayclass_num={id} vmatch={vmatch} fordbobj={fordb} onedayimg={imgarray[id]} onedayinfo={onedayinfo} dayinfo={dayinfo} >
            
            
            </OneDayClassBody>

            :
            <>
                <h1>잘못들어옴 ㅅㄱ</h1>
            </>}
        {/* <OneDayClassBody vmatch={vmatch} onedayimg={onedayimg} >

        </OneDayClassBody> */}

    </>)


}
