import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
  background-color: #00a99d;
`;

export const Baby = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  border: 10px solid white;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const TurmaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;

export const Description = styled.p`
  color: white;
  text-align: center;
  padding-bottom: 15px;
  font-size: 1rem;
`;

export const TurmaSection = styled.div`
  display: flex;
  
  @media screen and (max-width: 460px) {
    flex-wrap: wrap;
  }
`;

export const TurmaDiv = styled.div`
  display: flex;
  margin: 30px;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100%;
  }
`;
