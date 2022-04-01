import styled from 'styled-components';

interface Props { //Definição da prop
  color : string;
  align_self: string; //tem que ser com underline
}


export const Title = styled.h1<Props>`
  width: 100%;
  padding-left: 9%;
  display: flex;
  font-family: 'Lobster Two', cursive;
  font-size: 2.5rem;
  color: black;
  align-self: ${props => props.align_self == 'left' ? 'left' : 'center'};
  padding-bottom: 1rem;
  color: ${props => props.color /*Propriedade*/ == 'primary' ? '#DE80B0' : 'white'}; //Condição pro input da prop

  @media screen and (max-width: 1280px) {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
