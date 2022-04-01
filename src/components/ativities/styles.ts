import styled from 'styled-components';

export const Container = styled.div`
  background-color: #26C7D9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  flex-direction: column;

  h1{
      margin-top: 3rem;
      margin-bottom: 2rem;
  }
`;

export const Box = styled.div `
    display: flex;
    height: 75%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    padding: 10px;
`;

export const CardImageTop = styled.div `
    display: flex;
    height: 90%;
    width: 30%;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        height: 75%;
    }

    p{
        margin-top: 2rem;
        font-size: 1.3rem;
    }

`

