import React from 'react';

import { 
    ModalBackground,
    ModalContainer,
    Title,
    Body,
    Footer,
    TitleCloseBtn
 } from './styles';

const modal = ( { closeModal } ) => {
  return (
    <ModalBackground>
        <ModalContainer>
            <TitleCloseBtn>
                <button onClick={() => closeModal(false)}> X </button>
            </TitleCloseBtn>   
            <Title>
                <h1>Are You Sure You Want To Continue</h1>
            </Title>
            <Body>
                <p>eae pô</p>
            </Body>
            <Footer>
                <button>Cancel</button>
            </Footer>
        </ModalContainer>
    </ModalBackground>
  );
}

export default modal;