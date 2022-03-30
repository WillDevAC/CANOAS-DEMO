import styled from 'styled-components';


export const SliderItem = styled.div`

  text-align: center;
  display: flex;

  justify-content: center;

  img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  text-align: center;
  }

  @media(max-width: 800px) {
   height: auto;
  }

`;
