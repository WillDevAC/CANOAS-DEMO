import React from 'react';

import { Container, Content } from './styles';

const after_hours: React.FC = () => {
  return (
    <Container>
      <Content bg_align="center">
        <img src="#" alt="Bebê feliz" />
      </Content>
      <Content bg_align="default"> 
        <p>Conteúdo</p>
      </Content>
    </Container>
  );
}

export default after_hours;