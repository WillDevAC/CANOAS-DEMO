import React from 'react';

import { Title } from '../../templates/home/styles';

import { Container, ImgGallery, ImgGrid } from './styles';

const ImageSection: React.FC = () => {
  return (
    <Container>
      <ImgGallery>
        <ImgGrid>
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
          <img src="images/1200.jpg" alt="place kitten" />
        </ImgGrid>
      </ImgGallery>
    </Container>
  );
}

export default ImageSection;