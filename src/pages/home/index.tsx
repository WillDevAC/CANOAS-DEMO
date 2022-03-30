import React, { useState } from "react";

import About from "../../components/about";
import ImageSection from "../../components/ImageSection";

import LayoutFragment from '../../components/layout'

const home: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <LayoutFragment>


      </LayoutFragment>
    </>
  );
};

export default home;
