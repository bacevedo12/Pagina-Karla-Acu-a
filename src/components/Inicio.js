import fotoInicio from "../images/fotoContacto.jpg";
// import fotoInicio from "../images/fotoKarla.jpg";
import fotoTratamiento2 from "../images/fotoTratamientos2.jpg";
import fotoTratamiento3 from "../images/fotoTratamientos3.jpeg";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ControlledCarousel from "./Carousel"
import "./Inicio.css"


const Inicio = () => {
    return (
        <div className="containerCarrousel" >
            <main className="row justify-content-center containerMain ">
            <h1 className="tituloNombre mt-5 fw-bold text-center"> Clínica Dra. Karla Acuñas Farias</h1>
                <div className="col-lg-6 col-sm-12">
                <img alt="fotoInicio"src={fotoInicio} className="imagenDoctor mt-5 mb-5 img-fluid"/>
                </div>
             <div className="descripcionMedico col-lg-6 col-sm-12">
              
              <p className="parrafoInicio mt-5 pt-4 ps-4 pe-5 fs-3 fw-bold text-start mt-3 ">Bienvenidos a nuestra clínica de medicina estética facial, donde nos especializamos en realzar la belleza natural de nuestros pacientes. Nos enorgullece ofrecer una amplia gama de tratamientos y procedimientos estéticos de alta calidad, diseñados para mejorar tu aspecto y tu confianza.</p>
              {/* <p className="parrafoInicio pt-4 pb-5 ps-4 pe-5 fs-4 fw-bold mt-3 text-start">Nuestro equipo altamente capacitado y experimentado está aquí para ayudarte a lograr los resultados que deseas de manera segura y efectiva. Confíe en nosotros para brindarte la atención personalizada que te merece y para ayudarte a sentirte lo mejor posible.</p> */}
              {/* <Button as={Link} to="/SobreMi" className="text-light m-5 botonLeerMas" variant="secondary">Leer más</Button> */}
              </div> 
            </main> 
            <section className="container">
                <div className=" row">
                <div className=" col-lg-6 col-md-12 tituloCarousel">
                    <h1 className=" pt-3 text-center">Tratamientos de Vanguardia en Medicina Estetica Facial</h1>
                    <div className="divider2 text-center mb-3"></div>
                     <br></br>
                    <p className="parrafoCarrousel ms-5 me-5 mb-5 fw-bold fs-3">Te gustaría realizar un cambio natural en tu rostro o algo que te incomoda 
                    y quizas sin pabellon tiene solución, nosotros te podemos ayudar buscando el tratamiento indicado para ti.
                    </p>
                    <div className="">
                      
                      <Button as={Link} to="/NuestrosTratamientos" className="text-light fw-bold fs-4 m-5 botonPedirHora text-start" variant="secondary">Ver Nuestros Tratamientos</Button>
       
                      </div>    
                </div>
                <div className="col-lg-6 col-md-12 tituloCarousel">
                <img alt="fotoInicio"src={fotoTratamiento2} className="imagenTratamiento mt-5 img-fluid"/>
                <img alt="fotoInicio"src={fotoTratamiento3} className="imagenTratamiento mt-5 img-fluid"/>
               
                </div>
                <div className=" carousel">
                     <ControlledCarousel/>
                </div>
                </div>
            </section>
        </div>
        
           
       
    )
}

export default Inicio