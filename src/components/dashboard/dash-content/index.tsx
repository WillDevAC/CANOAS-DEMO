import React from 'react';

import { InfoContainer } from './styles';

import Card from '../card'; //Componente de estilo põe chave

const dash_content: React.FC = () => {
  return (
    <InfoContainer>
      <Card Title="Title1" Date="15/12/2003" Link="https://www.google.com"/>
      <Card Title="Title1" Date="15/12/2003" Link="https://www.google.com"/>
      <Card Title="Title1" Date="15/12/2003" Link="https://www.google.com"/>
    </InfoContainer>
  );
}

export default dash_content;