import React, { useState } from "react";

import Slider from '../../components/slider'

import About from '../../components/about'

import Classes from "../../components/classes";

import Informations from "../../components/informations";

import Galary from '../../components/galery'

import After_Hours from '../../components/after-hours'

import Ativities from '../../components/ativities'

import LayoutFragment from "../../components/layout";

const home: React.FC = () => {
  return (
    <>
      <LayoutFragment>
        <Slider/>
        <About/>
        <Galary/>
	      <Informations/>
        <Classes/>
        <After_Hours/>
        <Ativities/>
      </LayoutFragment>
    </>
  );
};

export default home;
