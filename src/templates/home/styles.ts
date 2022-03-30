import styled from 'styled-components';

interface Props { //Definição da prop
  color : string;
}

export const Title = styled.h1<Props>`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2.5rem;
  color: black;
  padding-bottom: 1rem;
  color: ${props => props.color /*Propriedade*/ == 'primary' ? 'black' : 'white'}; //Condição pro input da prop

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
