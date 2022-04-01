import React, { useState } from "react";

import Slider from "react-slick";

import { settings } from "../../utils/galleryslider";

import { Container, SectionImg} from "./styles";

const Gallery: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        <SectionImg>
          <img src="images/galery1.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery2.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery3.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery4.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery5.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery6.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery7.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/galery8.png" alt="Imagem escola algodão doce" />
        </SectionImg>
      </Slider>
    </Container>
  );
};

export default Gallery;
