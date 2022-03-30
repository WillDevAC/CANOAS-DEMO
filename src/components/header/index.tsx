import React from 'react';
import {
  Nav,
  NavLink,
  Hamburger,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink href='/'>
          <img src="images/logo.webp" alt="Logo algodão doce canoas" />
        </NavLink>
        <Hamburger />
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
          <NavBtnLink to='/signin'>Agende sua visita</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;