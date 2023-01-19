import React, { useEffect } from "react";
import { Container, Wrapper, Text, Message, LogoN } from "./Section.styles";
import image from "../../images/banner.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="Nosotros">
      <Container imgUrl={image}>
        <Text>
          
          <p>¡SORTEOS ENTRE AMIGOS EN BASE A LOTERIA NACIONAL

ARRIESGA POCO Y GANA MUCHO!</p>
          
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Section;