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
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaWhatsapp/></a>
      </Icons>
    </Container>
  );
}

export default footer;