import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
// import {FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import FooterPagina from "./Footer";
import logo from "../images/logoKarla.png"
// import { useState } from "react";


const NavBarKarla = () => {

  // let boxClass = ["main-menu menu-right menuq1"];
  // if(isMenu) {
  //   boxClass.push ('menuq2');
  // }else {
  //   boxClass.push('');
  // }

  // let boxClassSubMenu = ["sub_menus"];
  // if(isMenuSubMenu) {
  //   boxClassSubMenu.push('sub_menus_Active');
  // }else {
  //   boxClassSubMenu.push('');
  // }

  // const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  // const toggleSubMenu = () => {
  //   setMenuSubMenu(isMenuSubMenu === false ? true : false);
  // };

  return (
    <>
    <div className="contenedor justify-content-between">
    <div className="text-start">
        
          </div> 
      <Navbar className="navBar" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/" >
             <img alt="logo"src={logo} className="imagenLogo"/>
          </Navbar.Brand>
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main-nav me-auto fw-bold fs-5">
            <Nav.Link className="navBar1 text-white" as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/NuestraClinica">Nuestra Clínica</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/SobreMi">Sobre Nosotros</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/NuestrosTratamientos">Nuestros Tratamientos</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/Contacto">Contacto</Nav.Link>
          
          </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>  

      <section>
        <Outlet></Outlet>
      </section>

      <FooterPagina/>
      
    </div>
    </>
  );
}

export default NavBarKarla;