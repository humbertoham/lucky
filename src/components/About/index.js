import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";



import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="Preguntas">
      <Content data-aos="fade-right">
        <Text>
          <h1>Lorem ipsum </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, in commodi, fuga exercitationem sint necessitatibus eum minima, molestiae eius nesciunt explicabo iste veniam ipsa ea architecto ipsum non est cupiditate nemo praesentium eligendi earum dolorum? Non vero expedita nisi ipsum, beatae earum dolorum officia suscipit accusamus nemo fuga consequatur distinctio?

          </p>
        
        </Text>
       
      </Content>

      <Content data-aos="fade-right">
       
        <Text>
          <h1>Lorem ipsum </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, in commodi, fuga exercitationem sint necessitatibus eum minima, molestiae eius nesciunt explicabo iste veniam ipsa ea architecto ipsum non est cupiditate nemo praesentium eligendi earum dolorum? Non vero expedita nisi ipsum, beatae earum dolorum officia suscipit accusamus nemo fuga consequatur distinctio?

          </p>
        </Text>
  
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Lorem ipsum </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, in commodi, fuga exercitationem sint necessitatibus eum minima, molestiae eius nesciunt explicabo iste veniam ipsa ea architecto ipsum non est cupiditate nemo praesentium eligendi earum dolorum? Non vero expedita nisi ipsum, beatae earum dolorum officia suscipit accusamus nemo fuga consequatur distinctio?

          </p>
        </Text>
       
      </Content>
    </Wrapper>
  );
};

export default About;