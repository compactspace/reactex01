import React from "react";
import styled, { css } from 'styled-components'
import { useState } from "react";

import { Modal } from '../../syntax/동적ui모달창/ModalEx01'

export const ModalMain = () => {

    const [modal, setModal] = useState(false);




    const ModalOpen = () => {

        if (!modal) {
            setModal(true);

        } else {

            setModal(false);
        }

    }


    return (<>

        <h1 onClick={ModalOpen}>
            클릭해보렴
            {
                modal ? <Modal></Modal>

                    : null
            }

        </h1>
    </>);


}