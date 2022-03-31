import React from "react";
import { FaFileExcel } from "react-icons/fa";
import Slider from "react-slick";

import { settings } from "../../utils/galleryslider";

import { Container, SectionImg} from "./styles";

const ImageSection: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
      </Slider>
    </Container>
  );
};

export default ImageSection;
