import styled from 'styled-components';

export const ImgGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  & > img {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  background-color: #44a3d9;
`;
