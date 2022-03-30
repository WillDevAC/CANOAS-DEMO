import React, { useState } from "react";

import ImageSection from "../../components/ImageSection";

import Slider from '../../components/slider'
import About from '../../components/about'
import SectionImage from '../../components/ImageSection'

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

      </LayoutFragment>
    </>
  );
};

export default home;
