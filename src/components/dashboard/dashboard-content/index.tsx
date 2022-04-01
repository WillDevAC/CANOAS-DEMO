import React from 'react';

import { 
  InfoContainer,
  InfoDiv,
  BtnPink
  } from './styles';

const dashboard_content: React.FC = (pageProps) => {
  return (
    <InfoContainer>
      <InfoDiv>
        <div>
          <h1>Título 1</h1>
        </div>
        <p>Postado em 31/02/2045</p>
        <BtnPink>Visualizar</BtnPink>
      </InfoDiv>
      <InfoDiv>
        <div>
          <h1>Título 2</h1>
        </div>
        <p>Postado em 31/02/2045</p>
        <BtnPink>Visualizar</BtnPink>
      </InfoDiv>
      <InfoDiv>
        <div>
          <h1>Título 3</h1>
        </div>
        <p>Postado em 31/02/2045</p>
        <BtnPink>Visualizar</BtnPink>
      </InfoDiv>
    </InfoContainer>
  );
}

export default dashboard_content;