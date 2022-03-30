import styled from 'styled-components';

export const About = styled.div`
  background-color: #FFF;  
  padding: 30px 100px;

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
  }
`;

export const Grid = styled.div`
  display: grid;
  min-height: 15.625rem;
  grid-template-columns: 4fr 5fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2.5rem;
  color: black;
  padding-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: black;
  text-align: justify;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const BtnRed = styled.a`
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: red;
`;

export const BtnGreen = styled(BtnRed)`
  background-color: green;
  margin-left: 10px;
`;