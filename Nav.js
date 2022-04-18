import Navbar from "react-bootstrap/Navbar"
import React,{Component} from "react"
import Container from "react-bootstrap/Container"
import "./style.css";
function Nav() {
  return(
    <>

    <Navbar className="barra-principal">
      <Container className="containerNavbar" variant="light" style={{  padding: 10 }} >
        <Navbar.Brand href="/"  style={{marginLeft:"-10%"}}>        
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
}
export default Nav;