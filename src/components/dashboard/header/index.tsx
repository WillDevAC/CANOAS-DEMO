import React from 'react';
import { 
  Container,
  Logo,
  Disconnect
} from './styles';

// import { Container } from './styles';

const header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="images/logo.webp" alt="" />
      </Logo>
      <Disconnect>
        Desconectar
      </Disconnect>
    </Container>
  );
}

export default header;