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
            About
          </NavLink>
          <NavLink href='/services' activeStyle>
            Services
          </NavLink>
          <NavLink href='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink href='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Agende sua visita</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;