import React from 'react';

import { 
  Container,
  Header,
  Logo,
  Disconnect,
  Hamburger,
  LogOut
} from './styles';

const header: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src="images/logo.webp" alt="" />
        </Logo>
        <Hamburger/>
        <Disconnect>
          <LogOut/>
        </Disconnect>
      </Header>
    </Container>
  );
}

export default header;