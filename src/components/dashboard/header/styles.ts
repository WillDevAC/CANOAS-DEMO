import styled from 'styled-components';

import { MdMenuBook } from 'react-icons/md';

import { BsImages } from 'react-icons/bs';

import { RiPencilRuler2Fill } from 'react-icons/ri';

import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
`;

export const Header = styled.div`
  top: 0;
  position: sticky;
  background: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1900px) / 2);
  height: 100%;
  z-index: 10;

  @media screen and (max-width: 985px) {
    
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: #44a3d9;
  width: 13%;
  height: 100vh;

  @media screen and (max-width: 985px) {
   display: none;
  }

  h1, p {
    padding: 15px;
    width: 100%;
    text-align: center;
    color: white;
    border-bottom: 1.5px solid white;
  }
  h1 {
    font-size: 1.5rem;
    background-color: #3e94c5;
  }
  p {
    display: flex;
    font-size: 1rem;

    &:hover {
      transition: 0.1s;
      font-size: 1.2rem;
      background-color: #4fb4ed;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  display: block;
  margin: 0 15px;
  img {
    width: 200px;
  }
`;

export const RulerPencil = styled(RiPencilRuler2Fill)`
  margin-right: 10px;
`;

export const Gallery = styled(BsImages)`
  margin-right: 10px;
`;

export const MenuBook = styled(MdMenuBook)`
  margin-right: 10px;
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 985px) {
    color: #DE80B0;
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Disconnect = styled.h1`
  margin: 0 15px;
  color: #44a3d9;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #DE80B0;
    transition: 0.1s ease-in-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 985px) {
    display: none;
  }
`;
