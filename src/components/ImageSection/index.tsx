import React from 'react';
import { FaFileExcel } from 'react-icons/fa';
import Slider from 'react-slick';

import { settings } from '../../utils/galleryslider';

import { Container, ImgContainer } from './styles';

const ImageSection: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        <ImgContainer>
          <img src="http://placekitten.com/300/300" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="http://placekitten.com/300/300" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="http://placekitten.com/300/300" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="http://placekitten.com/300/300" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="http://placekitten.com/300/300" alt="" />
        </ImgContainer>
      </Slider>
    </Container>
  );
}
    
export default ImageSection;