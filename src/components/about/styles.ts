import styled from 'styled-components';

export const Grid = styled.div`
  padding-top: 3%;
  display: grid;
  min-height: 10rem;

  grid-template-columns: 4fr 5fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }
`;

export const About = styled.div`
  background-color: #FFF;  
  padding: 30px 50px;
  @media screen and (max-width: 768px) {
    padding: 30px 30px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-start;

  justify-content: center;
  align-items: center;

  height: 18%;

  img{
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  color: black;
  text-align: justify;
  padding-bottom: 2%;
  width: 80%;
  font-size: 1.1rem;
  padding-top: 2%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 2%;
`;

export const BtnRed = styled.a`
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: red;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #46A4DA;
    color: white;
  }

`;

export const BtnGreen = styled(BtnRed)`
  background-color: green;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #46A4DA;
    color: white;
  }

`;