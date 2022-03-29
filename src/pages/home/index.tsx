import React, { useState } from "react";

import Navbar from '../../components/header'
import Sidebar from '../../components/sidebar'

const home: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  );
};

export default home;
