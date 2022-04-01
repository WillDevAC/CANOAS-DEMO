import React from "react";

import { Container, Box, CardImageTop } from "./styles";

const activities: React.FC = () => {
  return (
    <Container>
      <h1>ATIVIDADES EXTRAS</h1>
      <Box>
        <CardImageTop>
          <img src="images/ativitie1.png" alt="Bebê" />
          <p>Ballet</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/ativitie2.png" alt="Bebê" />
          <p>Ginástica</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/ativitie3.png" alt="Bebê" />
          <p>Capoeira</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/ativitie4.png" alt="Bebê" />
          <p>Idiomas</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/ativitie5.png" alt="Bebê" />
          <p>Informática</p>
        </CardImageTop>
      </Box>
    </Container>
  );
};

export default activities;
