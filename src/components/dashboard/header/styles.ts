import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  position: sticky;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1900px) / 2);
  border-bottom: 3px solid #DE80B0;
  height: 100%;
  z-index: 10;
`;

export const Logo = styled.div`
  display: block;
  img {
    width: 200px;
  }
`;

export const Disconnect = styled.h1`
  color: #44a3d9;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #DE80B0;
    transition: 0.1s ease-in-out;
    transform: scale(1.02);
  }
`;
