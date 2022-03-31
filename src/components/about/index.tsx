import React from 'react';

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

  import { Title } from '../../templates/home/styles';
const about: React.FC = () => {
  return (
    <>
      <About>
        <Grid>
          <Image>
            <img src="images/cover.webp" alt="" />
          </Image>
          <Text>
            <Title color="primary">Sobre o Algodão Doce</Title>
            <Paragraph>
              Nossa escola possui uma equipe especializada e com constante treinamento com foco
              no desenvolvimento infantil. Atendemos turmas reduzidas, o que permite um olhar muito
              mais próximo e atencioso para cada criança. Nossa abordagem educacional parte do Aprender
              Brincando para desenvolver as diferentes habilidades (intelectuais, emocionais, motoras e sociais),
              contribuindo para a expensão das suas capacidades de comunicação, autonomia, interação social, domínio do espaço
              físico e do próprio corpo, pensamento, ética e estética.
            </Paragraph>
            <ButtonContainer>
              <BtnPink>Agende sua visita</BtnPink>
              <BtnBlue>Nossa história</BtnBlue>
            </ButtonContainer>
          </Text>
        </Grid>
      </About>
    </>
  );
}

export default about;