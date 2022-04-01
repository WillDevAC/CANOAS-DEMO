import React from 'react';

import { 
  Container,
  Header,
  Logo,
  Disconnect,
  Hamburger,
  Aside,
  Gallery,
  MenuBook,
  RulerPencil
} from './styles';

const header: React.FC = () => {
  return (
    <Container>
      <Aside>
        <h1>Seções</h1>
        <p><MenuBook/>Cardápios</p>
        <p><RulerPencil/>Extras</p>
        <p><Gallery/>Galeria</p>
      </Aside>
      <Header>
        <Logo>
          <img src="images/logo.webp" alt="" />
        </Logo>
        <Hamburger/>
        <Disconnect>
          Desconectar
        </Disconnect>
      </Header>
    </Container>
  );
}

export default header;