import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import { BsFillCalendar2CheckFill } from 'react-icons/bs'

export const Title = styled.h1`
  color: white;
`;

export const Nav = styled.nav`
  background: white;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 10;
`;

export const NavLink = styled.a`
  color: black;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  img {
    height: 64px;
  }

  &:hover {
    color: #DE80B0;
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
  }

  @media screen and (max-width: 1180px) {
    padding: 0 1rem;
  }
`;

export const Calendar = styled(BsFillCalendar2CheckFill)`
  margin-right: 10px;
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 985px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 985px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 985px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  border-radius: 4px;
  background: #DE80B0;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transform: scale(1.03);
  }
`;