import React, { useState } from "react";

import Slider from '../../components/slider'
import About from '../../components/about'

import About2 from "../../components/about2";

import SectionImage from '../../components/ImageSection'
import SectionTurm from '../../components/TurmSection'

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
        <SectionImage/>
        <SectionTurm/>
	      <About2/>
      </LayoutFragment>
    </>
  );
};

export default home;
