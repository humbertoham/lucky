import React from "react";
import { Content, Wrapper, Red } from "./Foot.styles";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Foot = () => (
  <Wrapper>
    <Content>
      <Red href="https://www.facebook.com/profile.php?id=100088437832132">
        <FontAwesomeIcon icon={faFacebookF} />
      </Red>
      <p>© Copyright 2023 Lucky Reynosa</p>
    </Content>
  </Wrapper>
);

export default Foot;