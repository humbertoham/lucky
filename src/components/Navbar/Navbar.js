import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from "../../images/logo.svg";

function NavB() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg'>
      <Container>
        <Navbar.Brand href="/"><img src={image} className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml ">
            <Nav.Link className='cl' href="/">Inicio</Nav.Link>
            <Nav.Link className='cl' href="#Preguntas">Preguntas frecuentes</Nav.Link>
            <Nav.Link className='cl' href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link className='cl' href="#Contactanos">Contáctanos</Nav.Link>
            <Nav.Link className='cl' href="/Boletos">Comprar boletos</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;