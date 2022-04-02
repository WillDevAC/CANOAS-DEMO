import React from 'react';

import { Container, Logo, Icons } from './styles';

import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa';

const footer: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="images/logo.webp" alt="" />
      </Logo>
      <Icons>
        <a href="https://web.facebook.com/escolainfantilalgodaodoceemcanoas" target="__BLANK"><FaFacebookF/></a>
        <a href="https://www.instagram.com/escolaalgodaodocecanoas" target="__BLANK"><FaInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=5551994783328&text=Olá gostaria de falar com vocês." target="__BLANK"><FaWhatsapp/></a>
      </Icons>
    </Container>
  );
}

export default footer;