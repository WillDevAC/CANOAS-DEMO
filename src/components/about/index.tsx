import React, { useState } from 'react';

import { Calendar } from '../header/styles';

import { Title } from '../../templates/home/styles';

import {
   Grid,
   Text,
   Paragraph,
   About,
   Image,
   ButtonContainer,
   BtnPink,
   BtnBlue
  } from './styles';

import Modal from '../modal'

const about = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <section id='about' className='about'>
      <About>
        <Grid>
          <Image>
            <img src="images/cover.webp" alt="" />
          </Image>
          <Text>
            <Title color="primary" align_self="left">Sobre o Algodão Doce</Title>
            <Paragraph>
              Nossa escola possui uma equipe especializada e com constante treinamento com foco
              no desenvolvimento infantil. Atendemos turmas reduzidas, o que permite um olhar muito
              mais próximo e atencioso para cada criança. Nossa abordagem educacional parte do Aprender
              Brincando para desenvolver as diferentes habilidades (intelectuais, emocionais, motoras e sociais),
              contribuindo para a expensão das suas capacidades de comunicação, autonomia, interação social, domínio do espaço
              físico e do próprio corpo, pensamento, ética e estética.
            </Paragraph>
            <ButtonContainer>
              <BtnPink onClick={() => { setOpenModal(true) }}>
                <Calendar/>Agende sua visita
              </BtnPink>
              <BtnBlue>Nossa história</BtnBlue>
            </ButtonContainer>
          </Text>
        </Grid>
      </About>
    </section>
    { openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
}

export default about;