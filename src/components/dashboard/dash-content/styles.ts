import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px;
  gap: 30px;

  @media screen and (max-width: 985px) {
    justify-content: center;
  }

  @media screen and (max-width: 685px){
    flex-direction: column;
  }

`;
