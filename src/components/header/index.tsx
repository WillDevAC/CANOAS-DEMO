import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink href='/'>
          <p>LOGO</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink href='/about' activeStyle>
            Home
          </NavLink>
          <NavLink href='/services' activeStyle>
            Para o seu filho
          </NavLink>
          <NavLink href='/contact-us' activeStyle>
            Sobre nós
          </NavLink>
          <NavLink href='/sign-up' activeStyle>
            Turmas
          </NavLink>
          <NavLink href='/sign-up' activeStyle>
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