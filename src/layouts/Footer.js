import React from 'react'
import logo from "../images/logoKarla.png"
import { Link } from 'react-router-dom';


const FooterPagina = () => {
    return (
      <div>
          <footer className="footer row py-4">
                <nav className="flex-direction: column  col-xs-12 col-lg-6 border border-white contenedorFooter"> 
                    <div className=" col-sm-12 col-md-4 col-lg-12">
                
                    <img alt="logo"src={logo} className="imagenLogo"/> 
                    
                  
                     <p className='fs-3 fw-bold tituloFooter'>Clínica Especialista En Estetica Facial</p>
                 
                    
                     <i class="iconos fs-5 fa-solid fa-location-dot"></i>
                    <p className='fs-5 fw-bold'>Avenida Eleodoro Yáñez xxx Providencia,<br></br>Santiago</p>
                    <i class="iconos fs-5 fa-solid fa-location-dot"></i>
                    <p className='fs-5 fw-bold'>Avenida Granaderos XXX,<br></br> Calama </p>
                
                    {/* <div class=" col-sm-12 col-md-4 col-lg-3" >
                    <p className='fs-5'>Avenida Granaderos xxx</p>
                    <p className='fs-5'>Calama</p>
                    </div> */}

                        {/* <h3>Contacto</h3> */}
                        <i className="iconos telefono p-2  fs-4 fa-brands fa-whatsapp"></i>
                        <i className="iconos telefono p-2  fs-5 fa-solid fa-phone"></i>   
                        <p className='fw-bold'>(+569)85495123</p>
                        <i class="iconos p-2  fs-5 fa-solid fa-envelope">    </i>
                        <p className='fw-bold'>drakarlaacunas@gmail.com</p>

                        <i className="iconos2 me-3 fs-3 p-3  fa-brands fa-facebook-f mb-5"></i>
                        <i className="iconos2 me-3  fs-3  p-3  fa-brands fa-square-instagram"></i>
                        <i className="iconos2 fs-3 me-3  p-3 telefono fa-solid fa-phone"></i>
                        </div>
                  
                  {/* <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p className="text-center text-muted">© 2023 by Bárbara</p>
                  </div> */}
                </nav>
                <section className='col-xs-12 col-lg-6 border border-white '>
                  <h1 className='mt-5 mb-5'>Nuestros Link</h1>
                  <div className=''>
                    <li> <Link to="/Inicio" className='mb-3 fs-4 text-white'>Inicio</Link></li>
                    <li> <Link to="/SobreMi" className='mb-3 fs-4 text-white'>Sobre Nosotros</Link></li>
                    <li><Link to="/NuestrosTratamientos" className=' mb-3 fs-4 text-white'>Nuestros Tratamiento</Link></li>
                    <li> <Link to="/Contacto" className='mb-3 fs-4 text-white'>Contacto</Link></li>
                  </div>
                </section>
  <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p className="text-center text-muted mt-5 ">Clinica Dra Karla Acuña- © 2023 by Bárbara-Todos los Derechos Reservados</p>
                  </div>
            </footer> 
        </div>
    );
  }
  
  export default FooterPagina;
