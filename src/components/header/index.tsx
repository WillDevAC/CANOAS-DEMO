import React from 'react';

import {
  Nav,
  NavLink,
  Hamburger,
  Calendar,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo
} from './styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo href='/'>
          <img src="images/logo.webp" alt="Logo algodão doce canoas" />
        </NavLogo>
        <Hamburger/>
        <NavMenu>
          <NavLink activeStyle>
            Home
          </NavLink>
          <NavLink activeStyle>
            Para o seu filho
          </NavLink>
          <NavLink activeStyle>
            Sobre nós
          </NavLink>
          <NavLink activeStyle>
            Turmas
          </NavLink>
          <NavLink activeStyle>
            Contatos
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>
          <Calendar/> Agende sua visita
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;