import React, { useState } from "react";

import Slider from '../../components/slider'

import About from '../../components/about'

import Classes from "../../components/classes";

import Informations from "../../components/informations";

import Galary from '../../components/galery'

import After_Hours from '../../components/after-hours'

import LayoutFragment from "../../components/layout";

const home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LayoutFragment>
        <Slider/>
        <About/>
        <Galary/>
	      <Informations/>
        <Classes/>
        <After_Hours/>
      </LayoutFragment>
    </>
  );
};

export default home;
