import React, { useState } from "react";

import Navbar from '../../components/header'
import Sidebar from '../../components/sidebar'
import About from "../../components/about";
import ImageSection from "../../components/ImageSection";

const home: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <About></About>
      <ImageSection></ImageSection>
    </>
  );
};

export default home;
