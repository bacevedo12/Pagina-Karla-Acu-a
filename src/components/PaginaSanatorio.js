import fotoPaginaSanatorio from "../images/paginaSanatorio.jpg";
import { Button } from "react-bootstrap";
import "./PaginaSanatorio.css"

const PaginaSanatorio = () => {
    return (
        <section>
        <div className="bg-light">
           <h1 className="bg-light text-danger pt-5">Como Pido Hora <br></br> En el Sanatorio Alemán </h1>
        <div className="divFoto">
           <img alt="fotoPaginaSanatorio"src={fotoPaginaSanatorio} className="imagenDoctor bg-light mt-5 img-fluid"/>
        </div>  
        </div>
        <div className="divLetra"> 
        <a href="https://pidehora.sanatorioaleman.cl/?utm_source=web&utm_medium=boton_home&utm_campaign=click" target="_blank">
            <Button  className="text-light fw-bold fs-2 m-5  botonPedirHora2 text-start" variant="danger">Pedir Hora ahora</Button>
        </a>  
        </div>
        </section>
    )
}

export default PaginaSanatorio;