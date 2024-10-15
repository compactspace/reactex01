import React from "react";

import { useEffect } from "react";



export const XSSEx01 = () => {   

useEffect(()=>{

    const searchInput = document.querySelector("#search-input");
    const submitButton = document.querySelector("#submit-button");
    const searchInputResult = document.querySelector("#search-input-result");
     const urlParams = new URLSearchParams(window.location.search);

     submitButton.addEventListener("click", submitSearchInput);
    function submitSearchInput() {
        searchInputResult.innerHTML = searchInput.value;

    }


},[])

//<img src='x' onerror='alert(window.localStorage.getItem("userId"))' >
//<script>alert("병신")</script>
    return (
        <>
            <h1>insecure website</h1>
            <div>
                <label>검색</label>
                <input type="text" id="search-input" />
                <button id="submit-button">확인</button>
            </div>

            <div>
                <span>검색값: </span>
                <span id="search-input-result"></span>
            </div>



        </>


    );


}