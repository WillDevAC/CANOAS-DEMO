import styled from 'styled-components';

interface Props { //Definição da prop
  color : string;
}

export const Title = styled.h1<Props>`
  font-family: 'Lobster Two', cursive;
  font-size: 2.5rem;
  color: black;
  padding-bottom: 1rem;
  color: ${props => props.color /*Propriedade*/ == 'primary' ? '#DE80B0' : 'white'}; //Condição pro input da prop

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  color: black;
  text-align: justify;
  padding-bottom: 2%;
  width: 80%;
  font-size: ${props => props.color == 'primary' ? '1.2rem' : '1rem'};
  padding-top: 2%;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

