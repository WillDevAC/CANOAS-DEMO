import React from 'react';

import {
  Aside,
  MenuBook,
  RulerPencil,
  Gallery
 } from './styles';

const aside: React.FC = () => {
  return (
    <Aside>
      <h1>Seções</h1>
      <p><MenuBook/>Cardápios</p>
      <p><RulerPencil/>Extras</p>  
      <p><Gallery/>Galeria</p>
    </Aside>
  );
}

export default aside;