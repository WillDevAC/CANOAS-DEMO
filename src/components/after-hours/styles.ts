import styled from 'styled-components';

interface Props {
  bg_align: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 450px;
  background-color: white;

  align-items: center;
  justify-content: space-around;
`;


export const Content = styled.div<Props>`

  display: flex;
  background-color: red;

  height: 80%;
  width: 45%;

  justify-content: ${props => props.bg_align == 'center' ? 'center' : 'flex-start'};;
  align-items: ${props => props.bg_align == 'center' ? 'center' : 'flex-start'};;;

`;