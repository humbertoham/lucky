import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faFacebook, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper id="Contactanos">
      <Container>
        
        <Text>
          <h1><a href="https://wa.me/528992051743">Whatsapp: +52 899 205 1743 </a></h1>
        </Text>

        <Text><h1><a href="https://wa.me/528992051743"><FontAwesomeIcon className="pin" size="2x" icon={faWhatsapp}/> </a> <a href="https://www.facebook.com/profile.php?id=100088437832132"><FontAwesomeIcon className="pin" size="2x" icon={faFacebook} />{" "}</a> </h1>{" "}</Text>
        
    
        <iframe className="map"  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100088437832132&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"  ></iframe>
     
           
            
        

           
            
          
       
      </Container>
    </Wrapper>
  );
};

export default Contact;