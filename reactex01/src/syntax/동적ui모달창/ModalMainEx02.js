import React from "react";
import styled, { css } from 'styled-components'
import { useState } from "react";

import {ModalEx02} from '../../syntax/동적ui모달창/ModalEx02'

export const ModalMainEx02 = () => {

    const [modal, setModal] = useState(false);



    
    const ModalOpen = () => {

        if (!modal) {
            setModal(true);

        } else {

          setModal(false);
        }

    }


    return (<>
   
        <h1 onClick={ModalOpen}>{modal ? "접기":"열기"}  </h1>
           
            {
modal  ? <ModalEx02 modal={modal}></ModalEx02>

: null

            }

       
    </>);


}