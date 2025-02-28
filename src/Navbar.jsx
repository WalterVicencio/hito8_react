import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import imgpizza from './assets/img/pizza.png';
import imgcarro from './assets/img/carro.png';
import imgabierto from './assets/img/abierto.png';
import imgcerrado from './assets/img/cerrado.png';
import imgcerrado_llave from './assets/img/cerrado_llave.png';
import { useContext } from 'react';
import { CartContext } from './Context/CartContext';



const Navbarr = () => {


    const total = 25000;
    const {token, setToken} = useContext(CartContext);
    console.log(token)
    return(
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" style={{color: "white"}}>Pizzeria Mama Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Button variant="outline-light"><img src={imgpizza} style={{width:20}}></img>Home</Button>{' '}</Nav.Link>
            <Nav.Link href="#features"><Button onClick={() => setToken(true)} variant="outline-light"><img src={token==false ? imgcerrado_llave : imgabierto} style={{width:20}}></img>Login</Button>{' '}</Nav.Link>
            {token==true ? <Nav.Link href="#features"><Button variant="outline-light"><img src={imgcerrado_llave} style={{width:20}}></img>Register</Button>{' '}</Nav.Link> : <Nav.Link href="#features"><Button onClick={() => setToken(false)} variant="outline-light"><img src={imgcerrado} style={{width:20}}></img>Logout</Button>{' '}</Nav.Link>}
            
          </Nav>
          <Nav>
            <Nav.Link href="#features"><Button variant="outline-info"><img src={imgcarro} style={{width:20,marginRight:5}}></img>Total: ${total.toLocaleString("de-DE")}</Button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ) 
}

export default Navbarr;