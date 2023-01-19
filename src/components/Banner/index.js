import React from "react";
import { useEffect } from "react";
import { Container, Wrapper, Text, CardButton } from "./Banner.styles";
import image from "../../images/banner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text data-aos="fade-up">
        <CardButton>COMPRAR BOLETOS</CardButton>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Banner;