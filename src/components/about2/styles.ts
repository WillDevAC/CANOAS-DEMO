import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  margin: 0 40px;

  @media screen and (max-width: 1280px) {
    flex-wrap: wrap;
    padding: 10px 0;
    margin: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1280px) {
    margin: 20px 40px;
    img {
      display: none;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    padding: 0 40px;
    border-radius: 50%;
  }
`;

export const About = styled.div`
  
`;