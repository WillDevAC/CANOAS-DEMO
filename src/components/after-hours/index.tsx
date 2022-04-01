import React from 'react';

import { Title } from '../../templates/home/styles';

import { Container, Content } from './styles';

const after_hours: React.FC = () => {
  return (
    <Container>
      <Content bg_align="center">
        <img src="images/bebefeliz.png" alt="Bebê feliz" />
      </Content>
      <Content bg_align="default">
        <Title color="primary" align_self="flex-start">Turno Inverso</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ducimus tenetur expedita, minima, corrupti, sint pariatur doloribus recusandae quidem ut voluptatum officiis obcaecati. Quo quisquam architecto cum fugiat, est, sit magnam ex blanditiis deleniti modi vel eligendi magni! Nemo eveniet veritatis magnam aspernatur ipsam repellendus temporibus iusto fugiat, quisquam quasi!</p>
      </Content>
    </Container>
  );
}

export default after_hours;